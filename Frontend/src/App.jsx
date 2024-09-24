import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Points from './Components/Points';
import Visit from './Components/Visit';
import About from './Components/About';
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Help from './Components/Help.jsx'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <div className='max-md:overflow-x-hidden'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* <Main/>
      <Points/>
      <Visit/>
      <Faq/> */}
      {/* <About/> */}
      <Footer/>
      </div>
    </>
  )
}

export default App
