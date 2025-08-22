interface Item {
  id: number;
  content: string;
  status: string | null;
}

export async function getItems() {
  const response = await fetch ('/api/list/getItem');
  if (response.ok) {
    const data = await response.json();
    return data as Item[];
  }
}

export async function getBooks() {
  const response = await fetch ('/api/books/getItem');
  if (response.ok) {
    const data = await response.json();
    return data as Item[];
  }
}

export async function upDateItem({table, id}: {table: string, id: number}) {
  const newStatus = 'true';
  const apiEndpoint = table === 'list' ? '/api/list/updateItem' : '/api/books/updateItem';

   try {
      const response = await fetch (apiEndpoint, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({id: Number(id), completed: newStatus}),
    })
      if (response.ok) {
        alert('Se ha actualizado con exito');
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
}