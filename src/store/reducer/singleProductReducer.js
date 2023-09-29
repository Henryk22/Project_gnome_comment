// Определение типа действия для загрузки одного продукта
const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';

// Создание действия для загрузки одного продукта с переданными данными (payload)
export const loadSingleProductAction = payload => ({ type: LOAD_SINGLE_PRODUCT, payload });

// Редюсер для управления состоянием одного продукта
export const singleProductReducer = (state = [], action) => {
  if (action.type === LOAD_SINGLE_PRODUCT) {
    // Если действие имеет тип LOAD_SINGLE_PRODUCT, возвращаем переданные данные (payload)
    return action.payload;
  } else {
    // В противном случае возвращаем текущее состояние (state)
    return state;
  }
};



// const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';

// export const loadSingleProductAction = payload => ({ type: LOAD_SINGLE_PRODUCT, payload });

// export const singleProductReducer = (state=[], action) => {
//   if(action.type === LOAD_SINGLE_PRODUCT){
//     return action.payload
//   } else {
//     return state
//   }
// }