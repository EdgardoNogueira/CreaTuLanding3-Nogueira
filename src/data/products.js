const products = [
  {
    id: '1',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 45990,
    category: 'electronica',
    image: 'https://placehold.co/600x400?text=Auriculares',
  },
  {
    id: '2',
    name: 'Smartwatch Fit Pro',
    description: 'Reloj inteligente con seguimiento deportivo.',
    price: 89990,
    category: 'electronica',
    image: 'https://placehold.co/600x400?text=Smartwatch',
  },
  {
    id: '3',
    name: 'Campera Urbana',
    description: 'Campera impermeable con interior térmico.',
    price: 74990,
    category: 'ropa',
    image: 'https://placehold.co/600x400?text=Campera',
  },
  {
    id: '4',
    name: 'Zapatillas Running',
    description: 'Zapatillas livianas para entrenamiento diario.',
    price: 62990,
    category: 'deportes',
    image: 'https://placehold.co/600x400?text=Zapatillas',
  },
  {
    id: '5',
    name: 'Set de Jardín',
    description: 'Set de macetas y herramientas básicas.',
    price: 39990,
    category: 'hogar',
    image: 'https://placehold.co/600x400?text=Jardin',
  },
  {
    id: '6',
    name: 'Lámpara de Mesa',
    description: 'Lámpara LED con luz cálida regulable.',
    price: 28990,
    category: 'hogar',
    image: 'https://placehold.co/600x400?text=Lampara',
  },
];

const simulateDelay = (value, time = 600) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });

export const getProducts = (categoryId) => {
  if (!categoryId) {
    return simulateDelay(products);
  }

  const filtered = products.filter((product) => product.category === categoryId);
  return simulateDelay(filtered);
};

export const getProductById = (itemId) => {
  const found = products.find((product) => product.id === itemId) || null;
  return simulateDelay(found);
};

export const categories = [
  { id: 'electronica', label: 'Electrónica' },
  { id: 'ropa', label: 'Ropa y Accesorios' },
  { id: 'hogar', label: 'Hogar y Jardín' },
  { id: 'deportes', label: 'Deportes' },
];
