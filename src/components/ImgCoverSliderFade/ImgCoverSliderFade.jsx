import { forwardRef, memo, useEffect } from 'react';
import './ImgCoverSliderFade.css'
import { Swiper, SwiperSlide } from 'swiper/react';


const ImgCoverSliderFade = forwardRef(function ImgCoverSliderFade({ results, options }, ref) {

    const { response, baseImg } = results;

    


    return (
        <>
            <Swiper {...options}
                ref={ref}
                touchRatio={0}
            >
                {response.map((movie, i) => <SwiperSlide key={i} className=''>
                    <div className=' h-full relative'>
                        <div className='movie-info w-full pb-12 overflow-y-auto absolute top-0 text-white z-30 px-6 pt-6 row mx-0 gx-4 gy-4 md:gy-4'>
                            <div className='mx-auto md:mx-0'>
                                <img src={baseImg + movie.poster_path} className=' border-2 border-white' alt="" />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <h2 className=' text-h1 font-madimi'>{movie['original_title']}</h2>
                                <p className='mb-4'>{movie.overview}</p>
                                <p className='capitalize mb-4'>
                                    <span className='font-madimi me-2 text-mainColor'>
                                        {movie['release_date']?'release date :':'first air date :'}
                                        
                                    </span>
                                    <span className='text-sm'>
                                        {movie['release_date']?movie['release_date']:movie['first_air_date']}
                                    </span>
                                </p>
                                <ul className=' flex'>
                                    <li className='rating me-4 relative z-0 size-14 rounded-full p-1' style={{background : `conic-gradient(#51abce 0%, transparent ${movie['vote_average'] * 10}%)`}}>
                                        <span className=' w-full h-full flex justify-center items-center  text-xs bg-slate-200 text-black rounded-full font-madimi'>
                                            {(movie['vote_average'].toFixed(2) * 10).toFixed(1)}%
                                        </span>
                                    </li>
                                    <li className='type relative z-0 size-14 rounded-full p-1 bg-mainColor'>
                                        <span className=' w-full h-full flex justify-center items-center  text-xs  text-white rounded-full font-madimi'>
                                            {movie['release_date']?'Movie':'TV'}
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <img src={baseImg + movie['poster_path']} className='w-full h-full object-cover' alt="" />
                        <div className="over-lay absolute w-full h-full bg-[#000000c3] top-0 left-0 z-20"></div>

                    </div>
                </SwiperSlide>)}

                <div className="slider-overlay absolute w-full h-full top-0 left-0 pointer-events-none z-10"></div>
            </Swiper>
        </>
    )
})




export default memo(ImgCoverSliderFade);