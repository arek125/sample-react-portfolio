import SectionHeader from "./SectionHeader"

export default function GallerySlider(){

    const images = ([
        new URL('/src/assets/slider1.png', import.meta.url).href,
        new URL('/src/assets/slider2.png', import.meta.url).href,
        new URL('/src/assets/slider3.png', import.meta.url).href,
    ])

    const imagesHTML = images.map((image,index)=> {
        return (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <img className="d-block w-100" src={image}/>
            </div>
        )
    })


    return (
        <div>
            <div className="d-flex justify-content-center">
                <SectionHeader txt="GALERIA"/>
            </div>
            <div id="gallerySlider" className="carousel slide">
                <div className="carousel-inner">
                    {imagesHTML}
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#gallerySlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#gallerySlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#gallerySlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#gallerySlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#gallerySlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
      </div>
    )
}