// Определение типов действий для корзины
const ADD_TO_CART = "ADD_TO_CART"; // Добавить товар 
const DELETE_FROM_CART = "DELETE_FROM_CART"; // Удалить товар 
const INCREMENT_COUNT = "INCREMENT_COUNT"; // Увеличить количество товара 
const DECREMENT_COUNT = "DECREMENT_COUNT"; // Уменьшить количество товара 
const CLEAR_CART = "CLEAR_CART"; // Очистить корзину

// Создание действий для корзины с переданными данными (payload)
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const deleteFromCartAction = (payload) => ({
  type: DELETE_FROM_CART,
  payload,
});
export const incrementCountAction = (payload) => ({
  type: INCREMENT_COUNT,
  payload,
});
export const decrementCountAction = (payload) => ({
  type: DECREMENT_COUNT,
  payload,
});
export const clearCartAction = () => ({ type: CLEAR_CART });

// Функция для проверки наличия продукта в корзине и обновления состояния
const checkProduct = (state, payload) => {
  const productInCart = state.find((el) => el.id === +payload.id);
  if (!productInCart) {
    // Если продукта нет в корзине, добавляем его с начальным количеством 1
    return [...state, { ...payload, count: 1 }];
  } else {
    // Если продукт уже есть в корзине, увеличиваем его количество
    productInCart.count++;
    return [...state];
  }
};

// Редюсер для управления состоянием корзины
export const cartReducer = (state = [], action) => {
  if (action.type === ADD_TO_CART) {
    // Добавление товара в корзину
    return checkProduct(state, action.payload);
  } else if (action.type === DELETE_FROM_CART) {
    // Удаление товара из корзины
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === INCREMENT_COUNT) {
    // Увеличение количества товара в корзине
    state.find((el) => el.id === action.payload).count++;
    return [...state];
  } else if (action.type === DECREMENT_COUNT) {
    // Уменьшение количества товара в корзине
    const product = state.find((el) => el.id === action.payload);
    if (product.count === 1) {
      // Если количество товара равно 1, удаляем его из корзины
      return state.filter((el) => el.id !== product.id);
    } else {
      // В противном случае уменьшаем количество
      product.count--;
      return [...state];
    }
  } else if (action.type === CLEAR_CART) {
    // Очистка корзины
    return [];
  } else {
    // Возвращаем текущее состояние, если тип действия неизвестен
    return state;
  }
};
