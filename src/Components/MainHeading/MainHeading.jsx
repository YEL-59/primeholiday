import React from 'react'

const MainHeading = ({head_title,sub_title}) => {
  return (
      <>
          <div>
              <h1 className='text-primary text-center font-salvager text-[60px] md:text-[50px] xl:text-[86px] 2x:text-[96px] font-normal mt-24'>{ head_title}</h1>

              <p className='text-text-primary text-center font-montserrat text-[15px] md:text-[20px] xl:text-[40px] font-bold leading-[1] md:tracking-[-1.28px] max-w-4xl mx-auto mt-5 '>{sub_title}</p>
          </div>
      </>
  )
}

export default MainHeading