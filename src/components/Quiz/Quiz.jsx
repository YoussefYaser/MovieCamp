import { EffectCards } from 'swiper/modules';
import './Quiz.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { memo, useRef } from 'react';

function Quiz({ results }) {

    let slidePerson = useRef();
    let slideName = useRef();

    let { responsePopular, baseImg } = results;

    const getRandomIntegerInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function getPopular(pop) {
        let rand
        do {
            rand = getRandomIntegerInclusive(0, responsePopular.length - 1);

        } while (pop.name == responsePopular[rand].name);

        return rand;
    }

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    function checkAnswer(pop, e){
        if(pop.name.trim().toLowerCase() == e.target.innerHTML.trim().toLowerCase() ){
            e.target.style.cssText = `color : #06af06 !important;
            border-color : #06af06 !important`;
            
            
            setTimeout(() => {
                slidePerson.current.swiper.slideTo(slidePerson.current.swiper.realIndex + 1);
                slideName.current.swiper.slideTo(slideName.current.swiper.realIndex + 1);
            }, 500);
            
        }
        else{
            e.target.style.cssText = `color : red !important;
            border-color : red !important`;
            
            console.log(slidePerson.current.swiper.realIndex);

            setTimeout(() => {
                slidePerson.current.swiper.slideTo(slidePerson.current.swiper.realIndex + 1);
                slideName.current.swiper.slideTo(slideName.current.swiper.realIndex + 1);
            }, 500);
        }
    }

    

    return (
        <>
            <div className=' flex flex-wrap justify-center px-6 smpx-10 items-center max-w-[1000px] mx-auto'>
                <div className='max-w-[190px] sm:max-w-[280px]  sm:w-1/3 sm:pe-6 mb-7 sm:mb-0'>
                    <Swiper
                        className='person'
                        slidesPerView={1}
                        effect={'cards'}
                        touchRatio={0}
                        modules={[EffectCards]}
                        speed={700}
                        ref={slidePerson}

                    >
                        {responsePopular.map((pop, i) => <SwiperSlide key={i} className=' rounded-md shadow-2xl max-w-[190px] sm:max-w-[280px] '>
                            <img src={baseImg + pop['profile_path']} alt="" className=' w-full ' />
                        </SwiperSlide>)}



                    </Swiper>
                </div>
                <div className='w-full sm:w-1/2  sm:ps-8'>
                    <Swiper
                        className='name text-white max-h-72 md:max-h-96'
                        slidesPerView={1}
                        direction={'vertical'}
                        touchAngle={0}
                        speed={700}
                        ref={slideName}
                        
                    >
                        {responsePopular.map((pop, i) => <SwiperSlide key={i} className=' max-h-96 bg-[#1E293B] border-2 border-white rounded-md p-3'>
                            <ul className=' flex flex-col flex-wrap  justify-center  text-center h-full'>
                                {shuffle([
                                    <li key={1} className=' w-full border-2 border-white rounded-full px-1 py-2 my-3 cursor-pointer hover:scale-y-110 transition-transform duration-300' onClick={(event)=>checkAnswer(pop, event)}>{pop.name}</li>,
                                    <li key={2} className=' w-full border-2 border-white rounded-full px-1 py-2 my-3 cursor-pointer hover:scale-y-110 transition-transform duration-300' onClick={(event)=>checkAnswer(pop, event)}>{responsePopular[getPopular(pop)].name}</li>,
                                    <li key={3} className=' w-full border-2 border-white rounded-full px-1 py-2 my-3 cursor-pointer hover:scale-y-110 transition-transform duration-300' onClick={(event)=>checkAnswer(pop, event)}>{responsePopular[getPopular(pop)].name}</li>

                                ])}
                            </ul>
                        </SwiperSlide>)}



                    </Swiper>
                </div>
            </div>
        </>
    )
}


export default  memo(Quiz);