import cls from './CategoriesPage.module.scss'
import Container from "../../shared/ui/Container/Container.jsx";
import {Link} from "react-router-dom";
import {getRouteMain} from "../../shared/config/router/routes.js";
import CategoryList from "../../entities/category/ui/CategoryList/CategoryList.jsx";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import {useSelector} from "react-redux";
import {categorySelectors} from "../../entities/category/model/selectors/categorySelectors.js";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";

const CategoriesPage = () => {
    const { items, status, error } = useSelector(categorySelectors);

  return (
    <main className={cls.CategoriesPage}>
      <Container>
          <div className={cls.breadcrumbs}>
              <Link to={getRouteMain()}>Main page</Link>
              <span>Categories</span>
          </div>
          <h1 className={cls.title}>Categories</h1>
          {status === 'loading' && <PageLoader />}
          {status === 'failed' && <SectionError message={error} />}
          {status === 'success' && <CategoryList categories={items} />}
      </Container>
    </main>
  );
};

export default CategoriesPage;