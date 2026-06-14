import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage.jsx'
import MainPage from "../../../pages/MainPage/MainPage.jsx";
import CategoriesPage from "../../../pages/CategoriesPage/CategoriesPage.jsx";
import ProductsPage from "../../../pages/ProductsPage/ProductsPage.jsx";
import ProductPage from "../../../pages/ProductPage/ProductPage.jsx";
import SalesPage from "../../../pages/SalesPage/SalesPage.jsx";
import CartPage from "../../../pages/CartPage/CartPage.jsx";
import CategoryProductsPage from "../../../pages/CategoryProductsPage/CategoryProductsPage.jsx";

export const AppRouter = {
  MAIN: 'main',
  CATEGORIES: 'categories',
  CATEGORY_PRODUCTS: 'category_products',
  PRODUCTS: 'products',
  PRODUCT: 'product',
  SALES: 'sales',
  CART: 'cart',
  NOT_FOUND: 'not_found',
}

export const RouterPath = {
  [AppRouter.MAIN]: '/',
  [AppRouter.CATEGORIES]: '/categories',
  [AppRouter.CATEGORY_PRODUCTS]: '/categories/:id',
  [AppRouter.PRODUCTS]: '/products',
  [AppRouter.PRODUCT]: '/products/:id',
  [AppRouter.SALES]: '/sales',
  [AppRouter.CART]: '/cart',
  [AppRouter.NOT_FOUND]: '*',
}

export const routeConfig = {
  [AppRouter.MAIN] : {
    path: RouterPath.main,
    element: <MainPage/>,
  },
  [AppRouter.CATEGORIES]:{
    path: RouterPath.categories,
    element: <CategoriesPage/>,
  },
  [AppRouter.CATEGORY_PRODUCTS]:{
    path: RouterPath.category_products,
    element: <CategoryProductsPage/>,
  },
  [AppRouter.PRODUCTS] : {
    path: RouterPath.products,
    element: <ProductsPage/>,
  },
  [AppRouter.PRODUCT] : {
    path: RouterPath.product,
    element: <ProductPage/>,
  },
  [AppRouter.SALES] : {
    path: RouterPath.sales,
    element: <SalesPage/>,
  },
  [AppRouter.CART] : {
    path: RouterPath.cart,
    element: <CartPage/>
  },
  [AppRouter.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage/>,
  },
}