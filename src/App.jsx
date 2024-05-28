import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Inicio from './pages/Inicio'


const App = () => {

  const [color] = useState("#eb8d04")
  document.body.style.backgroundColor = color

  return (
    <div className='bg-white border' fluid>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        </div> 
    </div>
  )
}

export default App