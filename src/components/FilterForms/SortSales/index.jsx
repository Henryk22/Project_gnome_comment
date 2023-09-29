import React from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css';
import { filterProductsAction, sortProductsAction } from '../../../store/reducer/allProductsReducer';

export default function SortSales() {
  const dispatch = useDispatch();

  // Обработчик изменения сортировки товаров
  const order = (e) => {
    dispatch(sortProductsAction(e.target.value));
  };

  // Обработчик отправки формы фильтрации по цене
  const submit = (e) => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(filterProductsAction({ min_value, max_value }));
  };

  return (
    <div className={s.container}>
      {/* Форма фильтрации по цене */}
      <form className={s.price} onSubmit={submit}>
        <p className={s.title}>Price</p>
        <input type='' placeholder='min' name='min' />
        <input type='' placeholder='max' name='max' />
        <button type='submit'>Filter</button>
      </form>

      <div className={s.sorted}>
        <p className={s.title}>Sorted</p>
        {/* Выпадающий список для выбора сортировки */}
        <select onChange={order}>
   		  <option value='default'>By default</option>
			  <option value='title'>By alphabet A-Z</option>
			  <option value='price_asc'>By price ASC</option> 
        <option value='price_desc'>By price DESC</option>
        </select>
      </div>
    </div>
  );
}

