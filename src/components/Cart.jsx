import React from 'react';

const Cart = ({ totalItems, totalPrice, onCheckout }) => {
  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-tg-button to-tg-accent hover:from-tg-accent hover:to-tg-button text-white font-bold py-4 px-6 rounded-2xl shadow-2xl transition-all duration-300 active:scale-95 flex items-center justify-between group"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </div>
              )}
            </div>
            <div className="text-left">
              <div className="text-sm opacity-90">Корзина</div>
              <div className="text-lg font-bold">
                {totalItems} {totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm opacity-90">Итого</div>
            <div className="text-2xl font-bold">${totalPrice}</div>
          </div>

          <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
