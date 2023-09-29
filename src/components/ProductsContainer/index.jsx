import React from 'react';
import ProductCard from '../ProductCard';
import s from './index.module.css';

export default function ProductsContainer({ products, category_show }) {
  return (
    <div className={s.container}>
      {/* Отображаем список продуктов в виде карточек */}
      {
        products
          .filter(el => el.show_product) // Фильтруем продукты, чтобы отобразить только те, которые нужно показать
          .map(el => <ProductCard key={el.id} {...el} category_show={category_show} />)
      }
    </div>
  );
}
