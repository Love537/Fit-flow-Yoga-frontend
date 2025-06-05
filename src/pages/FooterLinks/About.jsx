import React from 'react'
import NavBar from '../../components/headers/NavBar';
const About = () => {
  return (
      <div className="text-gray-800">
      <NavBar />

      <div className="mt-16">
        {/* Who Are We Section */}
        <section className="bg-yellow-50 py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800">Who Are We?</h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg">
            At FitFlow Yoga, we believe yoga is for everyone — a journey of body, breath, and mind. 
            Our mission is to empower individuals through mindful movement, holistic wellness, 
            and a strong community. We offer diverse classes led by experienced instructors in a welcoming space.
          </p>
        </section>

        {/* 3 Images Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Yoga Pose 1" 
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Yoga Pose 2" 
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Yoga Pose 3" 
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* About the Classes Section */}
        <section className="bg-gray-100 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">About the Classes</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our classes are designed for all levels, from beginners to advanced yogis. Whether you’re looking to increase flexibility, build strength, or find inner peace — we have a class for you.
            </p>
            <p className="text-md text-gray-600">
              Choose from Hatha, Vinyasa, Yin Yoga, and more. Each session blends breath, movement, and mindfulness to nourish your body and mind. Join us in-person or online!
            </p>
          </div>
        </section>

     
      </div>
    </div>




  )
}

export default About