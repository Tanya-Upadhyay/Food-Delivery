
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
     
      
      
      
      <Router>
        <Routes>
          <Route path='/menu' element={<Home/>}></Route>
          <Route path='/' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
