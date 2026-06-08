import cls from './SalesPreview.module.scss'
import {Link} from "react-router-dom";
import {getRouteSales} from "../../shared/config/router/routes.js";
import ProductList from "../../entities/product/ui/ProductList/ProductList.jsx";
import {useMemo} from "react";

const SalesPreview = ({products}) => {
    const saleProducts = useMemo(() => {
        return [...products]
            .filter((product) => product.discont_price !== null)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }, [products]);
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