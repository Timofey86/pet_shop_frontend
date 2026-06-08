import cls from './MainPage.module.scss'
import Container from "../../shared/ui/Container/Container.jsx";
import Hero from "../../widgets/Hero/Hero.jsx";
import {useEffect, useState} from "react";
import {getCategories} from "../../entities/category/api/categoryApi.js";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import CategoriesPreview from "../../widgets/CategoriesPreview/CategoriesPreview.jsx";
import DiscountForm from "../../widgets/DiscountForm/DiscountForm.jsx";
import {getProducts} from "../../entities/product/api/productApi.js";
import SalesPreview from "../../widgets/SalesPreview/SalesPreview.jsx";

const MainPage = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const categoriesData = await getCategories();
                const productsData = await getProducts();
                setCategories(categoriesData);
                setProducts(productsData);
            } catch (error) {
                setError('Failed to load data');
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

  return (
    <main className={cls.MainPage}>
        <Hero/>
        <Container>

            {isLoading && <PageLoader />}

            {error && <p>{error}</p>}

            {!isLoading && !error && (
                <CategoriesPreview categories={categories} />
            )}

        </Container>
        <DiscountForm/>
        <Container>
            <SalesPreview products={products} />
        </Container>
    </main>
  );
};

export default MainPage;