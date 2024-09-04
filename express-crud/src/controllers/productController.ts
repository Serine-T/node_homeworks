import { Request, Response } from 'express';
import { getProducts, saveProducts } from '../services/productService';
import { IProduct } from '../types/Product';

export const getAllProducts = (req: Request, res: Response) => {
  const category = req.query.category as string;
  let products = getProducts();

  if (category) {
    products = products.filter(product => product.category === category);
  }

  products = products.filter(product => !product.deleted);
  res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const products = getProducts();
  const product = products.find(p => p.id === id && !p.deleted);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};

export const createProduct = (req: Request, res: Response) => {
  const { name, category, price, stock, manufacturer } = req.body;
  if (stock.available < 0 || price <= 0) {
    return res.status(400).json({ message: 'Invalid stock or price value' });
  }

  const products = getProducts();
  const newProduct: IProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock,
    manufacturer,
    deleted: false
  };

  products.push(newProduct);
  saveProducts(products);

  res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { manufacturer } = req.body;
  const products = getProducts();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1 || products[productIndex].deleted) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (manufacturer?.address?.street) {
    products[productIndex].manufacturer.address.street = manufacturer.address.street;
  }

  saveProducts(products);
  res.json(products[productIndex]);
};

export const deleteProduct = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const products = getProducts();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex].deleted = true;
  saveProducts(products);

  res.json({ message: 'Product deleted' });
};
