import React, { useState } from 'react';

const ProductCard = ({ product, quantity, onUpdateQuantity }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);
  };

  return (
    <div 
      className={`
        bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden 
        card-hover animate-fade-in
        ${isPressed ? 'animate-bounce-subtle' : ''}
      `}
      onClick={handlePress}
    >
      <div className="relative">
        {/* Изображение товара */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          
          {/* Теги */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.tags?.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Цена */}
          <div className="absolute top-3 right-3">
            <div className="bg-gradient-to-r from-tg-button to-tg-accent text-white px-4 py-2 rounded-full shadow-lg font-bold">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Информация о товаре */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          {product.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Кнопка добавления в корзину */}
          {quantity === 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUpdateQuantity(product.id, 1);
              }}
              className="w-full bg-gradient-to-r from-tg-button to-tg-accent hover:from-tg-accent hover:to-tg-button text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>🛒</span>
              <span>Добавить в корзину</span>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateQuantity(product.id, -1);
                }}
                className="w-10 h-10 bg-white hover:bg-red-50 text-red-500 font-bold rounded-lg shadow-md transition-all duration-200 active:scale-90 flex items-center justify-center"
              >
                {quantity === 1 ? '🗑️' : '−'}
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-tg-button">{quantity}</span>
                <span className="text-sm text-gray-500">шт.</span>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateQuantity(product.id, 1);
                }}
                className="w-10 h-10 bg-gradient-to-r from-tg-button to-tg-accent hover:from-tg-accent hover:to-tg-button text-white font-bold rounded-lg shadow-md transition-all duration-200 active:scale-90 flex items-center justify-center"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
