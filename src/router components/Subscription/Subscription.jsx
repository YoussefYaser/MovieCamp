import './Subscription.css'

export default function Subscription() {
    return (
        <>
            <div className="sub-plan overflow-hidden py-12">
                <div className="container">
                    <h3 className=' capitalize text-white font-laila text-center mb-5 text-2xl'>
                        subscription plan
                        <i className="fa-solid fa-money-bill-wave ms-2" />
                    </h3>
                    <div className=' row  g-3'>
                        <div className=' w-full sm:w-1/3 premium'>
                            <div className="inner flex flex-col justify-between bg-[#1F2534] border-2 border-white p-4 h-full rounded-md">
                                <div>
                                    <p className=' px-2 py-3 rounded-md text-white font-madimi capitalize'>premium  4K+HDR</p>
                                    <ul className=' mt-6'>
                                        <li className=' text-white my-4'>
                                            <h4>monthly price</h4>
                                            $20
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>video and sound quality</h4>
                                            Best
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>spatial sound</h4>
                                            included
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>supported devices</h4>
                                            TV, computer, phone, tablet
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>Devices your household can watch at the same time</h4>
                                            4
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>download devices</h4>
                                            6
                                        </li>
                                    </ul>
                                </div>
                                <button className=' w-fit mx-auto bg-mainColor text-white font-madimi capitalize hover:scale-110 transition-transform duration-300 mt-8'>subscribe now</button>
                            </div>
                        </div>
                        <div className=' w-full sm:w-1/3 standard'>
                            <div className="inner flex flex-col justify-between bg-[#1F2534] border-2 border-white p-4 h-full rounded-md">
                                <div>
                                    <p className=' px-2 py-3 rounded-md text-white font-madimi capitalize'>standard  1080p</p>
                                    <ul className=' mt-6'>
                                        <li className=' text-white my-4'>
                                            <h4>monthly price</h4>
                                            $15
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>video and sound quality</h4>
                                            great
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>supported devices</h4>
                                            TV, computer, phone, tablet
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>Devices your household can watch at the same time</h4>
                                            2
                                        </li>
                                        <li className=' text-white my-4'>
                                            <h4>download devices</h4>
                                            2
                                        </li>
                                        
                                    </ul>
                                </div>
                                <button className='w-fit mx-auto bg-mainColor text-white font-madimi capitalize hover:scale-110 transition-transform duration-300 mt-8'>subscribe now</button>
                            </div>

                        </div>
                        <div className='w-full sm:w-1/3 basic'>
                        <div className="inner flex flex-col justify-between bg-[#1F2534] border-2 border-white p-4 h-full rounded-md">
                            <div>
                                <p className=' px-2 py-3 rounded-md text-white font-madimi capitalize'>basic  720p</p>
                                <ul className=' mt-6'>
                                    <li className=' text-white my-4'>
                                        <h4>monthly price</h4>
                                        $7
                                    </li>
                                    <li className=' text-white my-4'>
                                        <h4>video and sound quality</h4>
                                        good
                                    </li>
                                    <li className=' text-white my-4'>
                                        <h4>supported devices</h4>
                                        TV, computer, phone, tablet
                                    </li>
                                    <li className=' text-white my-4'>
                                        <h4>Devices your household can watch at the same time</h4>
                                        1
                                    </li>
                                    <li className=' text-white my-4'>
                                        <h4>download devices</h4>
                                        1
                                    </li>
                                </ul>
                            </div>
                            <button className=' w-fit mx-auto bg-mainColor text-white font-madimi capitalize hover:scale-110 transition-transform duration-300 mt-8'>subscribe now</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
