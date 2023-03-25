import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
