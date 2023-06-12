import $ from 'jquery';
import 'slick-carousel';

export default function slickSlider() {
  $(".slider").slick({
    infinite: false,
    arrows: false,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }]
  });
}