import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
const App = () => {
  return <BrowserRouter>
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/SignIn' element={<SignIn />} />
<Route path='/SignOut' element={<SignUp />} />
<Route path='/Profile' element={<Profile />} />
<Route path='/About' element={<About />} />

  </Routes>
  
  </BrowserRouter>
}

export default App;