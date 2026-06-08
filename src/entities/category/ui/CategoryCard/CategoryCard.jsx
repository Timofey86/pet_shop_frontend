import cls from './CategoryCard.module.scss'
import {Link} from "react-router-dom";
import {getRouteCategoryProducts} from "../../../../shared/config/router/routes.js";
import {API_URL} from "../../../../shared/config/api.js";

const CategoryCard = ({category}) => {
  return (
    <Link
        to={getRouteCategoryProducts(category.id)}
        className={cls.CategoryCard}>
        <img src={`${API_URL}${category.image}`} alt={category.title} />
        <h3>{category.title}</h3>
    </Link>
  );
};

export default CategoryCard;