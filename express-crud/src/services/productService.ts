import * as fs from 'fs-extra';
import path from 'path';
import { IProduct } from '../types/Product';

const filePath = path.join(__dirname, '../data/products.json');

export const getProducts = (): IProduct[] => {
  return fs.readJsonSync(filePath);
};

export const saveProducts = (products: IProduct[]): void => {
  fs.writeJsonSync(filePath, products, { spaces: 2 });
};
