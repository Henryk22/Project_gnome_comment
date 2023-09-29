// Определение типа действия для добавления продукта
const ADD_PRODUCT = 'ADD_PRODUCT';
// Создание действия для добавления продукта с переданными данными (payload)
export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });
// Редюсер для управления состоянием продуктов
export const productsReducer = (state = [], action) => {
  if (action.type === ADD_PRODUCT) {
    // Если действие имеет тип ADD_PRODUCT, добавляем новый продукт в состояние
    return [...state, action.payload];
  } else {
    // В противном случае возвращаем текущее состояние (state)
    return state;
  }
};

