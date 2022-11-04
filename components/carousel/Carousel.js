import { useEffect, useState } from "react";
import Slider from "react-slick";

const Carousel = ({slides}) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
         if (typeof window !== "undefined") {
            setWidth(window.screen.width);
        }
    }, [])
    let settings;

    if(width > 600) {
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          };
    } else {
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          };
    }

    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    )
}
export default Carousel;