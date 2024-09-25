import { FreeMode } from 'swiper/modules';
import './SeriesCast.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


export default function SeriesCast({ results }) {

    let { responseSeriesCrew, baseImg } = results;
    

    return (
        <div className=' py-12'>
            <h2 className='capitalize text-white font-madimi text-center mb-4'>TV-series cast</h2>
            <Swiper
                className='series-cast relative mb-14'
                spaceBetween={20}
                slidesPerView={2.5}
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                breakpoints={{
                    400: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 7.5,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 10.5,
                        spaceBetween: 20,
                    },
                }}
            >

                {responseSeriesCrew?.cast.map((actor, i) =>
                    actor['profile_path'] ?
                        <SwiperSlide key={i}>
                            <div>
                                <Link className='' to={`/person-details/${actor.id}`}>
                                    <img src={baseImg + actor['profile_path']} className="w-full rounded-md" alt="" />
                                </Link>
                                <h3 className=' text-center font-laila text-white text-sm mt-2'>{actor.name}</h3>
                                <h3 className=' text-center font-laila text-gray-400 text-xs mt-2'>( {actor['character']} )</h3>
                            </div>
                        </SwiperSlide> : '').slice(0, 50)
                }

            </Swiper>
            <h2 className='capitalize text-white font-madimi text-center mb-4 border-t-2 border-[#1E293B] pt-4'>TV-series crew</h2>
            <Swiper
                className='series-crew relative'
                spaceBetween={20}
                slidesPerView={2.5}
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                breakpoints={{
                    400: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 7.5,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 10.5,
                        spaceBetween: 20,
                    },
                }}
            >

                {responseSeriesCrew?.crew.map((crew, i) =>
                    crew['profile_path'] ?
                        <SwiperSlide key={i}>
                            <div>
                                <img src={baseImg + crew['profile_path']} className="w-full rounded-md" alt="" />
                                <h3 className=' text-center font-laila text-white text-sm mt-2'>{crew.name}</h3>
                                <h3 className=' text-center font-laila text-gray-400 text-xs mt-2'>( {crew['known_for_department']} )</h3>
                            </div>
                        </SwiperSlide> : '')
                }

            </Swiper>
        </div>
    )
}
