import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

import { BsGoogle } from 'react-icons/bs'

const LoginPage = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* Email Input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password Input */}</LoginInputContainer>

          {/* Button */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
