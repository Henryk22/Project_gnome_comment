import { loadAllCategoriesAction } from "../store/reducer/categoriesReducer";

// Функция для получения всех категорий продуктов
export const getAllCategories = (dispatch) => {
  // Выполняем HTTP GET-запрос к серверу для получения всех категорий
  fetch('http://localhost:3333/categories/all')
    .then((res) => res.json())
    .then((json) => {
      // Диспатчим действие для загрузки всех категорий
      dispatch(loadAllCategoriesAction(json));
    });
};

