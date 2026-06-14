import cls from './ProductsPage.module.scss'
import {useSelector} from "react-redux";
import {useMemo, useState} from "react";
import Container from "../../shared/ui/Container/Container.jsx";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {getRouteMain} from "../../shared/config/router/routes.js";
import ProductFilters from "../../features/product/ui/ProductFilters/ProductFilters.jsx";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";
import ProductList from "../../entities/product/ui/ProductList/ProductList.jsx";
import {productSelectors} from "../../entities/product/model/selectors/productSelectors.js";

const ProductsPage = () => {
    const { items, status, error } = useSelector(productSelectors);

    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        discountedOnly: false,
        sort: 'default',
    });

    const filteredProducts = useMemo(() => {
        let result = [...items];

        if (filters.minPrice) {
            result = result.filter((product) => {
                const price = product.discont_price ?? product.price;
                return price >= Number(filters.minPrice);
            });
        }

        if (filters.maxPrice) {
            result = result.filter((product) => {
                const price = product.discont_price ?? product.price;
                return price <= Number(filters.maxPrice);
            });
        }

        if (filters.discountedOnly) {
            result = result.filter((product) => product.discont_price !== null);
        }

        if (filters.sort === 'newest') {
            result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        if (filters.sort === 'price-high-low') {
            result.sort((a, b) => {
                const priceA = a.discont_price ?? a.price;
                const priceB = b.discont_price ?? b.price;

                return priceB - priceA;
            });
        }

        if (filters.sort === 'price-low-high') {
            result.sort((a, b) => {
                const priceA = a.discont_price ?? a.price;
                const priceB = b.discont_price ?? b.price;

                return priceA - priceB;
            });
        }

        return result;
    }, [items, filters]);

    return (
    <main className={cls.ProductsPage}>
      <Container>
          <Breadcrumbs
              items={[
                  { label: 'Main page', to: getRouteMain() },
                  { label: 'All products'},
              ]}
          />

          <h1 className={cls.title}>All products</h1>
          <ProductFilters filters={filters} setFilters={setFilters} />
          {status === 'loading' && <PageLoader />}
          {status === 'failed' && <SectionError message={error} />}
          {status === 'success' &&
              <ProductList products={filteredProducts} />
          }
      </Container>
    </main>
  );
};

export default ProductsPage;