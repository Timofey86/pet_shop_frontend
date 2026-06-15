import cls from './ProductPage.module.scss'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {productSelectors} from "../../entities/product/model/selectors/productSelectors.js";
import {categorySelectors} from "../../entities/category/model/selectors/categorySelectors.js";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";
import Container from "../../shared/ui/Container/Container.jsx";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {getRouteCategories, getRouteCategoryProducts, getRouteMain} from "../../shared/config/router/routes.js";
import ProductDetails from "../../entities/product/ui/ProductDetails/ProductDetails.jsx";

const ProductPage = () => {
    const {id} = useParams();
    const {items: products, status, error} = useSelector(productSelectors);
    const {items: categories} = useSelector(categorySelectors);
    const product = products.find(product => product.id === Number(id));
    const category = categories.find(
        (category) => category.id === product?.categoryId
    )

    if (status === 'loading') {
        return <PageLoader />;
    }

    if (status === 'failed') {
        return <SectionError message={error} />;
    }

    if (!product) {
        return <SectionError message="Product not found" />;
    }

    return (
        <main className={cls.ProductPage}>
            <Container>
                <Breadcrumbs
                    items={[
                        { label: "Main page", to: getRouteMain() },
                        { label: "Categories", to: getRouteCategories() },
                        { label: category?.title ?? 'Category', to: getRouteCategoryProducts(product.categoryId) },
                        { label: product.title}
                    ]}
                />
                <ProductDetails product={product} />
            </Container>

        </main>
    );
};

export default ProductPage;