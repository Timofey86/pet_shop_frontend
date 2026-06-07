import cls from './Footer.module.scss'
import instagramIcon from '../../shared/assets/instagram.svg'
import whatsappIcon from '../../shared/assets/whatsapp.svg'
import Container from "../../shared/ui/Container/Container.jsx";

const Footer = () => {
  return (
    <footer className={cls.Footer}>
        <Container>
            <div className={cls.title}>
                <h2>Contacts</h2>
            </div>
            <div className={cls.info}>
                <div className={cls.card}>
                    <span>Phone</span>
                    <p>+49 30 915-88492</p>
                </div>

                <div className={cls.card}>
                    <span>Social</span>
                    <div className={cls.socials}>
                        <a href="https://instagram.com" target='_blank' aria-label="Instagram">
                            <img src={instagramIcon} alt="Instagram"/>
                        </a>
                        <a href="https://whatsapp.com" target='_blank' aria-label="WhatsApp">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                        </a>
                    </div>
                </div>

                <div className={cls.card}>
                    <span>Address</span>
                    <p>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
                </div>

                <div className={cls.card}>
                    <span>Working Hours</span>
                    <p>24 hours a day</p>
                </div>
            </div>

            <div className={cls.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.226957784826!2d13.400717577043343!3d52.51123163687818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sde!2sde!4v1780831152187!5m2!1sde!2sde"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </Container>
    </footer>
  );
};

export default Footer;