import React from 'react';
import s from './index.module.css';
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducer/cartReducer';

export default function CartItem({ id, title, price, count, image, discont_price }) {
  const dispatch = useDispatch();

  // Рассчитываем цену с учетом скидки (если есть)
  const price_disc = (discont_price ? ((discont_price * count).toFixed(2)) : price.toFixed(2));

  // Рассчитываем общую цену для товара (если есть скидка, иначе оставляем пустую строку)
  const price_cart = (discont_price ? ((price * count).toFixed(2)) : (''));

  return (
    <div className={s.card}>
      <div>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </div>

      <div className={s.discr_cont}>
        <p>{title}</p>
        <div className={s.inc_dic}>
          {/* Уменьшить количество товара в корзине */}
          <button className={s.decr_btn} onClick={() => dispatch(decrementCountAction(id))}>-</button>
          <p>{count}</p>
          {/* Увеличить количество товара в корзине */}
          <button className={s.incr_btn} onClick={() => dispatch(incrementCountAction(id))}>+</button>
        </div>
      </div>

      <div className={s.price_dis}>
        {/* Отображение цены с учетом скидки */}
        <p>{price_disc}$</p>
        {/* Отображение общей цены для товара (если есть скидка, иначе пусто) */}
        <p>{price_cart}</p>
      </div>

      {/* Кнопка для удаления товара из корзины */}
      <span className={s.kreuz} onClick={() => dispatch(deleteFromCartAction(id))}>
        X
      </span>
    </div>
  );
}


