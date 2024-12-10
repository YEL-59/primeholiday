import video from "../../../../../public/HomeImg/homevideo.webp"
const Home_Video_Section = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('../../../../../public/Frame 671.png')`,
        }}
      >
     

        {/* Content Area */}
        <div className="relative z-10 flex items-center justify-center h-full p-32">
          <div className="  shadow-lg  text-center w-[1375px] h-[45rem]">
            <div className="relative w-full h-full">
              <iframe
                className="absolute inset-0 w-full h-full "
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <img src={video} alt="" className="absolute inset-0 w-full h-full rounded" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Video_Section;
