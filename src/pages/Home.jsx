import Header from "../Components/Header/Header"
import Hero from "../Components/Hero/Hero"
import Footer from "../Components/Footer/Footer"
import ProjectsList from "../Components/Projectslist/ProjectsList"

function Home() {
    return(
        <>
            <Header />
             <div className="container">
                   <Hero title="Hero"  image="Hero.jpg" />
                   <ProjectsList />
             </div>
             
             <Footer />
        </>
    )
}



export default Home