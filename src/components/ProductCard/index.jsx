import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducer/cartReducer';

export default function ProductCard({ id, title, discont_price, image, price }) {
  const dispatch = useDispatch();

  // Вычисляем процент скидки
  const countDiscont = Math.round(discont_price ? ((price - discont_price) / price * 100) : 0);

  return (
    <div className={s.card_item}>
      <Link to={`/products/${id}`}>
        {/* Карточка продукта */}
        <div className={s.card}>
          <img src={`http://localhost:3333${image}`} alt={title} />
        </div>

        {/* Информация о цене и скидке */}
        <div className={s.price_info}>
          {discont_price && discont_price > 0 ? (
            // Если есть скидка, отображаем обычную и скидочную цены
            <p>
              {discont_price}$
              {/* Отображаем перечеркнутую цену */}
              <span className={s['discounted-price']}>{price}$</span>
            </p>
          ) : (
            // В противном случае отображаем обычную цену
            <p>{price}$</p>
          )}
          {/* Отображаем процент скидки */}
          <p>{countDiscont}%</p>
        </div>

        {/* Название продукта */}
        <p className={s.title}>{title}</p>
      </Link>

      {/* Кнопка "Add to Cart" для добавления продукта в корзину */}
      <div
        className={s.add_btn}
        onClick={() => dispatch(addToCartAction({ id, title, image, price, discont_price }))}
      >
        Add to Cart
      </div>
    </div>
  );
}




// import React from 'react';
// import s from './index.module.css';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCartAction } from '../../store/reducer/cartReducer';

// export default function ProductCard({ id, title, discont_price, image, price }) {
//   const dispatch = useDispatch();

//   // Вычисляем процент скидки
//   const countDiscont = Math.round(discont_price ? ((price - discont_price) / price * 100) : 0);

//   return (
//     <div className={s.card_item}>
//       <Link to={`/products/${id}`}>
//         <div className={s.card}>
//           <img src={`http://localhost:3333${image}`} alt={title} />
//         </div>

//         <div className={s.price_info}>
//           {discont_price && discont_price > 0 ? (
//             <p>
//               {discont_price}$
//               <span className={s['discounted-price']}>{price}$</span>
//             </p>
//           ) : (
//             <p>{price}$</p>
//           )}
//           <p>{countDiscont}%</p>
//         </div>

//         <p className={s.title}>{title}</p>
//       </Link>

//       <div
//         className={s.add_btn}
//         onClick={() => dispatch(addToCartAction({ id, title, image, price, discont_price }))}
//       >
//         Add to Cart
//       </div>
//     </div>
//   );
// }

