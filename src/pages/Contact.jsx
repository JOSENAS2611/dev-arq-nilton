import Banner from "../Components/Banner/Banner"
import ContactForm from "../Components/ContactForm/ContactForm"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
function Contact() {
    return(
        <>
            <Header />
            <Banner title="Contact"  image="Contact.jpg" />
            <div className="container">
            <ContactForm />
            </div>
            <Footer />
        </>
    )
}
export default Contact