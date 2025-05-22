import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ShoppingItem } from '../models/shoppingItem';
interface ShoppingItemState {
  shoppingItems: ShoppingItem[];
  create: (shoppingItem: ShoppingItem) => void;
  update: (id: string, bought: boolean) => void;
  delete: (id: string) => void;
}

const shoppingItems: ShoppingItem[] = [];

export const useShoppingItemStore = create<ShoppingItemState>()(
  devtools(
    (set) => ({
      shoppingItems: [...shoppingItems],

      create: (newItem) =>
        set((state) => {
          const exists = state.shoppingItems.some(
            (item) => item._id === newItem._id,
          );
          const updatedItems = exists
            ? state.shoppingItems.map((item) =>
                item._id === newItem._id ? newItem : item,
              )
            : [...state.shoppingItems, newItem];
          return { shoppingItems: updatedItems };
        }),

      update: (id, bought) =>
        set((state) => ({
          shoppingItems: state.shoppingItems.map((item) => {
            if (item._id === id) {
              item = { ...item, bought };
            }
            return item;
          }),
        })),

      delete: (id) =>
        set((state) => ({
          shoppingItems: state.shoppingItems.filter((item) => item._id !== id),
        })),
    }),
    {
      name: 'shoppingItem-storage',
    },
  ),
);
