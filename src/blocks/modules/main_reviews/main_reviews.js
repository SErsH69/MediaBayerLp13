import $ from 'jquery';
import 'slick-carousel';

const MainRev = class MainRev {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.slider-for').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              asNavFor: '.slider-for',
              dots: true,
              focusOnSelect: true,
              variableWidth: true,
              responsive: [
                {
                  breakpoint: 1023,
                  settings: {
                    fade: true,
                    arrows: false,
                    variableWidth: false,
                  }
                }
              ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainRev;