import AboutText from "../Components/AboutText/AboutText"
import Banner from "../Components/Banner/Banner"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
function About() {
    return(
        <>
            <Header />
            <Banner title="About"  image="About.jpg" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    )
}
export default About