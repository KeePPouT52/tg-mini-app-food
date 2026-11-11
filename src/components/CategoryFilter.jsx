import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-[72px] z-40 bg-gradient-to-b from-tg-bg to-transparent py-3 px-4 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full font-semibold whitespace-nowrap
                transition-all duration-300 active:scale-95 shadow-md
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-tg-button to-tg-accent text-white scale-105'
                  : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-lg'
                }
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
