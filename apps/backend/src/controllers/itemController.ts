import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { ItemModel, ShoppingItem } from '~models/shoppingItem';

export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name } = req.body;
    const newItem: ShoppingItem = {
      _id: new mongoose.Types.ObjectId(),
      bought: false,
      name,
      createdAt: new Date(),
    };

    const item = await ItemModel.create(newItem);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

export const getItems = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const items = await ItemModel.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getItemById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params;
    const item = await ItemModel.findById(id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { bought } = req.body;
    const item = await ItemModel.findByIdAndUpdate(
      id,
      { bought: bought },
      { new: true },
    );
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const deletedItem = await ItemModel.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    res.json(deletedItem);
  } catch (error) {
    next(error);
  }
};
