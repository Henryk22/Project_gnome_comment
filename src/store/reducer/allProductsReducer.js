// Определение типов действий для всех продуктов
const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS"; // Загрузить все продукты
const SORT_PRODUCTS = "SORT_PRODUCTS"; // Отсортировать продукты
const FILTER_PRODUCTS = "FILTER_PRODUCTS"; // Фильтровать продукты по цене
const DISCOUNT_PRODUCTS = "DISCOUNT_PRODUCTS"; // Показать/скрыть продукты скидки

// Создание действий для всех продуктов с переданными данными (payload)

// Загрузить все продукты с переданными данными (payload)
export const loadAllProductsAction = (payload) => ({
  type: LOAD_ALL_PRODUCTS,
  payload,
});

// Отсортировать продукты по заданному критерию
export const sortProductsAction = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});

// Фильтровать продукты по ценовому диапазону (min_value, max_value)
export const filterProductsAction = (payload) => ({
  type: FILTER_PRODUCTS,
  payload,
});

// Показать или скрыть продукты со скидкой (discount)
export const getDiscountProductsAction = (payload) => ({
  type: DISCOUNT_PRODUCTS,
  payload,
});

// Редюсер для управления состоянием всех продуктов
export const allProductsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    // Загрузка всех продуктов, обновление их данных и отображение
    return action.payload.map((el) => ({ ...el, show_product: true }));
  } else if (action.type === SORT_PRODUCTS) {
    // Сортировка продуктов по заданному критерию
    if (action.payload === "title") {
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      state.sort((a, b) => a.price - b.price);
    } else if (action.payload === "price_desc") {
      state.sort((a, b) => b.price - a.price);
    } else if (action.payload === "default") {
      state.sort((a, b) => a.id - b.id);
    }
    return [...state];
  } else if (action.type === FILTER_PRODUCTS) {
    // Фильтрация продуктов по ценовому диапазону
    const { min_value, max_value } = action.payload;
    return state.map((el) => {
      if (el.price >= min_value && el.price <= max_value) {
        el.show_product = true;
      } else {
        el.show_product = false;
      }
      return el;
    });
  } else if (action.type === DISCOUNT_PRODUCTS) {
    // Показать или скрыть продукты со скидкой
    if (action.payload) {
      return state.map((el) => {
        if (el.discont_price === null) {
          el.show_product = false;
        }
        return el;
      });
    } else {
      return state.map((el) => {
        el.show_product = true;
        return el;
      });
    }
  } else {
    // Возвращение текущего состояния, если тип действия неизвестен
    return state;
  }
};

