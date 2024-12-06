import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';

import AboutUs from './Pages/AboutUs/AboutUs';
import TearmsandCondition from './Pages/TearmsandCondition/TearmsandCondition';
import Privacy from './Pages/Privacy/Privacy';
import Cancellation from './Pages/Cancelation/Privacy';
import Oman from './Pages/Oman/Oman';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/terms" element={<TearmsandCondition />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cancel" element={<Cancellation />} />


        <Route path="/destination/:id" element={<Oman />} />
      </Routes>


    </>
  )
}

export default App