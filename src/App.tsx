import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './page/home/home.page'
import LoginPage from './page/login/login.page'
import SignUpPage from './page/sign-up/sign-up.page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
