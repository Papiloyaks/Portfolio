import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Services from './Components/Services'
import Form from './Components/Form'
import Name from './Components/Name'
import Aos from 'aos'
import 'aos/dist/aos.css'




function App() {
  useEffect(() => {
   Aos.init()
  }, [])
  

  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  

  return (
    
    <>
    <div>
    <Navbar/>
    <ul className='lg:hidden sm:block'>
      <li className='w-screen text-white bg-pink-900 top-0 p-3 fixed z-[10000]'>
        <FaBars onClick={toggleIsOpen}/>
      </li>
    </ul>
    {isOpen && <Sidebar handleClose={toggleIsOpen}/>}
    <Home/>
    <Skills/>
    <Project/>
    <Services/>
    <Form/>
    <Name/>
    </div>
    </>
  )
}

export default App
