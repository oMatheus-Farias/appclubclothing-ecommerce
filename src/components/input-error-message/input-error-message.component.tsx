import { ReactNode } from 'react'

import { InputErrorMessageContainer } from './input-error-message.style'

interface InputErrorMessageProps {
  children: ReactNode
}

const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
