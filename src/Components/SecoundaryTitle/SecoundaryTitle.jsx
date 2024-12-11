import React from 'react'

const SecoundaryTitle = ({ head_title }) => {
  return (
    <div className="text-primary max-w-7xl bg-opacity-100 text-center md:text-start font-montserrat text-[25px] md:text-[40px] xl:text-[38px]  font-semibold md:leading-[60px]  md:tracking-[1.069px] uppercase">
      <h1>{head_title}</h1>
    </div>
  )
}

export default SecoundaryTitle 
