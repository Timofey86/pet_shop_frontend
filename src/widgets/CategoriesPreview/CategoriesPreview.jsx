import cls from './CategoriesPreview.module.scss'
import {Link} from "react-router-dom";
import {getRouteCategories} from "../../shared/config/router/routes.js";
import CategoryList from "../../entities/category/ui/CategoryList/CategoryList.jsx";
import {useSelector} from "react-redux";
import {categorySelectors} from "../../entities/category/model/selectors/categorySelectors.js";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";

const CategoriesPreview = () => {
    const {status, error, items} = useSelector(categorySelectors)
    const previewCategories = items?.slice(0,4) ?? []

    if (status === 'loading') {
        return <PageLoader />;
    }

    if (status === 'failed') {
        return <SectionError message={error} />;
    }
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