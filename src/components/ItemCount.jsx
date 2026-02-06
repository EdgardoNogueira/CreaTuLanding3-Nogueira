import { useState } from 'react';

const ItemCount = ({ stock = 10, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setCount((prev) => Math.min(stock, prev + 1));
  };

  return (
    <div className="d-flex align-items-center gap-3 mt-4">
      <button type="button" className="btn btn-outline-secondary" onClick={handleDecrease}>
        -
      </button>
      <span className="fw-bold">{count}</span>
      <button type="button" className="btn btn-outline-secondary" onClick={handleIncrease}>
        +
      </button>
      <button type="button" className="btn btn-success ms-3">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
