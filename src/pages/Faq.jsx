import FAQItem from '../componentes/Faq/faq'
import faqData from '../componentes/Faq/faqdata'
import Footer from '../componentes/Footer/Footer'
import HeaderFAQ from '../componentes/Header/HeaderFAQ'
import Navbar from '../componentes/Navbar/Navbar'

const Faq = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="flex flex-col items-center">
        <HeaderFAQ />
        <div className=' w-full mt-5 mx-6'>
          <FAQItem />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Faq