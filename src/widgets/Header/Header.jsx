import cls from './Header.module.scss'
import logoImg from '../../shared/assets/logo.png'
import basketEmptyImg from '../../shared/assets/basket_empty.svg'
import {NavLink} from "react-router-dom";
import {
    getRouteCart,
    getRouteCategories,
    getRouteMain,
    getRouteProducts,
    getRouteSales
} from "../../shared/config/router/routes.js";
import Container from "../../shared/ui/Container/Container.jsx";

const Header = () => {
    const getNavLinkClass = ({ isActive }) =>
        isActive ? `${cls.NavLink} ${cls.active}` : cls.NavLink;
    return (

        <div className={cls.Header}>
            <Container>
                <div className={cls.Inner}>
                    <NavLink to={getRouteMain()} className={cls.Logo}>
                        <img src={logoImg} alt="logo" />
                    </NavLink>

                    <nav className={cls.NavMenu}>
                        <NavLink to={getRouteMain()} className={getNavLinkClass}>
                            Main Page
                        </NavLink>

                        <NavLink to={getRouteCategories()} className={getNavLinkClass}>
                            Categories
                        </NavLink>

                        <NavLink to={getRouteProducts()} className={getNavLinkClass}>
                            All products
                        </NavLink>

                        <NavLink to={getRouteSales()} className={getNavLinkClass}>
                            All sales
                        </NavLink>
                    </nav>

                    <NavLink to={getRouteCart()} className={cls.Cart}>
                        <img src={basketEmptyImg} alt="cart" />
                    </NavLink>
                </div>
            </Container>
        </div>

    );
};

export default Header;