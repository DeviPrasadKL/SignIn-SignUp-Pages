import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import SignIn from './Components/SignIn'
import Main from './Components/Main'

function App() {

  return (
    <div>
      <Main/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
