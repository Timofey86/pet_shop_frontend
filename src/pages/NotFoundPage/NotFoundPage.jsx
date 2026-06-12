import cls from './NotFoundPage.module.scss'
import notFoundImg from '../../shared/assets/404.png'
import Container from "../../shared/ui/Container/Container.jsx";
import {Link} from "react-router-dom";
import {getRouteMain} from "../../shared/config/router/routes.js";

const NotFoundPage = () => {
  return (
    <main className={cls.NotFoundPage}>
        <Container>
            <div className={cls.content}>
                <img
                    src={notFoundImg}
                    alt="404 Page Not Found"
                    className={cls.image}
                />

                <h1>Page Not Found</h1>
                <p>
                    We&apos;re sorry, the page you requested could not be found.
                    <br />
                    Please go back to the homepage.
                </p>

                <Link to={getRouteMain()} className={cls.button}>
                    Go Home
                </Link>
            </div>
        </Container>
    </main>
  );
};

export default NotFoundPage;