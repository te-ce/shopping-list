import { useCallback } from 'react';
import { useShoppingItemStore } from '../store/shoppingItemStore';
import { BASE_DB_URI, SHOPPING_ITEM_DB_URI } from '../config/config';

export const useDeleteShoppingItem = () => {
  const deleteShoppingItem = useShoppingItemStore((state) => state.delete);
  return useCallback(
    (id: string) => {
      return fetch(`${BASE_DB_URI}/${SHOPPING_ITEM_DB_URI}/${id}`, {
        method: 'DELETE',
      }).then(() => {
        deleteShoppingItem(id);
      });
    },
    [deleteShoppingItem],
  );
};
