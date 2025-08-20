import { useState } from 'react';


export default function Search ({table}: {table: string}) {
  const [ value, setValue ] = useState<string>('');

  const handleClick = async () => {
    const apiEndpoint = table === 'list' ? '/api/list/postItem' : '/api/books/postItem';
    if(!value) {
      return
    }
    try {
      const response = await fetch ( apiEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({content: value}),
      })
      if (response.ok) {
        console.log('Se guardo con el exito');
        setValue('');
      }
    }catch (error) {
      console.error('Error adding item:', error);
    }
  }
  return (
    <div className='search'>
      <input className='search-input' 
      placeholder={`${table === 'list' ? 'Hacer mantecada': 'El amor en los tiempos del colera'}`} 
      type="text" 
      value={value} 
      onChange={(e) => {setValue(e.target.value)}}
      />
      <button className='search-button' onClick= {handleClick}>Agregar</button>
    </div>
    
  )
}