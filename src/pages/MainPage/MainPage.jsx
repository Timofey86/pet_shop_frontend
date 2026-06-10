import cls from './MainPage.module.scss'
import Container from "../../shared/ui/Container/Container.jsx";
import Hero from "../../widgets/Hero/Hero.jsx";
import CategoriesPreview from "../../widgets/CategoriesPreview/CategoriesPreview.jsx";
import DiscountForm from "../../widgets/DiscountForm/DiscountForm.jsx";
import SalesPreview from "../../widgets/SalesPreview/SalesPreview.jsx";

const MainPage = () => {

    return (
        <main className={cls.MainPage}>
            <Hero/>
            <Container>
                <CategoriesPreview/>
            </Container>
            <DiscountForm/>
            <Container>
                <SalesPreview/>
            </Container>
        </main>
    );
};

export default MainPage;