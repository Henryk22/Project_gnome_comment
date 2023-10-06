import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'
import { clearCartAction } from '../../store/reducer/cartReducer';
import { sendOrder } from '../../request/products_req';


export default function Cart() {

  const cart_state = useSelector(state => state.cart);


  useEffect(() => {
    localStorage.setItem('local_cart', JSON.stringify(cart_state))}, [cart_state]);
  
  const dispatch = useDispatch(); 

  const total = cart_state.reduce((acc, { price, discont_price, count }) => {
	const totalPrice = discont_price ? discont_price : price  
	return acc + totalPrice * count} , 0)


	const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
	  const phonePattern = /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/;

	  if (!phonePattern.test(phoneNumber)) {
		alert('Please, enter valid phoneNumber 01.......');
		return;
	  }
    
    //   
	
	sendOrder()
	e.target.reset()
  };


  return (    
    <div className={s.cart_cont}>
    <h1 className={s.title_cart}>Shopping cart</h1>
    
    <div>
      <div className={s.cart_cont}>       
        {cart_state.length > 0
          ? cart_state.map((el) => <CartItem key={el.id} {...el} />)
          : <h3 className={s.empty}>Your cart is empty.</h3>}
   
     
       {cart_state.length > 0 && (
        <form onSubmit={handleSubmit} className={s.order}>
          <h2>Order details</h2>
          <p>Total {total.toFixed(2)}$</p>
          <div className={s.pfon_ord}>
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
          />
            <button type="submit">Order</button>
          </div>
        </form>                
          )}
        </div>
      </div>
      
         {cart_state.length > 0 && (
        <div className={s.clear_btn} onClick={() => dispatch(clearCartAction())}>
          Clear cart
        </div>
      )}
      
    </div>
  );
}

// import React from 'react';
// import s from './index.module.css';
// import { useDispatch } from 'react-redux';
// import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducer/cartReducer';

// export default function CartItem({ id, title, price, count, image, discont_price }) {
//   const dispatch = useDispatch();

//   // Рассчитываем цену с учетом скидки (если есть)
//   const price_disc = (discont_price ? ((discont_price * count).toFixed(2)) : price.toFixed(2));

//   // Рассчитываем общую цену для товара (если есть скидка, иначе оставляем пустую строку)
//   const price_cart = (discont_price ? ((price * count).toFixed(2)) : (''));

//   return (
//     <div className={s.card}>
//       <div>
//         <img src={`http://localhost:3333${image}`} alt={title} />
//       </div>

//       <div className={s.discr_cont}>
//         <p>{title}</p>
//         <div className={s.inc_dic}>
//           {/* Уменьшить количество товара в корзине */}
//           <button className={s.decr_btn} onClick={() => dispatch(decrementCountAction(id))}>-</button>
//           <p>{count}</p>
//           {/* Увеличить количество товара в корзине */}
//           <button className={s.incr_btn} onClick={() => dispatch(incrementCountAction(id))}>+</button>
//         </div>
//       </div>

//       <div className={s.price_dis}>
//         {/* Отображение цены с учетом скидки */}
//         <p>{price_disc}$</p>
//         {/* Отображение общей цены для товара (если есть скидка, иначе пусто) */}
//         <p>{price_cart}</p>
//       </div>

//       {/* Кнопка для удаления товара из корзины */}
//       <span className={s.kreuz} onClick={() => dispatch(deleteFromCartAction(id))}>
//         X
//       </span>
//     </div>
//   );
// }


