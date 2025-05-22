import { useCallback } from 'react';
import { useShoppingItemStore } from '../store/shoppingItemStore';
import { BASE_DB_URI, SHOPPING_ITEM_DB_URI } from '../config/config';

export const useUpdateShoppingItem = () => {
  const updateShoppingItem = useShoppingItemStore((state) => state.update);
  return useCallback(
    (id: string, bought: boolean) => {
      return fetch(`${BASE_DB_URI}/${SHOPPING_ITEM_DB_URI}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({ bought }),
      }).then(() => {
        updateShoppingItem(id, bought);
      });
    },
    [updateShoppingItem],
  );
};
