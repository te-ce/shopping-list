import { useCallback } from 'react';
import { useShoppingItemStore } from '../store/shoppingItemStore';
import { BASE_DB_URI, SHOPPING_ITEM_DB_URI } from '../config/config';
import { ShoppingItemsSchema } from '../models/shoppingItem';

export const useGetShoppingItems = () => {
  const createShoppingItems = useShoppingItemStore((state) => state.create);
  return useCallback(async () => {
    const data = await fetch(`${BASE_DB_URI}/${SHOPPING_ITEM_DB_URI}/`);
    const newItems = ShoppingItemsSchema.parse(await data.json());
    newItems.forEach((newItem) => createShoppingItems(newItem));
  }, [createShoppingItems]);
};
