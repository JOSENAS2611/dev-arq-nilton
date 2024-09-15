import Banner from "../Components/Banner/Banner";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";

function Home() {
    return(
        <>
            <Header />
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="secondary" arrow>Ola!</Button>
            <Banner title="Home " image="About.jpg" />
                       
            <Footer />
        </>
    )
}



export default Home