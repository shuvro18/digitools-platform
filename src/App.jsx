import { Suspense } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Rating from './Components/Rating/Rating'
import ProductsSection from './Components/DataFetch/ProductsSection'
import { ToastContainer } from 'react-toastify'


const fetchData = fetch("data.json").then(res => res.json())

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>} >
        <ProductsSection fetchData={fetchData}></ProductsSection>
      </Suspense>



      {/* tostify */}
      <ToastContainer />
    </>
  )
}

export default App
