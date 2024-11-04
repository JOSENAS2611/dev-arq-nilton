import Banner from "../Components/Banner/Banner"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import ProjectsList from "../Components/Projectslist/ProjectsList"

function Projects() {
    return(
        <>
            <Header />
            <Banner title="Projects"  image="Projects.jpg" />
            <div className="container">
            <ProjectsList />
            </div>
            <Footer />
        </>
    )
}
export default Projects