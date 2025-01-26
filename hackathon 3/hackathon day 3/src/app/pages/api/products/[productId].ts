// pages/api/products/[productId].ts
import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  {
    id: 'rocket-single-seater',
    name: 'Rocket Single Seater',
    description: 'A comfortable and stylish single seater.',
    price: 299.99,
    image: '/image/rocket_chair.webp',
  },
  // You can add more products as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;

  // Find the product based on the productId in the URL
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
}
