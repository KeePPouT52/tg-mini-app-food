// Импорт изображений
import pizzaPepperoni from '../assets/pizza-pepperoni.jpg';
import pizzaHawaii from '../assets/pizza-hawaii.jpg';
import rollyFiladelfiya from '../assets/rolly-filadelfiya.jpg';
import rollyKentukky from '../assets/rolly-kentukky.jpg';
import limonadeCoke from '../assets/limonade-coke.jpg';
import limonadeMojito from '../assets/limonade-mojito.jpg';

export const products = [
  {
    id: 1,
    title: 'Ролл Филадельфия',
    description: 'Классический ролл с лососем, сливочным сыром и огурцом',
    price: 15.99,
    image: rollyFiladelfiya,
    tags: ['🔥 Хит', '🐟 Рыба'],
    category: 'rolls'
  },
  {
    id: 2,
    title: 'Ролл Кентукки',
    description: 'Острый ролл с курицей, соусом барбекю и хрустящим луком',
    price: 13.50,
    image: rollyKentukky,
    tags: ['🌶️ Острый', '🍗 Курица'],
    category: 'rolls'
  },
  {
    id: 3,
    title: 'Пицца Пепперони',
    description: 'Итальянская пицца с острой салями пепперони и моцареллой',
    price: 12.50,
    image: pizzaPepperoni,
    tags: ['🔥 Популярно', '🌶️ Острая'],
    category: 'pizza'
  },
  {
    id: 4,
    title: 'Пицца Гавайская',
    description: 'Сочетание ветчины, ананасов и сыра моцарелла',
    price: 11.99,
    image: pizzaHawaii,
    tags: ['🍍 Экзотика', '🥓 Ветчина'],
    category: 'pizza'
  },
  {
    id: 5,
    title: 'Лимонад Кола',
    description: 'Освежающий домашний лимонад со вкусом колы',
    price: 3.99,
    image: limonadeCoke,
    tags: ['🥤 Напиток', '❄️ Холодный'],
    category: 'drinks'
  },
  {
    id: 6,
    title: 'Лимонад Мохито',
    description: 'Безалкогольный мохито с мятой, лаймом и льдом',
    price: 4.50,
    image: limonadeMojito,
    tags: ['🥤 Напиток', '🌿 Мята'],
    category: 'drinks'
  },
];

export const categories = [
  { id: 'all', name: 'Все', icon: '🛍️' },
  { id: 'rolls', name: 'Роллы', icon: '🍣' },
  { id: 'pizza', name: 'Пицца', icon: '🍕' },
  { id: 'drinks', name: 'Напитки', icon: '🥤' },
];
