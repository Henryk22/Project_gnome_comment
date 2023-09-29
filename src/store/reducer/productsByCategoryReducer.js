// Определение типа действия для загрузки продуктов по категории
const LOAD_PRODUCTS_BY_CATEGORY = "LOAD_PRODUCTS_BY_CATEGORY";

// Создание действия для загрузки продуктов по категории с переданными данными (payload)
export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  payload,
});

// Редюсер для управления состоянием продуктов по категории
export const productsByCategoryReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
    // Если действие имеет тип LOAD_PRODUCTS_BY_CATEGORY, обновляем состояние
    // Преобразуем данные продуктов и добавляем поле show_product со значением true
    return action.payload.map((el) => ({ ...el, show_product: true }));
  } else {
    // В противном случае возвращаем текущее состояние (state)
    return state;
  }
};

