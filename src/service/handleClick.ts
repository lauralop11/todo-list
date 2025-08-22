import { upDateItem } from './Items';

export const handleClick = async (id: number, table: string) => {
   try {
    await upDateItem({ table, id });
    window.location.reload();
   } catch (error){
      console.error('Error handling click:', error);
   }
  }

export const handleClickDelete = async (id: number, table: string) => {
  const apiEndpoint = table === 'list' ? '/api/list/deleteItem' : '/api/books/deleteItem';
  try {
    const response = await fetch(apiEndpoint, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: Number(id)}),
    });
    if (response.ok) {
      alert('Eliminado con exito!');
      window.location.reload();
    } 
  } catch (error) {
    console.error('Error al eliminar', error);
  }
}