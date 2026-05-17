import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './webpages/Home'
import Writing from './webpages/Writing'
import Photography from './webpages/Photography'
import Projects from './webpages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}