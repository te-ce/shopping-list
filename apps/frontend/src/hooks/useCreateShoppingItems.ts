import { useCallback } from 'react';
import { useShoppingItemStore } from '../store/shoppingItemStore';
import { BASE_DB_URI, SHOPPING_ITEM_DB_URI } from '../config/config';
import { ShoppingItemSchema } from '../models/shoppingItem';

export const useCreateShoppingItems = () => {
  const createItem = useShoppingItemStore((state) => state.create);
  return useCallback(
    async (name: string) => {
      const data = await fetch(`${BASE_DB_URI}/${SHOPPING_ITEM_DB_URI}/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      const newItem = ShoppingItemSchema.parse(await data.json());
      createItem(newItem);
    },
    [createItem],
  );
};
