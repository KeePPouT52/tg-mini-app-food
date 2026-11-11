import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';
import { products, categories } from './data/products';

export default function App() {
  const [quantities, setQuantities] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');

  const updateQuantity = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = products.reduce((sum, item) => sum + item.price * (quantities[item.id] || 0), 0).toFixed(2);

  const filteredProducts = activeCategory === 'all'
    ? products : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-gray-100 font-sans min-h-screen pb-24">
      <Header user={{ firstName: 'Александр' }} isConnected={true} />
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main className="p-4 space-y-4 max-w-4xl mx-auto">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={quantities[product.id] || 0}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </main>

      <Cart totalItems={totalItems} totalPrice={totalPrice} onCheckout={() => alert('По заказу!')} />
    </div>
  );
}