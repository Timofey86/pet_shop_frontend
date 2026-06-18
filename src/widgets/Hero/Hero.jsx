import cls from './Hero.module.scss'
import heroImg from '../../shared/assets/hero.jpg'
import {Link} from "react-router-dom";
import {getRouteSales} from "../../shared/config/router/routes.js";

const Hero = () => {
  return (
    <section className={cls.Hero}>
        <img src={heroImg} alt="Pets products discounts" />

        <div className={cls.content}>
            <h1>Amazing Discounts on Pets Products!</h1>

            <Link to={getRouteSales()} className={cls.button}>
                Check out
            </Link>
        </div>
    </section>
  );
};

export default Hero;