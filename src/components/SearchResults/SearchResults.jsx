import { Skeleton } from '@mui/material';
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchResults({ res }) {

    let navigate = useNavigate();

    let SkeletonArray = useMemo(() => [1, 2, 3, 4, 5, 6], []);

    let { results, baseImg, search, inputRef, loading } = res;
    
    

    function navigateDetails(item){
        if(item['original_title']){
            navigate(`/movie-details/${item.id}`);
        }
        else{
            navigate(`/series-details/${item.id}`);
        }
    }


    if (loading && search.query !== 'person') {
        return (
            <div className="row g-4 justify-center">
                {SkeletonArray.map((ele, i) => <div key={i} className={` md:w-4/12 lg:w-3/12 `}>
                    <Skeleton variant='rounded' height={200} animation={'wave'} className=' bg-[#1E293B]'></Skeleton>
                    <Skeleton variant='text' animation={'wave'} className=' bg-[#1E293B]'></Skeleton>
                    <Skeleton variant='rectangular' height={50} animation={'wave'} className=' bg-[#1E293B]'></Skeleton>
                    <Skeleton variant='text' animation={'wave'} className=' bg-[#1E293B] w-1/2'></Skeleton>
                    <Skeleton variant='circular' animation={'wave'} className=' bg-[#1E293B] size-14 mx-auto mt-2'></Skeleton>
                </div>)}
            </div>
        )
    }
    else if (loading && search.query == 'person'){
        return (
            <div className="row g-4 justify-center">
                {SkeletonArray.map((ele, i) => <div key={i} className={` md:w-4/12 lg:w-3/12 `}>
                    <Skeleton variant='rounded' height={200} animation={'wave'} className=' bg-[#1E293B]'></Skeleton>
                    <Skeleton variant='text' animation={'wave'} className=' bg-[#1E293B] w-1/2 mx-auto'></Skeleton>
                    <Skeleton variant='rectangular' height={50} animation={'wave'} className=' bg-[#1E293B]'></Skeleton>
                </div>)}
            </div>
        )
    }
    else if (search.query !== 'person') {
        return (
            <div className="row g-4 justify-center">
                {!results.length && inputRef?.current?.value ? <p className='text-white text-center capitalize font-laila'>searched results not found</p> :
                    results.map((movie, i) => <div key={i} className={` md:w-4/12 lg:w-3/12 xl:w-2/12 `}>
                        <div className={`group inner h-full flex flex-col shadow-xl shadow-black p-2 rounded-bl-2xl cursor-pointer bg-dark text-white`} onClick={()=>navigateDetails(movie)}>
                            <div className='poster mb-5 overflow-hidden rounded-t-md'>
                                {movie['poster_path'] ? <img src={baseImg + movie['poster_path']} alt="" className=' w-full rounded-t-md group-hover:scale-105 transition-transform duration-300' /> : <div className=' bg-[#1E293B] h-72'></div>}
                            </div>
                            <div className='info  flex-grow flex flex-col justify-between '>
                                <div>
                                    <h2 className=' mb-2 font-madimi text-nowrap overflow-hidden text-ellipsis '>{movie['original_title'] ? movie['original_title'] : movie['name']}</h2>
                                    <p className='line-clamp-3 mb-4 text-sm text-[#d8d8d8]'>{movie['overview']}</p>
                                </div>
                                <div className=''>
                                    <p className='capitalize mb-4'>
                                        <span className='font-madimi me-2 text-mainColor'>
                                            {movie['release_date'] ? 'release date :' : 'first air date'}
                                        </span>
                                        <span className='text-xs'>
                                            {movie['release_date'] ? movie['release_date'] : movie['first_air_date']}
                                        </span>
                                    </p>
                                    <div className='rating mx-auto mb-4 relative z-0 size-12 rounded-full p-1' style={{ background: `conic-gradient(#51abce 0%, transparent ${movie['vote_average'] * 10}%)` }}>
                                        <span className=' w-full h-full flex flex-col-reverse justify-center items-center  text-[10px] bg-slate-200 text-black rounded-full font-madimi'>
                                            {(movie['vote_average']?.toFixed(2) * 10).toFixed(1)}%
                                            <i className="fa-solid fa-star mb-1" style={{ color: 'gold' }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        )
    }
    else {
        return (
            <div className="row g-4 justify-center">
                {!results.length && inputRef?.current?.value ? <p className='text-white text-center capitalize font-laila'>searched results not found</p> :
                    results.map((person, i) => person['profile_path']? <div key={i} className={` md:w-4/12 lg:w-3/12 xl:w-2/12 `}>
                        <Link to={`/person-details/${person.id}`}>
                            <div className={`group inner h-full flex flex-col shadow-xl shadow-black p-2 rounded-bl-2xl cursor-pointer bg-dark text-white`} >
                                <div className='poster mb-5 overflow-hidden rounded-t-md'>
                                    <img src={baseImg + person['profile_path']} alt="" className=' w-full rounded-t-md group-hover:scale-105 transition-transform duration-300' />
                                </div>
                                <div className='info  flex-grow flex flex-col justify-start '>
                                    <p className='capitalize mb-4 text-center text-mainColor font-madimi text-lg'>
                                        {person['known_for_department']}
                                    </p>
                                    <p className='capitalize text-center font-madimi text-2xl'>
                                        {person.name}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>:'')}
            </div>
        )
    }
}
