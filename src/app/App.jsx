import AppRouter from "./providers/router/AppRouter.jsx";
import Header from "../widgets/Header/Header.jsx";
import Footer from "../widgets/Footer/Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../entities/product/model/slice/productSlice.js";
import {fetchCategories} from "../entities/category/model/slice/categorySlice.js";
import {useEffect} from "react";
import {productStatusSelector} from "../entities/product/model/selectors/productSelectors.js";
import {categoryStatusSelector} from "../entities/category/model/selectors/categorySelectors.js";

function App() {
    const statusProducts = useSelector(productStatusSelector);
    const statusCategories = useSelector(categoryStatusSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        if (statusProducts === 'default') {
            dispatch(fetchProducts());
        }
        if (statusCategories === 'default') {
            dispatch(fetchCategories());
        }

    }, [dispatch, statusProducts, statusCategories]);
  return (
    <>
        <Header/>
        <AppRouter/>
        <Footer/>
    </>
  )
}

export default App
