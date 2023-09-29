import { createStore, combineReducers, applyMiddleware } from "redux"; // Импорт функций и 
// middleware для работы с Redux
import thunk from "redux-thunk"; // Импорт middleware для обработки асинхронных действий
import { cartReducer } from "./reducer/cartReducer"; 
import { singleProductReducer } from "./reducer/singleProductReducer"; 
import { allProductsReducer } from "./reducer/allProductsReducer"; 
import { productsByCategoryReducer } from "./reducer/productsByCategoryReducer"; 
import { categoriesReducer } from "./reducer/categoriesReducer"; 

// Создание корневого редюсера, который объединяет все остальные редюсеры
const rootReducer = combineReducers({
  categories: categoriesReducer, 
  productsByCategory: productsByCategoryReducer, 
  allProducts: allProductsReducer, 
  singleProduct: singleProductReducer, 
  cart: cartReducer 
});

// Создание Redux Store с применением middleware thunk
export const store = createStore(rootReducer, applyMiddleware(thunk));


