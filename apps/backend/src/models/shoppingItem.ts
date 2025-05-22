import { model, Schema, Types } from 'mongoose';

export interface ShoppingItem {
  _id: Types.ObjectId;
  name: string;
  bought: boolean;
  createdAt: Date;
}

export const itemSchema = new Schema({
  _id: Types.ObjectId,
  name: { type: String, required: true },
  bought: { type: Boolean, required: true },
  createdAt: { type: Date, required: true },
});

export const ItemModel = model('Item', itemSchema);
