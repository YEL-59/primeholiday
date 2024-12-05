import React from 'react'
import img from '../../../../../public/Frame 671.png'
const Home_Video_Section = () => {
  return (
      <>
      
      
      
      <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('../../../../../public/Frame 671.png')`,
      }}
    >
      {/* Overlay for better text and video visibility */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content Area */}
      <div className="relative z-10 flex items-center justify-center h-full p-32">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center w-full h-[40rem]">
  <div className="relative w-full h-full">
    <iframe
      className="absolute inset-0 w-full h-full rounded"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

      </div>
    </div>
      </>
  )
}

export default Home_Video_Section