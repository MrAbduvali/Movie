import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import Home from './Components/Pages/Home'
import Movies from './Components/Pages/Movies'
import About from './Components/Pages/About'
import Series from './Components/Pages/Series'

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
