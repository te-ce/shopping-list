import { useDeleteShoppingItem } from '../hooks/useDeleteShoppingItem';
import { useUpdateShoppingItem } from '../hooks/useUpdateShoppingItem';
import { ShoppingItem as ShoppingItemProps } from '../models/shoppingItem';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export const ShoppingItem = ({ item }: { item: ShoppingItemProps }) => {
  const deleteShoppingItem = useDeleteShoppingItem();
  const updateShoppingItem = useUpdateShoppingItem();

  const handleToggle = () => {
    updateShoppingItem(item._id, !item.bought);
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    deleteShoppingItem(item._id);
  };

  return (
    <dd className="flex w-full items-center justify-between gap-4">
      <Checkbox
        className="border-black bg-white"
        checked={item.bought}
        onClick={handleToggle}
      />
      <span className={`${item.bought ? 'line-through' : ''} wrap-anywhere`}>
        {item.name}
      </span>
      <Button
        className="bg-zinc-300 text-black hover:bg-red-500"
        onClick={handleDeleteClick}
      >
        x
      </Button>
    </dd>
  );
};
