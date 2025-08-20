import { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless'

const URL: string = process.env.DATABASE_URL || '';

export default async function handler (req: VercelRequest, res: VercelResponse) {
   console.log(process.env.DATABASE_URL);
  const sql = neon(URL);
  try {
    const data = await sql`SELECT * FROM book`;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Error fetching items' });
  }
}