import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.scss'

const Contact = () => {
  return (
    <>
    
    <div className="contact-bgImg-container">
        {/* CONTACT MAIN */}
        <main className="contact">
          <h2>Contact Me ...</h2>
          <div className="contact__list">
            <div className="contact__item">
              <i className="fas fa-envelope" /> Email
              <div className="text-secondary">wednesday@nevermoreacademy.edu</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-mobile-alt" /> Phone
              <div className="text-secondary">+40 (571) 360-1234</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-map-marker-alt" /> Address
              <div className="text-secondary">Strada Zamorei 1, Bușteni 105500, Romania</div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Contact