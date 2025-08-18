import { useState } from 'react' 

interface Props {
  value: string;
}

export default function Search () {
  const [value, setValue] = useState<Props>('');
  const handleClick = async () => {
    if(!value) {
      return
    }
    try {
      const response = await fetch ('/api/list/postItem', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({content: value}),
      })
      if (response.ok) {
        console.log('Se guardo con el exito');
      }
     
    }
    catch (error) {
      console.error('Error adding item:', error);
    }
  }
  return (
    <div className='search'>
      <input className='search-input' placeholder='Hacer mantecada' type="text" value={value} onChange={(e) => {setValue(e.target.value)}}/>
      <button className='search-button' onClick= {handleClick}>Agregar</button>
    </div>
    
  )
}