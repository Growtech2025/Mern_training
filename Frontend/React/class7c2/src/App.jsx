import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Admin from './pages/Admin'
import User from './pages/User'
const App = () => {
  return (
    <Router>  
    <div>
      <Routes>  
      <Route path="/" element={<Admin/>} />
      <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App