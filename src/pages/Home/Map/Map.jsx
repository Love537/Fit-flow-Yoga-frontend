import React from 'react';
import CountUp from 'react-countup';

const Map = () => {
    return (
        <div className='md:h-[300px] h-full my-11 bg-secondary' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
            <div className="md:h-[300px] text-white bg-black flex justify-center items-center bg-opacity-40">
                <div className="flex md:flex-row flex-col py-7 gap-16">
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={35} />M+</h1>
                        <p className='font-bold text-lg'>Visitor</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={3} end={5} />M+</h1>
                        <p className='font-bold text-lg'>Subscriber</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={950} />k+</h1>
                        <p className='font-bold text-lg'>Students</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-5xl font-bold'><CountUp duration={2} end={90} />%</h1>
                        <p className='font-bold text-lg'>Success stories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;