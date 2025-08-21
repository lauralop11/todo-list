import { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless'

const URL: string = process.env.DATABASE_URL || '';

export default async function handler (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const sql = neon(URL);

  const {content} = req.body;

  if (!content ) {
    return res.status(400).json({ error: 'Contenido requerido' });
  }
  try {
    const result = await sql`INSERT INTO list (content) VALUES (${content}) RETURNING *`;
    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Error adding item' });
  }
}