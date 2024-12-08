import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"


const LayOut = () => {
  return (
    <>
    
    <Navbar />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    
    </>
  )
}

export default LayOut