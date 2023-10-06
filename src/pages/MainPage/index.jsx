
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../../components/CategoriesContainer'
import ProductsContainer  from '../../components/ProductsContainer'
import s from './index.module.css'
import gnome from '../../Media/gnome.png'
import bush from '../../Media/bush.png'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProductSale, getAllProducts } from '../../request/products_req'
import {useForm} from 'react-hook-form'

export default function MainPage() {
// Инициализация React Hook Form для обработки формы
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange'
    });
// Регистрация поля "phoneNumber" для валидации
	const phoneNumberRegister = register('phoneNumber', {
        required: "*This field is required",
        pattern: {
            value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
            message: '*Please, enter valid phoneNumber'
        }
    });

    // Обработчик отправки формы
	const submit = new_product_obj => {
    // Добавление нового продукта со скидкой
		addNewProductSale(new_product_obj);
    // Сброс формы после успешной отправки
		reset()
	}
	
  const dispatch = useDispatch()
// Запрос всех продуктов при монтировании компонента
  useEffect(() => { dispatch(getAllProducts) }, [dispatch])

// Получение списка всех продуктов из хранилища Redux
  const allProducts = useSelector(state => state.allProducts)
  // Фильтрация продуктов с скидкой
  const products = allProducts.filter(el => el.discont_price)

// Получение случайной выборки из 4 продуктов с скидкой
  const get_random_products = () => {
    const first_four_products = [...products].sort(() => Math.random() - 0.5);
    return first_four_products.slice(0, 4)
	
  } 

    // Получение случайной выборки из 4 продуктов
  const random_products = get_random_products();
// -----------------------------------------------
  
  return (
    <div>
       {/* Секция с распродажей */}
      <div className={s.sale_container}>
        <div className={s.image}>
          <div className={s.text}>
          <div className={s.bush}>
                 <img src={bush} alt='Bush' />
          </div>        
		  <p>Sale</p>
		  <p>New season</p> 
    
		  <Link to={'/sales'} className={s.sale_btn}>
               Sale
            </Link>
          </div>

        </div>
      </div>

 {/* Секция с каталогом */}
      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h2>Catalog</h2>
          <Link to='/categories' >
            <div className={s.btn_cat}>All categories</div>
          </Link>
        </div>
        <CategoriesContainer limit={3} />
      </div>

 {/* Секция с изображением гнома и скидкой */}
      <div className={s.dwarf_wrapper}>
        <img src={gnome} alt="Gnome" />
        <div className={s.discount_descr}>
          <h1>5% off</h1>
          <h2>on the first order</h2>
           {/* Форма для получения скидки */}
          <form onSubmit={handleSubmit(submit)}>
                        <input type="text" className={s.phone_num_inp} placeholder='+49' name='phoneNumber' {...phoneNumberRegister}
                        />

                        {errors.phoneNumber && <p className={s.error_msg}>{errors.phoneNumber?.message}</p>}

                        <button className={s.discount_btn}>Get a discount</button>
                    </form>
        </div>
      </div>

 {/* Секция с товарами на распродаже */}
      <div className={s.gen_sale_container}>
        <h3>Sale</h3>
        <div>

 {/* Отображение первых четырех продуктов со скидкой */}
		<ProductsContainer products={random_products} category_show={false} />     

        </div>
      </div>

    </div>

    

  )
}




// import React, { useEffect } from 'react';
// // import sale_img from '../../Media/sale_img.png';
// import { Link } from 'react-router-dom';
// import CategoriesContainer from '../../components/CategoriesContainer';
// import ProductsContainer from '../../components/ProductsContainer';
// import s from './index.module.css';
// import gnome from '../../Media/gnome.png';
// import bush from '../../Media/bush.png'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../request/products_req';
// import { useForm } from 'react-hook-form';

// export default function MainPage() {
//   // Инициализация React Hook Form
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     mode: 'onChange'
//   });

//   // Регистрация поля для ввода телефонного номера с правилами валидации
//   const phoneNumberRegister = register('phoneNumber', {
//     required: "*This field is required",
//     pattern: {
//       value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
//       message: '*Please, enter a valid phoneNumber address'
//     }
//   });

//   // Обработчик отправки формы
//   const submit = data => console.log(data);

//   const dispatch = useDispatch();

//   // Запрос всех продуктов при загрузке страницы
//   useEffect(() => { 
//     dispatch(getAllProducts); 
//   }, [dispatch]);

//   // Получение списка всех продуктов из Redux состояния
//   const products = useSelector(state => state.allProducts);

//   // Фильтрация первых четырех продуктов, у которых есть скидка
//   const first_four_products = products.filter(el => el.discont_price !== null).slice(0, 4);

//   return (
//     <div>
//       {/* Секция с распродажей */}
//       <div className={s.sale_container}>
//         <div className={s.image}>
//           <div className={s.text}>
//             <p>Sale</p>
//             <p>New season</p>
//             <Link to={'/sales'} className={s.sale_btn}>
//               Sale
//             </Link>
//           </div>
//           <div className={s.bush}>
//                 <img src={bush} alt='Bush' />
//           </div>        
//         </div>
//       </div>

//       {/* Секция с каталогом */}
//       <div className={s.catalog_container}>
//         <div className={s.btn_container}>
//           <h2>Catalog</h2>
//           <Link to='/categories'>
//             <div className={s.btn_cat}>All categories</div>
//           </Link>
//         </div>
//         {/* Отображение списка категорий с ограничением до 3 штук */}
//         <CategoriesContainer limit={3} />
//       </div>

//       {/* Секция с изображением гнома и скидкой */}
//       <div className={s.dwarf_wrapper}>
//         <img src={gnome} alt="Gnome" />
//         <div className={s.discount_descr}>
//           <h1>5% off</h1>
//           <h2>on the first order</h2>
//           {/* Форма для получения скидки */}
//           <form onSubmit={handleSubmit(submit)}>
//             <input type="text" className={s.phone_num_inp} placeholder='+49' name='phoneNumber' {...phoneNumberRegister} />

//             {errors.phoneNumber && <p className={s.error_msg}>{errors.phoneNumber?.message}</p>}

//             <button className={s.discount_btn}>Get a discount</button>
//           </form>
//         </div>
//       </div>

//       {/* Секция с товарами на распродаже */}
//       <div className={s.gen_sale_container}>
//         <h3>Sale</h3>
//         <div>
//           {/* Отображение первых четырех продуктов с скидкой */}
//           <ProductsContainer products={first_four_products} productsStyle={true} />
//         </div>
//       </div>
//     </div>
//   );
// }

