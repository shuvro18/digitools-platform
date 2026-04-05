import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Rating from './Components/Rating/Rating'
import ProductsSection from './Components/DataFetch/ProductsSection'
import { ToastContainer } from 'react-toastify'
import NavBar from './Components/Navbar/NavBar'
import GetStarted from './Components/getStarted/GetStarted'
import Pricing from './Components/SimplePricing/Pricing'
import TransForm from './Components/TransFormSection/TransForm'
import Footer from './Components/footer/Footer'



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

      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <TransForm></TransForm>
      <Footer></Footer>



      {/* tostify */}
      <ToastContainer />
    </>
  )
}

export default App
