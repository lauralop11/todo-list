import { useState, useEffect } from 'react';

interface Item {
  id: number;
  content: string;
  status: string | null;
}
async function getItems() {
  const response = await fetch ('/api/list/getItem');
  if (response.ok) {
    const data = await response.json();
    return data as Item[];
  }
}

async function getBooks() {
  const response = await fetch ('/api/books/getItem');
  if (response.ok) {
    const data = await response.json();
    return data as Item[];
  }
}

export default function Show ({table}: {table: string}) {
  const [ items, setItems ] = useState<Item[]>([]);
  const [ reload, setReload ] = useState<boolean>(false);

  useEffect(() => {
    const fetchItems = async () => {
      const data = table === 'list' ? await getItems() : await getBooks();
      if (!data) {
        console.error('No data found');
        return;
      }
      setItems(data);
    };
    fetchItems();
  }, [table, reload]);
 
  const handleClick = async (id:number | string) => {
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
    setReload(!reload);
  }
  return (
    <div className='show'>
      <ul className='show-list'>
        { items?.map(item => (
          <li key={item.id} className={`${item.status === 'true'? 'completed' : ''}`}>
           {item.content} 
            <button className='status' onClick={() => handleClick(item.id)}>
              ❌
           </button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
