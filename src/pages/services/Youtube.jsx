import Footer from "../../componentes/Footer/Footer"
import HeaderYouTube from "../../componentes/Header/HeaderYoutube"
import Navbar from "../../componentes/Navbar/Navbar"
import YoutubeComponent from "../../componentes/Youtube/YoutubeComponent"

const Youtube = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="flex flex-col items-center">
        <HeaderYouTube />
        <YoutubeComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Youtube