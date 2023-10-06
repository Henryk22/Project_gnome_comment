import { loadAllProductsAction } from "../store/reducer/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer";
import { loadSingleProductAction } from "../store/reducer/singleProductReducer";

export const getProductsByCategory = (id) => {
  return dispatch => {
  fetch(`http://localhost:3333/categories/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoryAction(json.data)))
}
}


export const getAllProducts = dispatch => {
  fetch('http://localhost:3333/products/all')
      .then(res => res.json())
      .then(json => dispatch(loadAllProductsAction(json)))
}


export const getSingleProduct = (id) => {
  return dispatch => {
  fetch(`http://localhost:3333/products/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSingleProductAction(json[0])))
}
}

export const sendOrder = new_product => {
	fetch('http://localhost:3333/order/send', {
	  method: 'POST',
	  body: JSON.stringify({new_product})
	})
	  .then(res => res.json())
	  .then(json => console.log(json, 'new order added'))
  }


  export const addNewProductSale = new_product => {
	fetch('http://localhost:3333/sale/send', {
	  method: 'POST',
	  body: JSON.stringify({new_product})
	})
	  .then(res => res.json())
	  .then(json => console.log(json, 'new product added'))
  }

// import { loadAllProductsAction } from "../store/reducer/allProductsReducer";
// import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer";
// import { loadSingleProductAction } from "../store/reducer/singleProductReducer";

// // Функция для получения продуктов по категории по идентификатору (id)
// export const getProductsByCategory = (id) => {
//   return (dispatch) => {
//     // Выполняем HTTP GET-запрос к серверу для получения продуктов по категории
//     fetch(`http://localhost:3333/categories/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         // Диспатчим действие для загрузки продуктов по категории
//         dispatch(loadProductsByCategoryAction(json.data));
//       });
//   };
// };

// // Функция для получения всех продуктов
// export const getAllProducts = (dispatch) => {
//   // Выполняем HTTP GET-запрос к серверу для получения всех продуктов
//   fetch('http://localhost:3333/products/all')
//     .then((res) => res.json())
//     .then((json) => {
//       // Диспатчим действие для загрузки всех продуктов
//       dispatch(loadAllProductsAction(json));
//     });
// };

// // Функция для получения одного продукта по идентификатору (id)
// export const getSingleProduct = (id) => {
//   return (dispatch) => {
//     // Выполняем HTTP GET-запрос к серверу для получения одного продукта
//     fetch(`http://localhost:3333/products/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         // Диспатчим действие для загрузки одного продукта
//         dispatch(loadSingleProductAction(json[0]));
//       });
//   };
// };



// // import { loadAllProductsAction } from "../store/reducer/allProductsReducer"
// // import { loadProductsByCategoryAction } from "../store/reducer/productsByCategoryReducer";
// // import { loadSingleProductAction } from "../store/reducer/singleProductReducer";

// // export const getProductsByCategory = (id) => {
// //   return dispatch => {
// //   fetch(`http://localhost:3333/categories/${id}`)
// //     .then(res => res.json())
// //     .then(json => dispatch(loadProductsByCategoryAction(json.data)))
// // }
// // }


// // export const getAllProducts = dispatch => {
// //   fetch('http://localhost:3333/products/all')
// //       .then(res => res.json())
// //       .then(json => dispatch(loadAllProductsAction(json)))
// // }


// // export const getSingleProduct = (id) => {
// //   return dispatch => {
// //   fetch(`http://localhost:3333/products/${id}`)
// //     .then(res => res.json())
// //     .then(json => dispatch(loadSingleProductAction(json[0])))
// // }
// // }

