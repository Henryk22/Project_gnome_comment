import React from 'react';
import { useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer';
import AllProductsSort from '../../components/FilterForms/AllProductsSort';

export default function AllProductsPage() {
  // Получаем все продукты из состояния хранилища Redux
  const all_products_state = useSelector(state => state.allProducts);

  return (
    <div>
      <h1>All Products</h1>
      {/* Компонент AllProductsSort предоставляет возможность сортировки продуктов */}
      <AllProductsSort />
      {/* Отображаем список продуктов с использованием ProductsContainer */}
      <ProductsContainer products={all_products_state} />
    </div>
  );
}


