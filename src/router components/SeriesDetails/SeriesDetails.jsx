import { useEffect, useRef, useState } from 'react';
import './SeriesDetails.css'
import { useParams } from 'react-router-dom';
import { useGetSeriesCrewQuery, useGetSeriesDetailsQuery, useGetSeriesImagesQuery, useGetSeriesRecommendationsQuery, useGetSeriesVideoQuery } from '../../libs/RTK TMDB api/tmdb_api';
import SeriesCast from '../../components/SeriesCast/SeriesCast';
import TopRatedSlider from '../../components/TopRatedSlider/TopRatedSlider';
import VideoSlider from '../../components/Video slider/VideoSlider';
import { Skeleton } from '@mui/material';

export default function SeriesDetails({ baseImg }) {

    let [videoZoom, setVideoZoom] = useState(false);

    let [imgZoom, setImgZoom] = useState({
        overlay: false,
        img: ''
    });

    let { id } = useParams();

    let imagesBoxRef = useRef('');


    let { responseSeriesDetails, isLoadingSeriesDetails, isFetchingSeriesDetails, isSuccessSeriesDetails, isErrorSeriesDetails, errorSeriesDetails } = useGetSeriesDetailsQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseSeriesDetails: data,
            isLoadingSeriesDetails: isLoading,
            isFetchingSeriesDeatils: isFetching,
            isSuccessSeriesDetails: isSuccess,
            isErrorSeriesDetails: isError,
            errorSeriesDetails: error
        })
    })
    let { responseSeriesCrew, isLoadingSeriesCrew, isFetchingSeriesCrew, isSuccessSeriesCrew, isErrorSeriesCrew, errorSeriesCrew } = useGetSeriesCrewQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseSeriesCrew: data,
            isLoadingSeriesCrew: isLoading,
            isFetchingSeriesCrew: isFetching,
            isSuccessSeriesCrew: isSuccess,
            isErrorSeriesCrew: isError,
            errorSeriesCrew: error
        })
    })
    let { responseSeriesImages, isLoadingSeriesImages, isFetchingSeriesImages, isSuccessSeriesImages, isErrorSeriesImages, errorSeriesImages } = useGetSeriesImagesQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseSeriesImages: data,
            isLoadingSeriesImages: isLoading,
            isFetchingSeriesImages: isFetching,
            isSuccessSeriesImages: isSuccess,
            isErrorSeriesImages: isError,
            errorSeriesImages: error
        })
    })
    let { responseSeriesRecommendations, isLoadingSeriesRecommendations, isFetchingSeriesRecommendations, isSuccessSeriesRecommendations, isErrorSeriesRecommendations, errorSeriesRecommendations } = useGetSeriesRecommendationsQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseSeriesRecommendations: data?.results,
            isLoadingSeriesRecommendations: isLoading,
            isFetchingSeriesRecommendations: isFetching,
            isSuccessSeriesRecommendations: isSuccess,
            isErrorSeriesRecommendations: isError,
            errorSeriesRecommendations: error
        })
    })
    let { responseSeriesVideos, isLoadingSeriesVideos, isFetchingSeriesVideos, isSuccessSeriesVideos, isErrorSeriesVideos, errorSeriesVideos } = useGetSeriesVideoQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseSeriesVideos: data?.results,
            isLoadingSeriesVideos: isLoading,
            isFetchingSeriesVideos: isFetching,
            isSuccessSeriesVideos: isSuccess,
            isErrorSeriesVideos: isError,
            errorSeriesVideos: error
        })
    })

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);


    if (isLoadingSeriesDetails || isLoadingSeriesCrew || isLoadingSeriesImages || isLoadingSeriesRecommendations || isLoadingSeriesVideos
        || isFetchingSeriesDetails || isFetchingSeriesCrew || isFetchingSeriesImages || isFetchingSeriesRecommendations || isFetchingSeriesVideos
    ) {
        return (
            <div className=' py-5'>
                <div className="container">
                    <div className='mb-4 h-[444px] relative'>
                        <Skeleton variant='rectangular' className=' h-full  bg-[#1F2534]'></Skeleton>
                        <div className=' absolute top-0 left-0 w-full h-full  p-4 flex flex-wrap justify-between'>
                            <Skeleton variant='rounded' className=' w-1/4 min-w-48 h-1/2 bg-[#22293a] me-4'></Skeleton>
                            <div className=' flex-grow   min-w-48'> 
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                                <Skeleton variant='text' className=' h-6  bg-[#22293a]'></Skeleton>
                            </div>

                        </div>
                    </div>
                    <div className=' flex overflow-hidden mb-4'>
                        <div className=' row g-3 flex-shrink-0 w-[1600px]'>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                        </div>
                    </div>
                    <div className=' flex overflow-hidden'>
                        <div className=' row g-3 flex-shrink-0 w-[1600px]'>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                            <div className=' w-2/12'>
                                <Skeleton variant='rounded' className=' w-full h-52 bg-[#1F2534]'></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (isSuccessSeriesDetails && isSuccessSeriesCrew && isSuccessSeriesImages && isSuccessSeriesRecommendations && isSuccessSeriesVideos) {
        return (
            <div className='series-details'>
                <div className="container">
                    <div className="info md:max-h-[544px]" style={{ height: `calc(100vh - 51px)` }} >
                        <div className=' relative h-full z-0 '>
                            <div className="img-overlay absolute top-0 left-0 bg-[#000000b4] w-full h-full z-10"></div>
                            <div className="inner-shadow absolute top-0 left-0  w-full h-full z-30"></div>
                            <img src={baseImg + responseSeriesDetails['backdrop_path']} alt="" className='w-full h-full  object-cover ' />
                            <div className='overview overflow-y-auto absolute top-0 left-0 h-full z-20  p-4 pb-14'>
                                <div className='w-full flex flex-wrap  relative  '>
                                    <div className='w-1/2 mx-auto md:mx-0 md:w-4/12 xl:w-3/12 md:pe-3'>
                                        <img src={baseImg + responseSeriesDetails['poster_path']} alt="" className='w-full max-w-[306px] rounded-md border-2 border-white' />
                                        {responseSeriesVideos.length ? <button className=' bg-mainColor text-white py-1 px-3 mt-2 w-full max-w-[306px] font-madimi capitalize hover:bg-[#8bd4f0]' onClick={() => setVideoZoom(true)}>Watch trailers</button> : ''}
                                    </div>
                                    <div className='w-full md:w-8/12 lg:w-6/12 md:ps-4 text-center md:text-left pt-5 md:pt-0'>
                                        <h2 className='text-h1 font-madimi text-white mb-4'>{responseSeriesDetails['original_name']}</h2>
                                        <p className=' text-slate-200 mb-2'>{responseSeriesDetails.overview}</p>
                                        <p className='capitalize mb-4 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                first air date :
                                            </span>
                                            <span className='text-sm text-white'>
                                                {responseSeriesDetails['first_air_date']}
                                            </span>
                                        </p>
                                        <ul className=' genre text-lg flex flex-wrap items-center mb-4 justify-center md:justify-start'>
                                            <span className='font-madimi me-2  text-mainColor'>
                                                genres :
                                            </span>
                                            {responseSeriesDetails.genres.map((genre, i) => <li key={i} className=' text-xs bg-slate-400 py-1 px-2 mx-1 rounded-full border-2 border-mainColor text-white font-laila'>{genre.name}</li>)}
                                        </ul>
                                        <p className='capitalize mb-2 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                seasons :
                                            </span>
                                            <span className='text-sm text-white font-laila'>
                                                {responseSeriesDetails['number_of_seasons']}
                                            </span>
                                        </p>
                                        <p className='capitalize mb-2 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                last air date :
                                            </span>
                                            <span className='text-sm text-white '>
                                                {responseSeriesDetails['last_air_date']}
                                            </span>
                                        </p>
                                        <p className='capitalize mb-2 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                in production :
                                            </span>
                                            <span className='text-sm text-white font-laila'>
                                                {responseSeriesDetails['in_production'] ? 'still' : 'ended'}
                                            </span>
                                        </p>
                                        <div className='rating  relative z-0 size-12 rounded-full p-1 mx-auto md:mx-0' style={{ background: `conic-gradient(#51abce 0%, transparent ${responseSeriesDetails['vote_average'] * 10}%)` }}>
                                            <span className=' w-full h-full flex flex-col-reverse justify-center items-center  text-[10px] bg-slate-200 text-black rounded-full font-madimi'>
                                                {(responseSeriesDetails['vote_average'].toFixed(2) * 10).toFixed(1)}%
                                                <i className="fa-solid fa-star mb-1" style={{ color: 'gold' }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='crew'>
                        <SeriesCast results={{ responseSeriesCrew, baseImg }}></SeriesCast>
                    </div>
                    <h2 className='capitalize text-white font-madimi text-center mb-4 border-t-2 border-[#1E293B] pt-4'>TV-series images</h2>
                    <div className=' images-box relative'>
                        <div ref={imagesBoxRef} className='  max-h-[500px] overflow-scroll'>
                            <div className=' images lg:columns-5 md:columns-3 sm:columns-2 gap-6 '>
                                {responseSeriesImages.backdrops.map((image, i) =>
                                    <div key={i} className=' mb-6 break-inside-avoid relative'>
                                        <img src={baseImg + image['file_path']} className='w-full rounded-md cursor-pointer' onClick={() => setImgZoom({ overlay: true, img: i })} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="recommendations py-12 text-white">
                        <h2 className='capitalize text-white font-madimi text-center mb-4 border-t-2 border-[#1E293B] pt-4'>Because you like {responseSeriesDetails['original_name']}</h2>
                        <TopRatedSlider results={{ response: responseSeriesRecommendations, baseImg }}></TopRatedSlider>
                    </div>
                </div>
                <div className={`img-zoom-overlay flex justify-center items-center fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-700 bg-[#000000b0] z-[999999] overflow-hidden ${imgZoom.overlay ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'}`}>
                    <span className='img-zoom-overlay-cancel  text-[#ffffff7c] absolute right-4 top-4 size-9 text-xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setImgZoom({ ...imgZoom, overlay: false })}>
                        <i className="fa-solid fa-xmark" />
                    </span>

                    {imgZoom.img != 0 ? <span className=' img-zoom-overlay-prev text-[#ffffff7c] absolute left-0 size-16 text-4xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setImgZoom({ ...imgZoom, img: imgZoom.img - 1 })}>
                        <i className="fa-solid fa-chevron-left" />
                    </span> : ''}

                    <img src={baseImg + responseSeriesImages?.backdrops[imgZoom.img]?.file_path} className={` max-w-1/2 relative transition-opacity duration-500 delay-700 z-[9999999] ${imgZoom.overlay ? 'opacity-100' : 'opacity-0'}`} alt="" />

                    {imgZoom.img >= responseSeriesImages?.backdrops.length - 1 ? '' : <span className=' img-zoom-overlay-next text-[#ffffff7c] absolute right-0 size-16 text-4xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setImgZoom({ ...imgZoom, img: imgZoom.img + 1 })}>
                        <i className="fa-solid fa-chevron-right" />
                    </span>}

                </div>
                {responseSeriesVideos.length ?
                    <div className={`video-zoom-overlay flex flex-wrap justify-center items-center fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-700 bg-[#000000b0] z-[999999] overflow-hidden ${videoZoom ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'}`}>
                        <VideoSlider results={{ response: responseSeriesVideos, setVideoZoom }}></VideoSlider>
                    </div> : ''
                }
            </div>
        )

    }
}
