import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  return (
    <HeaderContainer>
      <HeaderTitle>Club Clothing</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handleHomeClick}>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignUpClick}>Criar conta</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
