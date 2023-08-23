import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import SignIn from './Components/SignIn'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
