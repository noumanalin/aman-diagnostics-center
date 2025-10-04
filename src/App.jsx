import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer" 
import AnimatedCursor from "./Components/AnimatedCursor"
import Header from "./Components/Header/Header"
import NotFound from "./Pages/NotFound/NotFound"
import GoToTopBtn from "./Components/GoToTopBtn"

const Location = lazy(() => import('./Pages/Location/Location'));



const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/location/:city" element={<Location />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      <AnimatedCursor/>
      <GoToTopBtn/>
    </>
  )
}

export default App