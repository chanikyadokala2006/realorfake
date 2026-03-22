import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import './App.css'
import { Toaster } from 'sonner'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
      <Toaster/>
    </>
  );
}

export default App
