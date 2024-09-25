import { useEffect,  useRef, useState } from 'react'
import './Search.css'
import axios from 'axios';
import SearchResults from '../../components/SearchResults/SearchResults';

export default function Search({baseImg}) {

    let [search, setSearch] = useState({
        query : 'movie', 
        translate : '0'
    });

    
    let inputRef = useRef();

    let [results, setResults] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState({
        isError: false,
        message: ''
    });
    

    async function startSearch(query) {

        try {
            setLoading(true);
            let response = await axios.get(`https://api.themoviedb.org/3/search/${search.query}?query=${query}&include_adult=false&language=en-US&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjk0NDQ1OS4yOTE0MzQsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s9V7uHJMfeIPtTNqKQ1Wzc_EHqG5lLzhqnBO9vYXe8U'
                }
            });

            
            setTimeout(() => {
                setResults(response?.data?.results);
                setLoading(false);
            }, 300);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(()=>{
        if(inputRef.current.value)
            startSearch(inputRef.current.value);

    }, [search]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);



    return (
        <section className=' search py-12 '>
            <div className="container">
                <ul className=' flex mb-6 relative z-0 w-fit mx-auto'>
                    <span className=' absolute left-0 top-0 bg-mainColor w-20 h-full rounded-md z-n1 transition-transform duration-300' style={{transform : `translateX(${search.translate}%)`}}></span>
                    <li className='w-20 text-center text-white font-madimi py-1 rounded-md cursor-pointer' onClick={()=>setSearch({query : 'movie', translate : '0'})}>movies</li>
                    <li className='w-20 text-center text-white font-madimi py-1 rounded-md cursor-pointer' onClick={()=>setSearch({query : 'tv', translate : '100'})}>TV-series</li>
                    <li className='w-20 text-center text-white font-madimi py-1 rounded-md cursor-pointer' onClick={()=>setSearch({query : 'person', translate : '200'})}>celebrity</li>
                </ul>
                <div className='box w-3/4 mx-auto flex bg-[#1E293B] border-2 border-white rounded-md overflow-hidden mb-10'>
                    <input ref={inputRef} type="text" className=' bg-transparent text-white px-4 flex-grow font-madimi' placeholder='Search Your Movie' onChange={(event) => startSearch(event.target.value)} />
                    <button className='text-sm bg-mainColor text-white rounded-none font-laila capitalize hover:bg-[#8bd3f0]' onClick={() => startSearch(inputRef.current.value)}>search</button>
                </div>
                <SearchResults res={{results , baseImg, search, inputRef, loading}}></SearchResults>
                
            </div>
        </section>
    )
}
