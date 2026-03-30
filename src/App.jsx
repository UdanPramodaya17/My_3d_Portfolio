import React from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home,About,Projects,Contact} from './pages'

function App() {
  return (
    <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar/>

                <Routes>
                  
                    <Route path='/' element={<h1><Home/></h1>} />
                    <Route path='/about' element={<h1><About/></h1>} />
                    <Route path='/projects' element={<h1><Projects/></h1>} />
                    <Route path='/contact' element={<h1><Contact/></h1>} />
                </Routes>
            </Router>
    </main>
  )
}

export default App
