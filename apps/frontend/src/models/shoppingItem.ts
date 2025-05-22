import { z } from 'zod';

export const ShoppingItemSchema = z.object({
  _id: z.string(),
  name: z.string(),
  bought: z.boolean(),
  createdAt: z.string(),
});

export const ShoppingItemsSchema = z.array(ShoppingItemSchema);

export type ShoppingItem = z.infer<typeof ShoppingItemSchema>;

export const ItemFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Item must be at least 2 characters.',
  }),
});
