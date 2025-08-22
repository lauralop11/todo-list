import { useState, useEffect } from 'react';
import { getItems, getBooks } from '../service/Items';

interface Item {
  id: number;
  content: string;
  status: string | null;
}

export function useGet (table: string) : { items: Item[] }{
  const [ items, setItems ] = useState<Item[]>([]);

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
  }, [table]);

  return { items };
}