// /pages/api/cart.js
let cart = []; // You can replace this with a database or session storage

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(cart); // Get cart items
  }

  if (req.method === 'POST') {
    // Add item to cart
    const { id, quantity } = req.body;
    const product = { id, quantity };
    cart.push(product);
    return res.status(200).json({ message: 'Item added to cart', cart });
  }

  if (req.method === 'DELETE') {
    // Remove item from cart
    const { id } = req.body;
    cart = cart.filter(item => item.id !== id);
    return res.status(200).json({ message: 'Item removed from cart', cart });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
