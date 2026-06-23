import cls from './CategoryCard.module.scss'
import {Link} from "react-router-dom";
import {getRouteCategoryProducts} from "../../../../shared/config/router/routes.js";
import {getCategoryImage} from "../../../../shared/utils/imageHelper.js";

const CategoryCard = ({category}) => {
  return (
    <Link
        to={getRouteCategoryProducts(category.id)}
        className={cls.CategoryCard}>
        <img src={getCategoryImage(category)} alt={category.title} />
        <h3>{category.title}</h3>
    </Link>
  );
};

export default CategoryCard;