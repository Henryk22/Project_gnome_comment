import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../request/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import SortSales from '../../components/FilterForms/SortSales';

export default function AllSales() {
  // Получаем все товары из хранилища Redux
  const allProducts = useSelector(state => state.allProducts);
  const dispatch = useDispatch();

  // Запрашиваем все товары (распродажа и обычные) при загрузке страницы
  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  // Фильтруем все товары, чтобы оставить только те, которые находятся в распродаже
  const allSalesProducts = allProducts.filter(el => el.discont_price);

  console.log(allSalesProducts);

  return (
    <div>
      <h1>All Sales</h1>
      {/* Компонент SortSales отвечает за сортировку товаров */}
      <SortSales />
      {/* Отображаем товары в контейнере ProductsContainer */}
      <ProductsContainer products={allSalesProducts} productsStyle={true} />
    </div>
  );
}
