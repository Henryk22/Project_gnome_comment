// Определение типа действия для загрузки всех категорий
const LOAD_ALL_CATEGORIES = "LOAD_ALL_CATEGORIES";
// Создание действия для загрузки всех категорий с переданными данными (payload)
export const loadAllCategoriesAction = (payload) => ({
  type: LOAD_ALL_CATEGORIES,
  payload,
});
// Редюсер для управления состоянием всех категорий
export const categoriesReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_CATEGORIES) {
    // Если действие имеет тип LOAD_ALL_CATEGORIES, обновляем состояние категорий
    return action.payload;
  } else {
    // В противном случае возвращаем текущее состояние (state)
    return state;
  }
};



