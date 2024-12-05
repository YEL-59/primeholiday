import React from 'react'

const GridItem = ({ imgSrc, title, description }) => {
  return (
      <>
          <div className="relative rounded shadow overflow-hidden h-64">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
      {/* Text */}
      <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
      
      </>
  )
}

export default GridItem