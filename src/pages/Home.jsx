import Button from "../Components/Button/Button"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
function Home() {
    return(
        <>
            <Header />
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="outline">Ola!</Button>
            <Footer />
        </>
    )
}



export default Home