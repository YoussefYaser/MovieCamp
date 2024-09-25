import { Swiper, SwiperSlide } from 'swiper/react';
import './TopRatedSlider.css'
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function TopRatedSlider({ results }) {

    let [activeSLide, setActiveSlide] = useState(0);
    let [position, setPosition] = useState(0);

    let slider = useRef();

    const { response, baseImg } = results;


    const navigate = useNavigate();


    function navigateDetails(item) {
        if (item['original_title']) {
            navigate(`/movie-details/${item.id}`);
            window.scrollTo(0, 0);
        }
        else {
            navigate(`/series-details/${item.id}`);
            window.scrollTo(0, 0);
        }
    }

    function mediaResize() {
        if (Math.round(window.innerWidth) >= 768 || Math.round(window.screen.width) >= 768) {
            return 224;
        }
        else {
            return 176;
        }
    }

    function changeSlideNextStart() {
        if (activeSLide == response?.length - 1) {
            setActiveSlide(0);
            setPosition(0);
            slider.current.swiper.slideTo(0);
        }
        else {
            setActiveSlide(activeSLide + 1);
            let trans = mediaResize();
            slider.current.swiper.translateTo(position - trans);
            setPosition(position - trans);
        }

    }
    function changeSlidePrevStart() {
        setActiveSlide(activeSLide - 1);
        let trans = mediaResize();
        slider.current.swiper.translateTo(position + trans);
        setPosition(position + trans);
    }


    return (
        <>
            <Swiper
                className='top-rated-slider  h-[230px] md:h-[315px] relative'
                spaceBetween={0}
                slidesPerView={'auto'}
                touchRatio={0}
                ref={slider}
            >

                {response.map((movie, i) => <SwiperSlide key={i} className={`${i != activeSLide ? 'md:w-52 w-40' : 'md:w-[470px] w-[400px]'} h-full  px-2 box-content  overflow-hidden cursor-pointer transition-all duration-500`} onClick={() => navigateDetails(movie)}>
                    <div className=' bg-slate-800   overflow-hidden rounded-l-2xl  rounded-r-md h-full'>
                        <div className=' row gx-3 flex-nowrap h-full'>
                            <div className='flex-shrink-0 h-full'>
                                <img src={baseImg + movie['poster_path']} alt="" className=' h-full md:w-52 w-40 object-cover' />
                            </div>
                            <div className=' md:w-[262px] w-56 flex-shrink-0'>
                                <div className='pe-2 py-2'>
                                    <h3 className=' text-h4 font-laila mb-2 '>{movie['original_title'] ? movie['original_title'] : movie['original_name']}</h3>
                                    <p className=' text-xs line-clamp-3 mb-3'>
                                        {movie['overview']}
                                    </p>
                                    <p className='capitalize mb-4'>
                                        <span className='font-madimi me-2 text-mainColor'>
                                            {movie['release_date'] ? 'release date :' : 'first air date'}
                                        </span>
                                        <span className='text-xs'>
                                            {movie['release_date'] ? movie['release_date'] : movie['first_air_date']}
                                        </span>
                                    </p>
                                    <ul className=' flex'>
                                        <li className='rating me-4 relative z-0 size-12 rounded-full p-1' style={{ background: `conic-gradient(#51abce 0%, transparent ${movie['vote_average'] * 10}%)` }}>
                                            <span className=' w-full h-full flex flex-col-reverse justify-center items-center  text-[10px] bg-slate-200 text-black rounded-full font-madimi'>
                                                {(movie['vote_average'].toFixed(2) * 10).toFixed(1)}%
                                                <i className="fa-solid fa-star mb-1" style={{ color: 'gold' }} />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}

                <div className='swiper-next absolute z-10 top-0 bottom-0 right-0   flex justify-end items-center pe-3 cursor-pointer ' onClick={changeSlideNextStart}>
                    <span className=' text-white text-xl hover:scale-150 transition-transform duration-300'>
                        <i className="fa-solid fa-chevron-right" />
                    </span>
                </div>
                <div className={`swiper-prev absolute z-10 top-0 bottom-0 left-0  flex items-center ps-3  cursor-pointer ${!activeSLide ? 'hidden' : ''}`} onClick={changeSlidePrevStart}>
                    <span className=' text-white text-xl hover:scale-150 transition-transform duration-300'>
                        <i className="fa-solid fa-chevron-left" />
                    </span>
                </div>


            </Swiper>
        </>
    )

}
