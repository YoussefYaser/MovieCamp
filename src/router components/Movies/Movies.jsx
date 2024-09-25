
import { useState } from 'react';
import MoviesCamp from '../../components/Movies camp/MoviesCamp'
import './Movies.css'
import useAllMovies from '../../custom hooks/useAllMovies';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Skeleton } from '@mui/material';

export default function Movies({ baseImg }) {

    let [page, setPage] = useState({
        page: 1,
        group: 0
    });

    let { responseAllMovies, isLoadingAllMovies, isFetchingAllMovies, isSuccessAllMovies, isErrorAllMovies, errorAllMovies } = useAllMovies(page.page);

    function Ske() {
        let temp = [];
        for (let i = 0; i < 24; i++) {
            temp.push(i);
        }

        return temp;
    }

    if (isLoadingAllMovies ) {
        return (
            <div className=' py-4'>
                <div className="container">
                    <Skeleton variant='text' className=' w-1/2 mx-auto bg-[#1F2534] mb-3'></Skeleton>
                    <div className="row g-3">
                        {Ske().map((ele, i) => <div key={i} className='w-1/2 md:w-4/12 lg:w-3/12 xl:w-2/12 h-72'>
                            <Skeleton variant=' rounded' className=' w-full bg-[#1F2534] h-full'></Skeleton>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
    else if (isSuccessAllMovies) {
        return (
            <section className=' movies py-12 overflow-hidden' >
                <div className="container ">
                    <h2 className=' text-[3rem] uppercase font-madimi text-center text-white mb-5'>movies</h2>
                    <MoviesCamp results={{ response : responseAllMovies, baseImg }}></MoviesCamp>

                    <div className=' pages pt-20 mx-auto w-fit'>
                        <ButtonGroup className='' variant="contained" aria-label="Basic button group">
                            {page.group != 0 ? <Button className=' bg-[#2a3a54] border-dark border-2 hover:scale-110 transition-transform duration-500' onClick={() => setPage({ ...page, group: page.group - 1 })}>...</Button> : ''}
                            <Button className={` bg-[#1E293B] border-dark border-2 hover:bg-[gray] relative`} onClick={() => setPage({ ...page, page: 1 + (page.group * 5) })}>
                                <span className={`${isFetchingAllMovies && page.page == 1 + (page.group * 5) ? 'opacity-0' : 'opacity-100'}`}>
                                    {1 + (page.group * 5)}
                                </span>
                                {isFetchingAllMovies && page.page == 1 + (page.group * 5) ? <span className="loader" /> : ''}
                            </Button>
                            <Button className={` bg-[#1E293B] border-dark border-2 hover:bg-[gray] relative`} onClick={() => setPage({ ...page, page: 2 + (page.group * 5) })}>
                                <span className={`${isFetchingAllMovies && page.page == 2 + (page.group * 5) ? 'opacity-0' : 'opacity-100'}`}>
                                    {2 + (page.group * 5)}
                                </span>
                                {isFetchingAllMovies && page.page == 2 + (page.group * 5) ? <span className="loader" /> : ''}
                            </Button>
                            <Button className={` bg-[#1E293B] border-dark border-2 hover:bg-[gray] relative`} onClick={() => setPage({ ...page, page: 3 + (page.group * 5) })}>
                                <span className={`${isFetchingAllMovies && page.page == 3 + (page.group * 5) ? 'opacity-0' : 'opacity-100'}`}>
                                    {3 + (page.group * 5)}
                                </span>
                                {isFetchingAllMovies && page.page == 3 + (page.group * 5) ? <span className="loader" /> : ''}
                            </Button>
                            <Button className={` bg-[#1E293B] border-dark border-2 hover:bg-[gray] relative`} onClick={() => setPage({ ...page, page: 4 + (page.group * 5) })}>
                                <span className={`${isFetchingAllMovies && page.page == 4 + (page.group * 5) ? 'opacity-0' : 'opacity-100'}`}>
                                    {4 + (page.group * 5)}
                                </span>
                                {isFetchingAllMovies && page.page == 4 + (page.group * 5) ? <span className="loader" /> : ''}
                            </Button>
                            <Button className={` bg-[#1E293B] border-dark border-2 hover:bg-[gray] relative`} onClick={() => setPage({ ...page, page: 5 + (page.group * 5) })}>
                                <span className={`${isFetchingAllMovies && page.page == 5 + (page.group * 5) ? 'opacity-0' : 'opacity-100'}`}>
                                    {5 + (page.group * 5)}
                                </span>
                                {isFetchingAllMovies && page.page == 5 + (page.group * 5) ? <span className="loader" /> : ''}
                            </Button>
                            <Button className=' bg-[#2a3a54] border-dark border-2 hover:scale-110 transition-transform duration-500' onClick={() => setPage({ ...page, group: page.group + 1 })}>...</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </section>
        )
    }

}
