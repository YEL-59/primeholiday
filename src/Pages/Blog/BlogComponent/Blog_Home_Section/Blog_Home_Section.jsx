


import bgImage from '../../../../../public/BlogImg/blogbg.webp';
import SectionHeader from '../../../../Components/SectionHeader/SectionHeader';

const Blog_Home_Section = () => {
  return (
      <>

      {/* <header
        className="relative flex items-center justify-center h-[70vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
    
        <div
          className="relative z-30 p-5   text-center"
        >
                 
                  <h1 className='text-8xl font-semibold font-salvager   text-primary '> Explore Our Blogs</h1>
                  <p className='text-white text-2xl font-bold'>Expert Holiday Tips and Guides</p>
              </div>
             
      </header> */}
     
      <div className='h-[70vh] '>
      <SectionHeader 
     backgroundImage={bgImage}
      title={'Explore Our Blogs'}
      sub_title={'Expert Holiday Tips and Guides'}
      height="70vh" 
      />
      </div>
      
      </>
  )
}

export default Blog_Home_Section