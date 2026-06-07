import AppRouter from "./providers/router/AppRouter.jsx";
import Header from "../widgets/Header/Header.jsx";
import Footer from "../widgets/Footer/Footer.jsx";

function App() {

  return (
    <>
        <Header/>
        <AppRouter/>
        <Footer/>

    </>
  )
}

export default App
