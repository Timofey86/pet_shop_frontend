import cls from './SalesPage.module.scss'
import {useSelector} from "react-redux";
import {productSelectors} from "../../entities/product/model/selectors/productSelectors.js";
import {useMemo, useState} from "react";
import Container from "../../shared/ui/Container/Container.jsx";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs.jsx";
import {getRouteMain} from "../../shared/config/router/routes.js";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";
import ProductList from "../../entities/product/ui/ProductList/ProductList.jsx";
import ProductFilters from "../../features/product/ui/ProductFilters/ProductFilters.jsx";
import {filterProducts} from "../../features/product/model/filterProducts.js";

const SalesPage = () => {
    const { items, status, error } = useSelector(productSelectors);
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        sort: 'default',
    });

    const discountedProducts = useMemo(() => {
        const saleProducts = items.filter(
            (product) => product.discont_price !== null
        )

        return filterProducts(saleProducts, filters)
    }, [items, filters]);
  return (
    <main className={cls.SalesPage}>
      <Container>
          <Breadcrumbs
              items={[
                  { label: 'Main page', to: getRouteMain() },
                  { label: 'All sales' },
              ]}
          />

          <h1 className={cls.title}>Discounted items</h1>

          <ProductFilters
              filters={filters}
              setFilters={setFilters}
              showDiscounted={false}
          />

          {status === 'loading' && <PageLoader />}
          {status === 'failed' && <SectionError message={error} />}
          {status === 'success' &&
              <ProductList products={discountedProducts} />
          }
      </Container>
    </main>
  );
};

export default SalesPage;