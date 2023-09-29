import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../request/products_req';
import { Link, useParams } from 'react-router-dom';
import s from './index.module.css';
import { addToCartAction } from '../../store/reducer/cartReducer';

export default function SingleProductPage() {
  // Извлекаем параметр "id" из URL с помощью react-router-dom
  const { id } = useParams();

  // Получаем доступ к диспетчеру Redux
  const dispatch = useDispatch();

  // Используем useEffect для выполнения запроса на сервер при загрузке страницы
  useEffect(() => {
    // Вызываем функцию для получения информации о продукте с указанным "id"
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  // Извлекаем информацию о продукте из состояния Redux
  const single_product_state = useSelector(state => state.singleProduct);

  // Извлекаем необходимые данные о продукте
  const { title, price, discont_price, description, image } = single_product_state;

  // Обработчик клика на кнопке "Добавить в корзину"
  const handleAddToCart = () => {
    // Диспатчим действие для добавления продукта в корзину
    dispatch(addToCartAction({ id: +id, title, price, image, discont_price }));
  };

  return (
    <div className={s.product_item}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{title}</p>
        <p>Price: {price}$</p>
        <p>Discount: {discont_price}$</p>
        <p>Description: {description}</p>
        <div
          className={s.add_btn}
          onClick={handleAddToCart} // Обработчик клика на кнопке "Добавить в корзину"
        >
          Add to cart
        </div>
      </div>
    </div>
  );
}



// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { getSingleProduct } from '../../request/products_req';
//  import { Link, useParams,  } from 'react-router-dom';
// import s from './index.module.css'
// import { addToCartAction } from '../../store/reducer/cartReducer';




// export default function SingleProductPage() {
	
//   const { id } = useParams()

//   const dispatch = useDispatch()

//  useEffect(()=> dispatch(getSingleProduct(id)), [])

//   const single_product_state = useSelector(state => state.singleProduct)

  
//   const { title, price, discont_price, description, image } = single_product_state

//   // console.log(single_product_state);

//   return (
//     <div className={s.product_item}>
//        <img src={`http://localhost:3333${image}`} alt={title} />
// 		  <div>
			  
// 		  <p>{title}</p> 
// 		  <p>Price: {price}$</p>  
//         <p>Discount: {discont_price}$</p>
//         <p>Description: {description}</p>
// 			  <div className={s.add_btn}
				  
// 				  onClick={() => dispatch(addToCartAction({ id:+id, title,price, image, discont_price }))}
				  
// 			  >Add to card</div>
//       </div>
//     </div>
//   )
// }