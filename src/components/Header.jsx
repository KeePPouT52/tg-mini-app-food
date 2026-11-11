import React from 'react';

const Header = ({ user, isConnected }) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-tg-bg to-tg-secondary shadow-xl border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Профиль пользователя */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-tg-accent to-tg-button rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {user?.firstName?.[0] || 'U'}
              </div>
              {isConnected && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-tg-bg rounded-full animate-pulse"></div>
              )}
            </div>
            <div>
              <h1 className="text-tg-text font-bold text-lg">
                {user?.firstName || 'Гость'}
              </h1>
              <p className="text-tg-hint text-xs">
                {isConnected ? '✓ Подключено' : '○ Не подключено'}
              </p>
            </div>
          </div>

          {/* Логотип или название */}
          <div className="text-right">
            <h2 className="text-tg-accent font-bold text-xl">🛍️ ShopTG</h2>
            <p className="text-tg-hint text-xs">Premium Store</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
