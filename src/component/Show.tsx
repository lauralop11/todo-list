import { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  completed: boolean;
}

export function Show () {
  const [items, setItems] = useState<Item>([]);

  useEffect(() => {
    fetch('/api/list/getItem')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.error('Error fetching items:', err));
  }, []);
  console.log(items);
  return (
    <div className='show'>
      <ul className='show-list'>
        { items?.map(item => (
          <li key={item.id} className = 'show-list-item'>
           {item.content} 
            <span className='status'>
              {item.completed ? '✔️' : '❌'}
           </span>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
