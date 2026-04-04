import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Rating from './Components/Rating/Rating'
import ProductsSection from './Components/DataFetch/ProductsSection'
import { ToastContainer } from 'react-toastify'
import NavBar from './Components/Navbar/NavBar'



const fetchData = fetch("data.json").then(res => res.json())

function App() {

  const [selectCart, setSelectCart] = useState([])


  return (
    <>
      <NavBar selectCart={selectCart}></NavBar>
      <Hero></Hero>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>} >
        <ProductsSection selectCart={selectCart} setSelectCart={setSelectCart} fetchData={fetchData}></ProductsSection>
      </Suspense>



      {/* tostify */}
      <ToastContainer />
    </>
  )
}

export default App
