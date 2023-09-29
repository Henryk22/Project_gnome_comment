import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../CategoryCard';
import s from './index.module.css';

export default function CategoriesContainer() {
  // Получаем состояние категорий из Redux
  const categories_state = useSelector(state => state.categories);

  return (
    <div className={s.container}>
      {/* Маппим каждую категорию на компонент CategoryCard */}
      {categories_state.map(el => (
        <CategoryCard key={el.id} {...el} />
      ))}
    </div>
  );
}



