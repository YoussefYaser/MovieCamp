import './VideoSlider.css'
import { useRef, useState } from 'react';


export default function VideoSlider({ results }) {

    let iframeRef = useRef();

    let { response, setVideoZoom } = results;

    let [activeVideo, setActiveVideo] = useState(response.length - 1);



    function closeVideo() {
        let temp = iframeRef.current.src;
        iframeRef.current.src = temp;
        setTimeout(() => {
            setVideoZoom(false);

        }, 300);
    }


    return (
        <div className='w-9/12 h-[300px] sm:h-[500px] flex flex-col'>
            <h2 className='text-white text-center mb-4 font-laila'>{response[activeVideo].name}</h2>
            <span className='img-zoom-overlay-cancel  text-[#ffffff7c] absolute right-4 top-4 size-9 text-xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={closeVideo}>
                <i className="fa-solid fa-xmark" />
            </span>
            {activeVideo != 0 ? <span className=' img-zoom-overlay-prev text-[#ffffff7c] absolute left-0 top-1/2 size-16 text-4xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setActiveVideo(activeVideo - 1)}>
                <i className="fa-solid fa-chevron-left" />
            </span> : ''}
            <div className='flex-grow rounded-md border-2 border-white overflow-hidden'>
                {response.map((video, i) =>
                    <iframe ref={iframeRef} key={i} src={`https://www.youtube.com/embed/${video.key}?mute=1`} className=' w-full h-full'></iframe>)[activeVideo]}
            </div>
            {activeVideo >= response?.length - 1 ? '' : <span className=' img-zoom-overlay-next text-[#ffffff7c] top-1/2 absolute right-0 size-16 text-4xl flex justify-center items-center cursor-pointer hover:text-white transition-colors duration-300' onClick={() => setActiveVideo(activeVideo + 1)}>
                <i className="fa-solid fa-chevron-right" />
            </span>}
        </div>
    )
}
