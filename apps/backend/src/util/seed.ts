import mongoose from 'mongoose';
import { ItemModel, ShoppingItem } from '~src/models/shoppingItem';

const createItem = async () => {
  const newItem: ShoppingItem = {
    _id: new mongoose.Types.ObjectId(),
    bought: false,
    name: 'test',
    createdAt: new Date(),
  };
  await ItemModel.create(newItem);
};

export const seed = async () => {
  await createItem();
};
