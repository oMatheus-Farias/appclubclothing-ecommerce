import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './page/home/home.page'
import LoginPage from './page/login/login.page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
