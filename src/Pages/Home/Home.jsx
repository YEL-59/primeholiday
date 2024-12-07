import Footer from "../../Components/Footer/Footer"
import Home_Inclusive_Section from "./HomeComponent/Home_Inclusive_Section/Home_Inclusive_Section"
import Home_Main_Section from "./HomeComponent/Home_Main_Section/Home_Main_Section"
import Home_Packeg_Section from "./HomeComponent/Home_Packeg_Section/Home_Packeg_Section"


import Home_Prime_Section from "./HomeComponent/Home_Prime_Section/Home_Prime_Section"
import Home_Testiminial_Section from "./HomeComponent/Home_Testiminial_Section/Home_Testiminial_Section"
import Home_Video_Section from "./HomeComponent/Home_Video_Section/Home_Video_Section"


const Home = () => {
  return (
      <>


          <Home_Main_Section />
      <Home_Prime_Section />
      <Home_Packeg_Section/>

          <div className="bg-[#fffff0] bg-cover p-2">
          <Home_Inclusive_Section />
          </div>



          <Home_Video_Section/>

          <div className="bg-[#fffff0] bg-cover p-2">
          <Home_Testiminial_Section />
          </div>

          <Footer/>
      </>
  )
}

export default Home