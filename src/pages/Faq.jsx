import Footer from '../componentes/Footer/Footer'
import Header from '../componentes/Header/Header'
import Navbar from '../componentes/Navbar/Navbar'
import ServicesGrid from '../componentes/Services/ServicesGrid'

const Faq = () => {
  return (
    <div className='w-full'>
      faq
      <Navbar />
      <div className="flex flex-col items-center">
        <Header />
        <ServicesGrid />
        <Footer />
      </div>
    </div>
  )
}

export default Faq