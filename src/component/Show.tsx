import { useGet } from '../hooks/useGet';
import { handleClick, handleClickDelete } from '../service/handleClick';

export default function Show ({table}: {table: string}) {
  const { items } = useGet(table);

  return (
    <div className='show'>
      <ul className='show-list'>
        { items?.map(item => (
          <li key={item.id} className={`${item.status === 'true'? 'completed' : ''}`}>
           {item.content} 
           <div>
             <button className='status check' onClick={() => handleClick(item.id, table)}>
             ✅
           </button>
           <button className='status' onClick={() => handleClickDelete(item.id, table)}>
            ❌
           </button>
           </div>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
