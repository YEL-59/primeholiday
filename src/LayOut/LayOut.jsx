import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"


const LayOut = () => {
  return (
    <>
    <ScrollToTop/>
    <Navbar />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    
    </>
  )
}

export default LayOut