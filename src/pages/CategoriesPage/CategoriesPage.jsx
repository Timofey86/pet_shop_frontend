import cls from './CategoriesPage.module.scss'
import {useEffect, useState} from "react";
import {getCategories} from "../../entities/category/api/categoryApi.js";
import Container from "../../shared/ui/Container/Container.jsx";
import {Link} from "react-router-dom";
import {getRouteMain} from "../../shared/config/router/routes.js";
import CategoryList from "../../entities/category/ui/CategoryList/CategoryList.jsx";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadCategories = async () => {
            try {
                setIsLoading(true);
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                setError('Failed to load categories');
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadCategories();
    }, []);
  return (
    <main className={cls.CategoriesPage}>
      <Container>
          <div className={cls.breadcrumbs}>
              <Link to={getRouteMain()}>Main page</Link>
              <span>Categories</span>
          </div>
          <h1 className={cls.title}>Categories</h1>
          {isLoading && <PageLoader />}
          {error && <p className={cls.error}>{error}</p>}
          {!isLoading && !error && <CategoryList categories={categories} />}
      </Container>
    </main>
  );
};

export default CategoriesPage;