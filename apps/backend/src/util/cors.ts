import { Response } from 'express';

export const allowCors = (res: Response) => {
  res.set('Access-Control-Allow-Origin', '*');
};
