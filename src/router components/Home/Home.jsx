import { useContext, useEffect, useRef, useState } from 'react'
import './Home.css'
import { navBarContext } from '../../Context/navBar context/NavBarContext'
import ImgCoverSlider from '../../components/ImgCoverSlider/ImgCoverSlider';
import { useGetAllMoviesQuery, useGetAllPopularsQuery, useGetNowPlayingMoviesQuery, useGetOnAirTVseriesQuery, useGetTopRatedMoviesQuery, useGetTopRatedTVseriesQuery } from '../../libs/RTK TMDB api/tmdb_api';
import ImgCoverSliderOptions from '../../sliderOptions/imgCoverSliderOptions';
import ImgCoverSliderOptionsFade from '../../sliderOptions/imgCoverSliderOptionsFade';
import ImgCoverSliderFade from '../../components/ImgCoverSliderFade/ImgCoverSliderFade';
import TopRatedSlider from '../../components/TopRatedSlider/TopRatedSlider';
import twd from '../../assets/s-l1600.webp'
import rick from '../../assets/rick.png'
import mi from '../../assets/mission_impossible__fallout_ver16_xlg.jpeg'
import ethan from '../../assets/wallpaperflare.com_wallpaper-removebg-preview.png'
import TripleSlider from '../../components/Triple slider/TripleSlider';
import useAllMovies from '../../custom hooks/useAllMovies';
import MoviesCamp from '../../components/Movies camp/MoviesCamp';
import useAllSeries from '../../custom hooks/useAllSeries';
import SeriesCamp from '../../components/Series camp/SeriesCamp';
import Quiz from '../../components/Quiz/Quiz';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setImgCoverValue } from '../../libs/ImgCoverSlice/ImgCoverSlice';

export default function Home({ baseImg }) {

    const getRandomIntegerInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let [quizPage, setQuizPage] = useState(getRandomIntegerInclusive(1, 300));

    function handleQuiz(){
        let temp;
        do{
            temp = getRandomIntegerInclusive(1, 300);

        }while(temp == quizPage);

        setQuizPage(temp);
    }

    let {imgCoverValue} = useSelector((store)=>store.imgCover);
    
    const dispatch = useDispatch();

    let [ImgCoverResponse, setImgCoverResponse] = useState(imgCoverValue);
    let [navHeight, setNavHeight] = useState([]);
    let { navBar } = useContext(navBarContext);

    let sliderFade = useRef();

    let [homeLoading, setHomeLoading] = useState({
        loading: false,
        hide: true
    });


    let { responseMovies: responseMovies, isLoadingMovies, isFetchingMovies, isSuccessMovies, isErrorMovies, errorMovies } = useGetNowPlayingMoviesQuery('', {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseMovies: data?.results,
            isLoadingMovies: isLoading,
            isFetchingMovies: isFetching,
            isSuccessMovies: isSuccess,
            isErrorMovies: isError,
            errorMovies: error
        })
    });
    let { responseTV: responseTV, isLoadingTV, isFetchingTV, isSuccessTV, isErrorTV, errorTV } = useGetOnAirTVseriesQuery('', {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseTV: data?.results,
            isLoadingTV: isLoading,
            isFetchingTV: isFetching,
            isSuccessTV: isSuccess,
            isErrorTV: isError,
            errorTV: error
        })
    });
    let { responseTopMovies, isLoadingTopMovies, isFetchingTopMovies, isSuccessTopMovies, isErrorTopMovies, errorTopMovies } = useGetTopRatedMoviesQuery('', {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseTopMovies: data?.results,
            isLoadingTopMovies: isLoading,
            isFetchingTopMovies: isFetching,
            isSuccessTopMovies: isSuccess,
            isErrorTopMovies: isError,
            errorTopMovies: error
        })
    });
    let { responseTopTV, isLoadingTopTV, isFetchingTopTV, isSuccessTopTV, isErrorTopTV, errorTopTV } = useGetTopRatedTVseriesQuery('', {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseTopTV: data?.results,
            isLoadingTopTV: isLoading,
            isFetchingTopTV: isFetching,
            isSuccessTopTV: isSuccess,
            isErrorTopTV: isError,
            errorTopTV: error
        })
    });
    let { responseAllMovies, isLoadingAllMovies, isFetchingAllMovies, isSuccessAllMovies, isErrorAllMovies, errorAllMovies } = useAllMovies(10);
    let { responseAllseries, isLoadingAllseries, isFetchingAllseries, isSuccessAllseries, isErrorAllseries, errorAllseries } = useAllSeries(3);
    let { responsePopular, isLoadingPopular, isFetchingPopular, isSuccessPopular, isErrorPopular, errorPopular } = useGetAllPopularsQuery(quizPage, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responsePopular: data?.results,
            isLoadingPopular: isLoading,
            isFetchingPopular: isFetching,
            isSuccessPopular: isSuccess,
            isErrorPopular: isError,
            errorPopular: error
        })
    });
    

    useEffect(() => {
        if (isSuccessMovies && isSuccessTV) {
            let temp = [];
            let TV = 0;
            let j = 0;

            for (let i = 0; i < responseMovies.length; i++) {

                temp.push(responseMovies[i]);
                TV++;
                if (TV == 2) {
                    temp.push(responseTV[j]);
                    j++;
                    TV = 0;
                }
            }
            for (let i = j; i < responseTV.length; i++)
                temp.push(responseTV[i]);

            setImgCoverResponse(temp);
            dispatch(setImgCoverValue(temp));

        }
    }, [isSuccessMovies, isSuccessTV]);

    useEffect(() => {
        setNavHeight(navBar.current.clientHeight);
    }, [navBar]);

    useEffect(() => {
        if (isLoadingMovies && isLoadingTV && isLoadingTopMovies && isLoadingTopTV && isLoadingAllMovies && isLoadingAllseries && isLoadingPopular) {
            document.body.style.overflow = 'hidden';
            setHomeLoading({
                loading: true,
                hide: false
            })
        }
        else{
            setHomeLoading({ ...homeLoading, loading: false });
            setTimeout(() => {
                setHomeLoading({ ...homeLoading, hide: true });
                document.body.style.overflow = 'visible';
            }, 2000);
        }
    }, [isLoadingMovies, isLoadingTV, isLoadingTopMovies, isLoadingTopTV, isLoadingAllMovies, isLoadingAllseries, isLoadingPopular]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {!homeLoading.hide ?
                <div className={`home-loading fixed top-0 left-0 bg-[#282f41] w-full h-full z-[9999999] flex items-center justify-center ${homeLoading.loading ? 'translate-x-0' : 'translate-x-[-100%]'} transition-transform duration-1000 delay-1000`}>
                    <div>
                        <h2 className=' text-[3rem] capitalize font-laila text-mainColor font-bold text-center'>movieCamp</h2>
                        <div className="lds-ellipsis text-[#828ca3] block mx-auto mt-[-8px]"><div /><div /><div /><div /></div>
                        <div className=' h-8  overflow-hidden mt-4'>
                            <h3 className={`h-8 m-0 text-white font-madimi text-center text-2xl capitalize ${homeLoading.loading ? 'translate-y-full' : 'translate-y-0'} transition-transform duration-500`}>hello friend, enjoy your watch &#128522;</h3>
                        </div>
                    </div>
                </div> : ''}
            {isSuccessMovies && isSuccessTV && isSuccessTopMovies && isSuccessTopTV && isSuccessAllMovies && isSuccessAllseries && ImgCoverResponse
                && <section className="home overflow-hidden" >
                    <div className="container shadow-inner shadow-black">
                        <div className=' img-cover flex items-end  relative z-0 max-h-[800px]' style={{ height: `calc(100vh - ${navHeight}px)` }}>
                            <div className=' absolute top-0 left-0 w-full h-full z-0 '>

                                <ImgCoverSliderFade ref={sliderFade} results={{ response: ImgCoverResponse, baseImg }} options={ImgCoverSliderOptionsFade}></ImgCoverSliderFade>

                            </div>
                            <ImgCoverSlider ref={sliderFade} results={{ response: ImgCoverResponse, baseImg }} options={ImgCoverSliderOptions}></ImgCoverSlider>
                        </div>
                        <div className='top-rated-movies border-t-2 border-b-2 border-[#212736e0] text-white relative z-10 py-5 mb-12' >
                            <h2 className=' capitalize font-laila px-3 mb-2'>top rated movies</h2>
                            <TopRatedSlider results={{ response: responseTopMovies, baseImg }}></TopRatedSlider>
                        </div>
                        <div className='top-rated-series border-t-2 border-b-2 border-[#212736e0] text-white relative z-10 py-5' >
                            <h2 className=' capitalize font-laila px-3 mb-2'>top rated TV series</h2>
                            <TopRatedSlider results={{ response: responseTopTV, baseImg }}></TopRatedSlider>
                        </div>
                        <div className='discover py-12'>
                            <h2 className='text-white text-center capitalize font-laila mb-5'>discover your favorite movies and TV-series</h2>
                            <div className='max-w-[500px]  md:max-w-[625px]  mx-auto flex flex-nowrap px-4'>
                                <div className='w-1/2 pe-6  '>
                                    <Link to={'/TV-series'}>
                                        <div className="inner cursor-pointer relative overflow-hidden" onClick={()=> window.scrollTo(0, 0)}>
                                            <img src={twd} alt="" className='w-full rounded-md origin-bottom' />
                                            <img src={rick} alt="" className=' h-[90%] object-cover  bg-rose-0 absolute bottom-0 left-1/2 translate-x-[-35%] opacity-0' />
                                        </div>
                                    </Link>
                                    <h3 className=' uppercase font-madimi text-center text-white mt-3'>TV series</h3>
                                </div>
                                <div className=' w-1/2 ps-6    '>
                                    <Link to={'/movies'}>
                                        <div className="inner cursor-pointer relative overflow-hidden" onClick={()=> window.scrollTo(0, 0)}>
                                            <img src={mi} alt="" className='w-full rounded-md origin-bottom' />
                                            <img src={ethan} alt="" className=' w-10/12  absolute bottom-0  left-1/2 translate-x-[-50%] opacity-0' />
                                        </div>
                                    </Link>
                                    <h3 className='uppercase font-madimi text-center text-white mt-3'>movies</h3>
                                </div>
                            </div>
                        </div>
                        <div className=' heros py-12 border-t-2 border-b-2 border-[#212736e0]'>
                            <h2 className='text-white text-center capitalize font-laila mb-5 '>And all your heros are here</h2>
                            <TripleSlider></TripleSlider>
                        </div>
                        <div className=' movies py-12'>
                            <h2 className='text-white text-center capitalize font-laila mb-5 '>
                                movies Camp
                            </h2>
                            <MoviesCamp results={{ response : responseAllMovies, baseImg }}></MoviesCamp>
                        </div>
                        {isSuccessPopular?
                        <div className='quiz border-t-2  py-12 border-[#212736e0] relative'>
                            <span className=' text-white absolute right-5 top-5 cursor-pointer' onClick={handleQuiz}>
                                <i className="fa-solid fa-rotate-right" />
                            </span>
                            <h2 className='text-white text-center capitalize font-laila mb-5 '>
                                quiz time
                            </h2>
                            <h3 className='text-white text-center capitalize font-laila mb-5 '>
                                Do you know the celebrity
                                <i className="fa-regular fa-face-smile-wink ms-2" /> ?
                            </h3>
                            <Quiz results={{ responsePopular, baseImg }}></Quiz>

                        </div>:''}
                        <div className=' TV py-12 border-t-2 border-b-2 border-[#212736e0]'>
                            <h2 className='text-white text-center capitalize font-laila mb-5 '>
                                TV-series Camp
                            </h2>
                            <SeriesCamp results={{ response : responseAllseries, baseImg }}></SeriesCamp>
                        </div>
                    </div>
                </section>}
        </>
    )


}