import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageSliderType } from "../../types/component/imageSliderType";

export const ImageSlider = ({src, alt} : imageSliderType) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <>
            <Slider className="my-4 w-full max-w-xl visible md:hidden" {...settings}>
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
                <img src={src} alt={alt} />
            </Slider>
        </>
    )
}