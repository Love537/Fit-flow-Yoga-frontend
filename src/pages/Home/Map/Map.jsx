import React from 'react';
//import CountUp from 'react-countup';

const Map = () => {
    return (
 <div className='md:h-[400px] h-full my-1 bg-secondary' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
    <div className="md:h-[500px] text-white bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center px-5">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Elevate Your Mind & Body</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Join thousands on the journey to better health, balance, and peace. Flexible yoga & fitness classes designed for all levels.
            </p>
           {/** <div className="flex justify-center gap-5">
                <button className="bg-primary text-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:bg-primary-dark transition">
                    Get Started
                </button>
                <button className="bg-white text-primary font-semibold py-3 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition">
                    View Classes
                </button>
            </div>
            */} 
        </div>
    </div>
</div>
    );
};

export default Map;