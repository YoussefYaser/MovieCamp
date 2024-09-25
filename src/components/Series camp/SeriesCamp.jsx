import { useState } from 'react';
import './SeriesCamp.css'
import { useNavigate } from 'react-router-dom';

export default function SeriesCamp({ results }) {
    let [hover, setHover] = useState({
        index : '', 
        animation : ''
    });
    let { response, baseImg } = results;


    const navigate = useNavigate();
    
    return (
        <div className='row g-4 text-white  justify-center'>
            {response.map((series, i) => <div key={i} className={` md:w-4/12 lg:w-3/12 xl:w-2/12  ${hover.animation&&hover.index==i?'innerHover relative z-10':'innerUnhover'}`} onMouseEnter={()=>setHover({index:i, animation: true})} onMouseLeave={()=>setHover({index:i, animation:false})}>
                <div className={`inner h-full flex flex-col shadow-xl shadow-black p-2 rounded-bl-2xl cursor-pointer bg-dark `} onClick={()=>{navigate(`/series-details/${series.id}`); window.scrollTo(0, 0)}}>
                    <div className='poster mb-5'>
                        {series['poster_path']?<img src={baseImg + series['poster_path']} alt=""  className=' w-full rounded-t-md'/>: <div className=' bg-[#1E293B] h-72'></div>}
                        
                    </div>
                    <div className='info h-[100%] flex-grow flex flex-col justify-between '>
                        <div>
                            <h2 className=' mb-2 font-madimi text-nowrap overflow-hidden text-ellipsis '>{series['original_name']}</h2>
                            <p className='line-clamp-3 mb-4 text-sm text-[#d8d8d8]'>{series['overview']}</p>
                        </div>
                        <div className=''>
                            <p className='capitalize mb-4'>
                                <span className='font-madimi me-2 text-mainColor'>
                                    {series['release_date'] ? 'release date :' : 'first air date'}
                                </span>
                                <span className='text-xs'>
                                    {series['release_date'] ? series['release_date'] : series['first_air_date']}
                                </span>
                            </p>
                            <div className='rating mx-auto mb-4 relative z-0 size-12 rounded-full p-1' style={{ background: `conic-gradient(#51abce 0%, transparent ${series['vote_average'] * 10}%)` }}>
                                <span className=' w-full h-full flex flex-col-reverse justify-center items-center  text-[10px] bg-slate-200 text-black rounded-full font-madimi'>
                                    {(series['vote_average'].toFixed(2) * 10).toFixed(1)}%
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
