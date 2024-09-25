import { useParams } from 'react-router-dom'
import './PersonDetails.css'
import { useGetPersonDetailsQuery, useGetPersonMoviesQuery, useGetPersonSeriesQuery } from '../../libs/RTK TMDB api/tmdb_api';
import MoviesCamp from '../../components/Movies camp/MoviesCamp';
import SeriesCamp from '../../components/Series camp/SeriesCamp';
import { Skeleton } from '@mui/material';

export default function PersonDetails({baseImg}) {

    const {id} =  useParams();


    let { responsePersonDetails, isLoadingPersonDetails, isFetchingPersonDetails, isSuccessPersonDetails, isErrorPersonDetails, errorPersonDetails } = useGetPersonDetailsQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responsePersonDetails: data,
            isLoadingPersonDetails: isLoading,
            isFetchingPersonDetails: isFetching,
            isSuccessPersonDetails: isSuccess,
            isErrorPersonDetails: isError,
            errorPersonDetails: error
        })
    });
    let { responsePersonMovies, isLoadingPersonMovies, isFetchingPersonMovies, isSuccessPersonMovies, isErrorPersonMovies, errorPersonMovies } = useGetPersonMoviesQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responsePersonMovies: data,
            isLoadingPersonMovies: isLoading,
            isFetchingPersonMovies: isFetching,
            isSuccessPersonMovies: isSuccess,
            isErrorPersonMovies: isError,
            errorPersonMovies: error
        })
    });
    let { responsePersonSeries, isLoadingPersonSeries, isFetchingPersonSeries, isSuccessPersonSeries, isErrorPersonSeries, errorPersonSeries } = useGetPersonSeriesQuery(id, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responsePersonSeries: data,
            isLoadingPersonSeries: isLoading,
            isFetchingPersonSeries: isFetching,
            isSuccessPersonSeries: isSuccess,
            isErrorPersonSeries: isError,
            errorPersonSeries: error
        })
    });

    console.log(responsePersonSeries);
    

    if(isLoadingPersonDetails || isLoadingPersonMovies || isLoadingPersonSeries){
        return(
            <div className=' py-12'>
                <div className="container">
                    <Skeleton variant='rounded' className='w-52 h-80 mx-auto bg-[#1F2534] mb-4'></Skeleton>
                    <Skeleton variant='text' className=' h-6 mx-auto bg-[#1F2534] mb-4'></Skeleton>
                    <Skeleton variant='rectangular' className='w-10/12 h-[500px] mx-auto bg-[#1F2534]'></Skeleton>
                </div>
            </div>
        )
    }
    else if(isSuccessPersonDetails && isSuccessPersonMovies && isSuccessPersonSeries){
        return (
            <section className='person-details py-12'>
                <div className="container bg-[#1F2534] py-6 rounded-lg">
                    <div className='w-fit mx-auto mb-4'>
                        <img src={baseImg + responsePersonDetails['profile_path']} className=' max-w-[185px] border-2 border-white rounded-md' alt="" />
                    </div>
                    <h2 className=' font-laila text-white text-center mb-7'>{responsePersonDetails?.name}</h2>
                    <div className='w-full sm:w-10/12 mx-auto border-t-2 border-gray-500 py-6'>
                        <h3 className=' text-h2 font-madimi text-center mb-3 text-mainColor capitalize'>biography</h3>
                        <p className=' text-white text-center leading-7'>{responsePersonDetails.biography}</p>
                    </div>
                    <ul className='w-full sm:w-10/12 mx-auto border-t-2 border-gray-500 py-6'>
                        <h3 className=' text-h2 font-madimi text-center mb-3 text-mainColor capitalize'>Birth</h3>
                        <li className=' text-white capitalize text-center mb-2'>
                            <span className=' font-madimi text-mainColor me-2'>
                                place_of_birth :
                            </span>
                            {responsePersonDetails['place_of_birth']}
                        </li>
                        <li className=' text-white capitalize text-center'>
                            <span className=' font-madimi text-mainColor me-2'>
                                birthday :
                            </span>
                            {responsePersonDetails['birthday']}
                        </li>
                    </ul>
                    {responsePersonMovies?.cast.length?<div className='movies w-full sm:w-10/12 mx-auto border-t-2 border-gray-500 py-6'>
                        <h3 className=' text-h2 font-madimi text-center mb-6 text-mainColor capitalize'>popular movies</h3>
                        <MoviesCamp results={{ response : responsePersonMovies.cast, baseImg }}></MoviesCamp>
                    </div>:''}
                    {responsePersonMovies?.crew.length?<div className='movies w-full sm:w-10/12 mx-auto border-t-2 border-gray-500 py-6'>
                        <h3 className=' text-h2 font-madimi text-center mb-6 text-mainColor capitalize'>movies production</h3>
                        <MoviesCamp results={{ response : responsePersonMovies.crew, baseImg }}></MoviesCamp>
                    </div>:''}
                    {responsePersonSeries?.cast.length?<div className='TV w-full sm:w-10/12 mx-auto border-t-2 border-gray-500 py-6'>
                        <h3 className=' text-h2 font-madimi text-center mb-6 text-mainColor capitalize'>popular TV-series </h3>
                        <SeriesCamp results={{ response : responsePersonSeries.cast, baseImg }}></SeriesCamp>
                    </div>:''}
                    {responsePersonSeries?.crew.length?<div className='TV w-full sm:w-10/12 mx-auto border-t-2 border-gray-500 py-6'>
                        <h3 className=' text-h2 font-madimi text-center mb-6 text-mainColor capitalize'>TV-series production</h3>
                        <SeriesCamp results={{ response : responsePersonSeries.crew, baseImg }}></SeriesCamp>
                    </div>:''}
                    
                </div>
            </section>
        )
    }

}
