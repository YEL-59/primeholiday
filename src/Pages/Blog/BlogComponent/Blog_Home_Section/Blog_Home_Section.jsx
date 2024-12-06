


import bgImage from '../../../../../public/blogbg.png';
import Navbar from '../../../../Components/Navbar/Navbar';
const Blog_Home_Section = () => {
  return (
      <>

      <header
        className="relative flex items-center justify-center h-[70vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Navbar/>
        <div
          className="relative z-30 p-5   text-center"
        >
                 
                  <h1 className='text-8xl font-semibold font-salvager   text-[#F49D2A] '> Explore Our Blogs</h1>
                  <p className='text-white text-2xl font-bold'>Expert Holiday Tips and Guides</p>
              </div>
             
      </header>
      </>
  )
}

export default Blog_Home_Section