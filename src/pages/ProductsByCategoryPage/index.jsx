import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../request/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductsByCategoryPage() {
  // Извлекаем параметр "id" из URL с помощью react-router-dom
  const { id } = useParams();

  // Получаем доступ к диспетчеру Redux
  const dispatch = useDispatch();

  // Используем useEffect для выполнения запроса на сервер при загрузке страницы
  useEffect(() => {
    // Вызываем функцию для получения продуктов по выбранной категории
    dispatch(getProductsByCategory(id));
  }, [dispatch, id]);

  // Извлекаем список продуктов из состояния Redux
  const products_by_category_state = useSelector(state => state.productsByCategory);

  return (
    <div>
      {/* Отображаем список продуктов с использованием компонента ProductsContainer */}
      <ProductsContainer products={products_by_category_state} />
    </div>
  );
}


