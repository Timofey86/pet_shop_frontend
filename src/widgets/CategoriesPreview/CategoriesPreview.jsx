import cls from './CategoriesPreview.module.scss'
import {Link} from "react-router-dom";
import {getRouteCategories} from "../../shared/config/router/routes.js";
import CategoryList from "../../entities/category/ui/CategoryList/CategoryList.jsx";

const CategoriesPreview = ( {categories}) => {
    const previewCategories = categories.slice(0,4)
  return (
    <section className={cls.CategoriesPreview}>
        <div className={cls.header}>
            <h2>Categories</h2>
            <div className={cls.line} />
            <Link to={getRouteCategories()} className={cls.link}>
                All categories
            </Link>
        </div>

        <CategoryList categories={previewCategories} />
    </section>
  );
};

export default CategoriesPreview;