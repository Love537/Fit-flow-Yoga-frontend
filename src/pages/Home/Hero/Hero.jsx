import React from 'react';
import bgImg from '../../../assets/home/banner-1.jpg';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
const Hero = () => {
     const navigate = useNavigate(); // Initialize navigate function

    // Function to handle button click
    const handleJoinClick = () => {
        navigate('/login'); // Navigate to login page
    };
    const handleViewCoursesClick = () => {
        navigate('/classes'); // Navigate to courses page
    }
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='md:text-4xl text-2xl'>WE PROVIDES</h3>
                        <h1 className='md:text-7xl text-4xl font-bold '>Best Yoga classes</h1>
                        <div className="md:w-1/2">
                            <p className=''>Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any age consider.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <button 
                                onClick={handleJoinClick}
                                className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>
                                Join Today
                            </button>
                            <button onClick={handleViewCoursesClick}
                            className='px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase'>
                                View Courses
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;