import cls from './SalesPreview.module.scss'
import {Link} from "react-router-dom";
import {getRouteSales} from "../../shared/config/router/routes.js";
import ProductList from "../../entities/product/ui/ProductList/ProductList.jsx";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {productSelectors} from "../../entities/product/model/selectors/productSelectors.js";
import PageLoader from "../../shared/ui/PageLoader/PageLoader.jsx";
import SectionError from "../../shared/ui/SectionError/SectionError.jsx";

const SalesPreview = () => {
    const { items, status, error } = useSelector(productSelectors);
    const saleProducts = useMemo(() => {
        return [...items]
            .filter((product) => product.discont_price !== null)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }, [items]);

    if (status === 'loading') {
        return <PageLoader />;
    }

    if (status === 'success' && saleProducts.length === 0) {
        return null;
    }

    if (status === 'failed') {
        return <SectionError message={error} />;
    }
  return (
    <section className={cls.SalesPreview}>
        <div className={cls.header}>
            <h2>Sale</h2>
            <div className={cls.line} />
            <Link to={getRouteSales()} className={cls.link}>
                All sales
            </Link>
        </div>

        <ProductList products={saleProducts} />
    </section>
  );
};

export default SalesPreview;