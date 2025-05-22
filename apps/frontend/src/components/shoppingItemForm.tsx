import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ItemFormSchema } from '../models/shoppingItem';
import { useCreateShoppingItems } from '../hooks/useCreateShoppingItems';

export const ShoppingItemForm = () => {
  const createShoppingItem = useCreateShoppingItems();

  const form = useForm<z.infer<typeof ItemFormSchema>>({
    resolver: zodResolver(ItemFormSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: z.infer<typeof ItemFormSchema>) => {
    createShoppingItem(data.name)
      .then(() => {
        form.reset();
        toast(`New item ${data.name} created`);
      })
      .catch((e) => {
        toast('Error:', {
          description: (
            <pre className="m-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(e, null, 2)}</code>
            </pre>
          ),
        });
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="New Item" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-lime-300 text-black hover:bg-lime-600"
        >
          +
        </Button>
      </form>
    </Form>
  );
};
