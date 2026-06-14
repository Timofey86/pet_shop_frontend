import cls from './CategoryProductsPage.module.scss'
import Container from "../../shared/ui/Container/Container.jsx";
import {useParams} from "react-router-dom";
import {getRouteCategories, getRouteMain} from "../../shared/config/router/routes.js";
import {useSelector} from "react-redux";
import {productSelectors} from "../../entities/product/model/selectors/productSelectors.js";
import {categorySelectors} from "../../entities/category/model/selectors/categorySelectors.js";
import {useMemo, useState} from "react";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";
import ProductFilters from "../../features/product/ui/ProductFilters/ProductFilters.jsx";
import ProductList from "../../entities/product/ui/ProductList/ProductList.jsx";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {filterProducts} from "../../features/product/model/filterProducts.js";

const CategoryProductsPage = () => {
    const {id} = useParams();

    const {items: products, status, error} = useSelector(productSelectors);
    const {items: categories} = useSelector(categorySelectors);

    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        discountedOnly: false,
        sort: 'default',
    });

    const category = categories.find((category) => category.id === Number(id));

    const filteredProducts = useMemo(() => {
        const categoryProducts = products.filter(
            (product) => product.categoryId === Number(id)
        )

        return filterProducts(categoryProducts, filters)
    }, [products, id, filters])

    if (status === 'loading') {
        return <PageLoader/>;
    }

    if (status === 'failed') {
        return <SectionError message={error}/>;
    }
    return (
        <main className={cls.CategoryProductsPage}>
            <Container>
                <Breadcrumbs
                    items={[
                        { label: 'Main page', to: getRouteMain() },
                        { label: 'Categories', to: getRouteCategories() },
                        { label: category?.title },
                    ]}
                />

                <h1 className={cls.title}>{category?.title ?? 'Category'}</h1>

                <ProductFilters filters={filters} setFilters={setFilters}/>
                <ProductList products={filteredProducts}/>
            </Container>
        </main>
    );
};

export default CategoryProductsPage;