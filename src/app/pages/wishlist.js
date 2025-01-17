// /pages/api/wishlist.js
let wishlist = []; // You can replace this with a database or session storage

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(wishlist); // Get wishlist items
  }

  if (req.method === 'POST') {
    // Add item to wishlist
    const { id, title } = req.body;
    const product = { id, title };
    wishlist.push(product);
    return res.status(200).json({ message: 'Item added to wishlist', wishlist });
  }

  if (req.method === 'DELETE') {
    // Remove item from wishlist
    const { id } = req.body;
    wishlist = wishlist.filter(item => item.id !== id);
    return res.status(200).json({ message: 'Item removed from wishlist', wishlist });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
