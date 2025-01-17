// /pages/api/products.js
export default function handler(req, res) {
    const products = [
      { id: 1, title: 'Rocket Single Seater', price: '25000', image: '/image/rocket_chair.webp' },
      { id: 2, title: 'Side Table', price: '5000', image: '/image/side_table.webp' },
      { id: 3, title: 'Granite Dining Table', price: '15000', image: '/image/product2.webp' },
      { id: 4, title: 'Modular Sofa', price: '30000', image: '/image/product1.webp' },
      // Add more products here
    ];
    res.status(200).json(products);
  }
  