import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { JoinWaitlist } from './pages/JoinWaitlist'
import { SignupForm } from './pages/SignUp'
import { LoginForm } from './pages/Login'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/waitlist' element={<JoinWaitlist />} />
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
