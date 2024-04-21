import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Liked from './pages/liked/Liked'
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Liked/>}/>
    </Routes>
    </>
  )
}

export default App
