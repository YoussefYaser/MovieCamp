import { Swiper, SwiperSlide } from 'swiper/react';
import './ImgCoverSlider.css'
import { forwardRef, memo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const ImgCoverSlider = forwardRef(function ImgCoverSlider({results, options}, ref){

    const navigate = useNavigate();

    function navigateDetails(item){
        if(item['original_title']){
            navigate(`/movie-details/${item.id}`);
        }
        else{
            navigate(`/series-details/${item.id}`);
        }
    }

    const { response, baseImg } = results;
    

    let slider = useRef();

    function changeSlide(){
        
        ref.current?.swiper?.slideTo(slider.current.swiper.realIndex);
    }


    useEffect(()=>{
        
    }, []);

    return (
        <>
            <Swiper {...options} 
                ref={slider}
                onSlideChange={changeSlide}
                >
                {response.map((movie, i) => <SwiperSlide key={i} className='  rounded-lg overflow-hidden cursor-pointer' onClick={()=>navigateDetails(movie)}>
                    <div className=' h-full'>
                        <img src={baseImg + movie['poster_path']} className='w-full h-full object-cover' alt="" />
                    </div>
                </SwiperSlide>)}

                <div className="slider-overlay absolute w-full h-full top-0 left-0 z-10"></div>
            </Swiper>
        </>
    )
})







export default memo(ImgCoverSlider);
