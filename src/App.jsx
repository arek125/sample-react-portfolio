
import start from './assets/start.png'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import GallerySlider from './components/GallerySlider'
import ContactModal from './components/ContactModal'
import { useInView } from 'react-intersection-observer';

function App() {

  const { ref:startRef, inView:inViewStart } = useInView()
  const { ref:aboutRef, inView:inViewAbout } = useInView()
  const { ref:galleryRef, inView:inViewGallery } = useInView()

  return (
  <>
    <NavBar start={inViewStart} about={inViewAbout} gallery={inViewGallery}/>
    <div className="main-container" style={{ marginTop: '78px' }}>

      <div className="my-b" >
          <img src={start} ref={startRef}  className="img-fluid" alt="Start"/>
      </div>

      <div id="about" className="py-5"></div>  

      <div className="my-5" ref={aboutRef}>
          <AboutMe/>
      </div>

      <div id="gallery" className="py-5"></div>  

      <div className="my-5" ref={galleryRef}>
          <GallerySlider/>
      </div>

      <div className="footer"></div>
      <ContactModal/>
      </div>
  </>
  )
}

export default App
