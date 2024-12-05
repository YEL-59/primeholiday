import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';

import AboutUs from './Pages/AboutUs/AboutUs';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>


    </>
  )
}

export default App