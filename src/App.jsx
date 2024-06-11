import {useState} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


const App = () => {

  const [color] = useState("#1b85bc")
  document.body.style.backgroundColor = color

  return (
    <div className='bg-white border' fluid>
      <div>
        <BrowserRouter>
          <Route path='/home' element={<Home/>}/>
        </BrowserRouter>
        </div> 
    </div>
  )
}

export default App