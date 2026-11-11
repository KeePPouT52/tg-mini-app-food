import React, { useState } from 'react';

export default function App() {
  // Состояние для количества товаров в корзине
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 0,
  });

  const updateQuantity = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  // Товары для примера
  const products = [
    {
      id: 1,
      title: 'Свежий ролл Филадельфия',
      price: 15.99,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      title: 'Пицца Пепперони',
      price: 12.50,
      image: 'https://via.placeholder.com/80',
    }
  ];

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = products.reduce((sum, item) => sum + item.price * (quantities[item.id] || 0), 0).toFixed(2);

  return (
    <div className="bg-gray-100 font-sans min-h-screen pb-24">
      {/* Шапка */}
      <header className="bg-white shadow-md p-4 text-center font-bold text-xl text-gray-800 sticky top-0 z-10">
        Каталог товаров
      </header>

      {/* Список товаров */}
      <main className="p-4 space-y-4 max-w-md mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src={product.image} alt={product.title} className="w-20 h-20 rounded-md object-cover" />
            
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>

            {/* Счётчик */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => updateQuantity(product.id, -1)}
                className="bg-gray-200 hover:bg-gray-300 w-8 h-8 flex items-center justify-center rounded-md font-bold text-gray-700 transition"
              >
                -
              </button>
              <span className="font-semibold w-6 text-center">{quantities[product.id] || 0}</span>
              <button 
                onClick={() => updateQuantity(product.id, 1)}
                className="bg-gray-200 hover:bg-gray-300 w-8 h-8 flex items-center justify-center rounded-md font-bold text-gray-700 transition"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Плавающая кнопка корзины */}
      <div className="fixed bottom-4 left-0 right-0 px-4 max-w-md mx-auto">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg flex justify-between items-center transition">
          <span>В корзине: {totalItems} шт.</span>
          <span>Итого: ${totalPrice}</span>
        </button>
      </div>
    </div>
  );
}