import { Autoplay, FreeMode } from "swiper/modules";

const ImgCoverSliderOptions = {
        className :'img-cover-slider bg-dark h-[232px] relative px-3 pb-10',
        spaceBetween : 15,
        slidesPerView : 2,
        loop : true,
        freeMode : true,
        autoplay : {
            delay : 3000
        },
        breakpoints: {
            '400' : {
                slidesPerView: 3

            },
            '530' : {
                slidesPerView: 4

            },
            '768' : {
                slidesPerView: 5

            },
            '1024' : {
                slidesPerView : 6
            },
            '1280' : {
                slidesPerView : 9
            }
        },
        modules : [FreeMode, Autoplay]
}


export default ImgCoverSliderOptions;