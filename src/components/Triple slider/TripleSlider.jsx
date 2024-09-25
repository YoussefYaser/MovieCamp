import './TripleSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import spiderMan from '../../assets/Triple slider/spider-man.jpg'
import spiderManLogo from '../../assets/Triple slider/spider-man-logo.png'
import squad from '../../assets/Triple slider/suicide-squad.jpg'
import squadLogo from '../../assets/Triple slider/suicide-squad-logo.png'
import thor from '../../assets/Triple slider/thor-ragnarok.jpg'
import thorLogo from '../../assets/Triple slider/thor-ragnarok-logo.png'
import justice from '../../assets/Triple slider/justice-league.jpg'
import justiceLogo from '../../assets/Triple slider/justice-league-logo.png'
import galaxy from '../../assets/Triple slider/guardians-of-the-galaxy.jpg'
import galaxyLogo from '../../assets/Triple slider/guardians-of-the-galaxy-logo.png'
import { memo, useRef } from 'react';


function TripleSlider() {

    let sliderOne = useRef();
    let sliderThree = useRef();

    function handleSlide(swiper){
        sliderOne.current.swiper.setTranslate(swiper.translate/2);
        sliderThree.current.swiper.setTranslate(swiper.translate/2);
        swiper.updateProgress()
    }
    
    function handleTouch(s){
        if(sliderOne?.current && sliderThree?.current){
            sliderOne?.current?.swiper?.slideTo(s.realIndex);
            sliderThree?.current?.swiper?.slideTo(s.realIndex);
            s.updateProgress()
        }
        
    }


    return (
        <div className=' triple-slider flex flex-nowrap items-center relative z-0'>
            <Swiper
                className='t-slider-one  text-black  w-3/12 h-full opacity-30 rounded-md '
                spaceBetween={0}
                slidesPerView={1}
                touchRatio={0}
                loop={true}
                ref={sliderOne}
            >
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={galaxy} alt="" className=' w-full' />
                        <img src={galaxyLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={spiderMan} alt="" className=' w-full' />
                        <img src={spiderManLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={squad} alt="" className=' w-full' />
                        <img src={squadLogo} alt="" className=' w-1/3 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={thor} alt="" className=' w-full' />
                        <img src={thorLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={justice} alt="" className=' w-full' />
                        <img src={justiceLogo} alt="" className=' w-1/3 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                className='t-slider-two  text-black  w-6/12 rounded-md relative z-10'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSliderMove={handleSlide}
                onSlideChange={handleTouch}
                grabCursor={true}
                
            >
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={spiderMan} alt="" className=' w-full' />
                        <img src={spiderManLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={squad} alt="" className=' w-full' />
                        <img src={squadLogo} alt="" className=' w-1/3 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={thor} alt="" className=' w-full' />
                        <img src={thorLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={justice} alt="" className=' w-full' />
                        <img src={justiceLogo} alt="" className=' w-1/3 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={galaxy} alt="" className=' w-full' />
                        <img src={galaxyLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>

            </Swiper>
            <Swiper
                className='t-slider-three  text-black  w-3/12 opacity-30 rounded-md '
                spaceBetween={0}
                slidesPerView={1}
                touchRatio={0}
                loop={true}
                ref={sliderThree}
            >
                
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={squad} alt="" className=' w-full' />
                        <img src={squadLogo} alt="" className=' w-1/3 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={thor} alt="" className=' w-full' />
                        <img src={thorLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={justice} alt="" className=' w-full' />
                        <img src={justiceLogo} alt="" className=' w-1/3 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={galaxy} alt="" className=' w-full' />
                        <img src={galaxyLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative h-full'>
                        <img src={spiderMan} alt="" className=' w-full' />
                        <img src={spiderManLogo} alt="" className=' w-1/2 absolute bottom-[10px]  left-1/2 translate-x-[-50%]' />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}


export default memo(TripleSlider);