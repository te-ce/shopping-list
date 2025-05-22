import { useEffect } from 'react';
import { useGetShoppingItems } from '../hooks/useGetShoppingItems';
import { useShoppingItemStore } from '../store/shoppingItemStore';
import { ShoppingItem } from './shoppingItem';

export const ShoppingList = () => {
  const shoppingItems = useShoppingItemStore((state) => state.shoppingItems);
  const getShoppingItems = useGetShoppingItems();

  useEffect(() => {
    getShoppingItems();
  }, [getShoppingItems]);
  return (
    <>
      {shoppingItems.length ? (
        <dl className="max-w-screen flex min-w-[33vw] flex-col items-center gap-4 rounded-2xl bg-zinc-200 p-4 text-black">
          {shoppingItems.map((item) => (
            <ShoppingItem item={item} key={item._id} />
          ))}
        </dl>
      ) : null}
    </>
  );
};
