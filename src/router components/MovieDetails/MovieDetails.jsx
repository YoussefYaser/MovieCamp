import { useParams } from 'react-router-dom'
import './MovieDetails.css'
import { useEffect, useRef, useState } from 'react';
import { useGetMovieCrewQuery, useGetMovieDetailsQuery, useGetMovieImagesQuery, useGetMovieRecommendationsQuery, useGetMovieVideosQuery } from '../../libs/RTK TMDB api/tmdb_api';
import MovieCast from '../../components/MovieCast/MovieCast';
import TopRatedSlider from '../../components/TopRatedSlider/TopRatedSlider';
import VideoSlider from '../../components/Video slider/VideoSlider';
import { Skeleton } from '@mui/material';

export default function MovieDetails({ baseImg }) {


    let [imgZoom, setImgZoom] = useState({
        overlay: false,
        img: ''
    });

    let [videoZoom, setVideoZoom] = useState(false);

    let { id } = useParams();

    let imagesBoxRef = useRef('');



    let { responseMovieDetails, isLoadingMovieDetails, isFetchingMovieDetails, isSuccessMovieDetails, isErrorMovieDetails, errorMovieDetails } = useGetMovieDetailsQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseMovieDetails: data,
            isLoadingMovieDetails: isLoading,
            isFetchingMovieDeatils: isFetching,
            isSuccessMovieDetails: isSuccess,
            isErrorMovieDetails: isError,
            errorMovieDetails: error
        })
    })
    let { responseMovieCrew, isLoadingMovieCrew, isFetchingMovieCrew, isSuccessMovieCrew, isErrorMovieCrew, errorMovieCrew } = useGetMovieCrewQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseMovieCrew: data,
            isLoadingMovieCrew: isLoading,
            isFetchingMovieCrew: isFetching,
            isSuccessMovieCrew: isSuccess,
            isErrorMovieCrew: isError,
            errorMovieCrew: error
        })
    })
    let { responseMovieImages, isLoadingMovieImages, isFetchingMovieImages, isSuccessMovieImages, isErrorMovieImages, errorMovieImages } = useGetMovieImagesQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseMovieImages: data,
            isLoadingMovieImages: isLoading,
            isFetchingMovieImages: isFetching,
            isSuccessMovieImages: isSuccess,
            isErrorMovieImages: isError,
            errorMovieImages: error
        })
    })
    let { responseMovieRecommendations, isLoadingMovieRecommendations, isFetchingMovieRecommendations, isSuccessMovieRecommendations, isErrorMovieRecommendations, errorMovieRecommendations } = useGetMovieRecommendationsQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseMovieRecommendations: data?.results,
            isLoadingMovieRecommendations: isLoading,
            isFetchingMovieRecommendations: isFetching,
            isSuccessMovieRecommendations: isSuccess,
            isErrorMovieRecommendations: isError,
            errorMovieRecommendations: error
        })
    })
    let { responseMovieVideos, isLoadingMovieVideos, isFetchingMovieVideos, isSuccessMovieVideos, isErrorMovieVideos, errorMovieVideos } = useGetMovieVideosQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseMovieVideos: data?.results,
            isLoadingMovieVideos: isLoading,
            isFetchingMovieVideos: isFetching,
            isSuccessMovieVideos: isSuccess,
            isErrorMovieVideos: isError,
            errorMovieVideos: error
        })
    })

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);


    if (isLoadingMovieDetails || isLoadingMovieCrew || isLoadingMovieImages || isLoadingMovieRecommendations || isLoadingMovieVideos
        || isFetchingMovieDetails || isFetchingMovieCrew || isFetchingMovieImages || isFetchingMovieRecommendations || isFetchingMovieVideos
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
    else if (isSuccessMovieDetails && isSuccessMovieCrew && isSuccessMovieImages && isSuccessMovieRecommendations && isSuccessMovieVideos) {
        return (
            <div className='movie-details'>
                <div className="container">
                    <div className="info md:max-h-[544px]" style={{ height: `calc(100vh - 51px)` }} >
                        <div className=' relative h-full z-0 '>
                            <div className="img-overlay absolute top-0 left-0 bg-[#000000b4] w-full h-full z-10"></div>
                            <div className="inner-shadow absolute top-0 left-0  w-full h-full z-30"></div>
                            <img src={baseImg + responseMovieDetails['backdrop_path']} alt="" className='w-full h-full  object-cover ' />
                            <div className='overview overflow-y-auto absolute top-0 left-0 h-full z-20  p-4 pb-14'>
                                <div className='w-full flex flex-wrap  relative  '>
                                    <div className='w-1/2 mx-auto md:mx-0 md:w-4/12 xl:w-3/12 md:pe-3'>
                                        <img src={baseImg + responseMovieDetails['poster_path']} alt="" className='w-full max-w-[306px] rounded-md border-2 border-white' />
                                        {responseMovieVideos.length ? <button className=' bg-mainColor text-white py-1 px-3 mt-2 w-full max-w-[306px] font-madimi capitalize hover:bg-[#8bd4f0]' onClick={() => setVideoZoom(true)}>Watch trailers</button> : ''}
                                    </div>
                                    <div className='w-full md:w-8/12 lg:w-6/12 md:ps-4 text-center md:text-left pt-5 md:pt-0'>
                                        <h2 className='text-h1 font-madimi text-white mb-4'>{responseMovieDetails['original_title']}</h2>
                                        <p className=' text-slate-200 mb-2'>{responseMovieDetails.overview}</p>
                                        <p className='capitalize mb-4 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                release date :
                                            </span>
                                            <span className='text-sm text-white'>
                                                {responseMovieDetails['release_date']}
                                            </span>
                                        </p>
                                        <ul className=' genre text-lg flex flex-wrap items-center mb-4 justify-center md:justify-start'>
                                            <span className='font-madimi me-2  text-mainColor'>
                                                genres :
                                            </span>
                                            {responseMovieDetails.genres.map((genre, i) => <li key={i} className=' text-xs bg-slate-400 py-1 px-2 mx-1 rounded-full border-2 border-mainColor text-white font-laila'>{genre.name}</li>)}
                                        </ul>
                                        <p className='capitalize mb-2 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                budget :
                                            </span>
                                            <span className='text-sm text-white font-laila'>
                                                {responseMovieDetails.budget.toString().length > 9 ? (responseMovieDetails.budget / 1000000000).toFixed(2) + 'B'
                                                    : responseMovieDetails.budget.toString().length > 6 ? (responseMovieDetails.budget / 1000000).toFixed(2) + 'M'
                                                        : (responseMovieDetails.budget / 1000000).toFixed(2) + 'K'}
                                            </span>
                                        </p>
                                        <p className='capitalize mb-2 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                revenue :
                                            </span>
                                            <span className='text-sm text-white font-laila'>
                                                {responseMovieDetails.revenue.toString().length > 9 ? (responseMovieDetails.revenue / 1000000000).toFixed(2) + 'B'
                                                    : responseMovieDetails.revenue.toString().length > 6 ? (responseMovieDetails.revenue / 1000000).toFixed(2) + 'M'
                                                        : (responseMovieDetails.revenue / 1000000).toFixed(2) + 'K'}
                                            </span>
                                        </p>
                                        <p className='capitalize mb-2 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                run time :
                                            </span>
                                            <span className='text-sm text-white font-laila'>
                                                {responseMovieDetails.runtime}mins
                                            </span>
                                        </p>
                                        <p className='capitalize mb-4 text-lg'>
                                            <span className='font-madimi me-2 text-mainColor'>
                                                status :
                                            </span>
                                            <span className='text-sm text-white font-laila'>
                                                {responseMovieDetails.status}
                                            </span>
                                        </p>
                                        <div className='rating  relative z-0 size-12 rounded-full p-1 mx-auto md:mx-0' style={{ background: `conic-gradient(#51abce 0%, transparent ${responseMovieDetails['vote_average'] * 10}%)` }}>
                                            <span className=' w-full h-full flex flex-col-reverse justify-center items-center  text-[10px] bg-slate-200 text-black rounded-full font-madimi'>
                                                {(responseMovieDetails['vote_average'].toFixed(2) * 10).toFixed(1)}%
                                                <i className="fa-solid fa-star mb-1" style={{ color: 'gold' }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='crew'>
                        <MovieCast results={{ responseMovieCrew, baseImg }}></MovieCast>
                    </div>
                    <h2 className='capitalize text-white font-madimi text-center mb-4 border-t-2 border-[#1E293B] pt-4'>movie images</h2>
                    <div className=' images-box relative'>
                        <div ref={imagesBoxRef} className='  max-h-[500px] overflow-scroll'>
                            <div className=' images lg:columns-5 md:columns-3 sm:columns-2 gap-6 '>
                                {responseMovieImages?.backdrops.map((image, i) =>
                                    <div key={i} className=' mb-6 break-inside-avoid relative'>
                                        <img src={baseImg + image['file_path']} className='w-full rounded-md cursor-pointer' onClick={() => setImgZoom({ overlay: true, img: i })} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="recommendations py-12 text-white">
                        <h2 className='capitalize text-white font-madimi text-center mb-4 border-t-2 border-[#1E293B] pt-4'>Because you like {responseMovieDetails['original_title']}</h2>
                        <TopRatedSlider results={{ response: responseMovieRecommendations, baseImg }}></TopRatedSlider>
                    </div>
                </div>
                <div className={`img-zoom-overlay flex justify-center items-center fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-700 bg-[#000000b0] z-[999999] overflow-hidden ${imgZoom.overlay ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'}`}>
                    <span className='img-zoom-overlay-cancel  text-[#ffffff7c] absolute right-4 top-4 size-9 text-xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setImgZoom({ ...imgZoom, overlay: false })}>
                        <i className="fa-solid fa-xmark" />
                    </span>

                    {imgZoom.img != 0 ? <span className=' img-zoom-overlay-prev text-[#ffffff7c] absolute left-0 size-16 text-4xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setImgZoom({ ...imgZoom, img: imgZoom.img - 1 })}>
                        <i className="fa-solid fa-chevron-left" />
                    </span> : ''}

                    <img src={baseImg + responseMovieImages?.backdrops[imgZoom.img]?.file_path} className={` max-w-1/2 relative transition-opacity duration-500 delay-700 z-[9999999] ${imgZoom.overlay ? 'opacity-100' : 'opacity-0'}`} alt="" />

                    {imgZoom.img >= responseMovieImages.backdrops.length - 1 ? '' : <span className=' img-zoom-overlay-next text-[#ffffff7c] absolute right-0 size-16 text-4xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setImgZoom({ ...imgZoom, img: imgZoom.img + 1 })}>
                        <i className="fa-solid fa-chevron-right" />
                    </span>}

                </div>
                {responseMovieVideos.length ?
                    <div className={`video-zoom-overlay flex flex-wrap justify-center items-center fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-700 bg-[#000000b0] z-[999999] overflow-hidden ${videoZoom ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'}`}>
                        <VideoSlider results={{ response: responseMovieVideos, setVideoZoom }}></VideoSlider>
                    </div> : ''
                }
            </div>
        )

    }

}
