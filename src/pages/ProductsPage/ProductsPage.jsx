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
import {filterProducts} from "../../features/product/model/filterProducts.js";

const ProductsPage = () => {
    const { items, status, error } = useSelector(productSelectors);

    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        discountedOnly: false,
        sort: 'default',
    });

    const filteredProducts = useMemo(() => {
        return filterProducts(items, filters)
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