import logo from '../assets/logoww.svg'
import PropTypes from 'prop-types'

NavBar.propTypes = {
    start: PropTypes.bool.isRequired,
    about: PropTypes.bool.isRequired,
    gallery: PropTypes.bool.isRequired,
}

export default function NavBar({start,about,gallery}){

    return (
    <nav className="navbar px-3 fixed-top" id="mainNavbar" >
        <div className="container-xl justify-content-between">
          <div className="d-flex justify-content-start">
              <img src={logo} className="img-fluid" style={{height: '60px'}}/>
              <ul className="nav nav-pills d-none d-lg-flex" style={{marginTop: '10px'}}>
                  <li  className="nav-item mx-3" >
                      <a className={`nav-link ${start ? "active" : ""}`} href="#top">START</a>
                  </li>
                  <li  className="nav-item mx-3">
                      <a className={`nav-link ${about ? "active" : ""}`} href="#about">O MNIE</a>
                  </li>
                  <li  className="nav-item mx-3">
                      <a className={`nav-link ${gallery ? "active" : ""}`} href="#gallery">GALERIA</a>
                  </li>
                  <li className="nav-item mx-3" style={{cursor: 'pointer'}}>
                      <a className="nav-link" data-bs-toggle="modal" data-bs-target="#contactModalCenter">KONTAKT</a>
                  </li>
              </ul>
          </div>
          {/* <div>
              <img src="@/assets/facebook.svg" className="img-fluid rightIcon"/>
              <img src="@/assets/instagram.svg" className="img-fluid rightIcon"/>
              <img src="@/assets/youtube.svg" className="img-fluid rightIcon"/>
          </div> */}
  
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-nav-bar " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
              <li  className="nav-item mx-3" >
                  <a className="nav-link" href="#top">START</a>
              </li>
              <li  className="nav-item mx-3">
                  <a className="nav-link" href="#about">O MNIE</a>
              </li>
              <li  className="nav-item mx-3">
                  <a className="nav-link" href="#gallery">GALERIA</a>
              </li>
              <li className="nav-item mx-3" style={{cursor: 'pointer'}}>
                  <a className="nav-link" data-bs-toggle="modal" data-bs-target="#contactModalCenter">KONTAKT</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}