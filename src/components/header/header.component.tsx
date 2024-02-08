import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'

const Header = () => {
  return (
    <header className='header-container'>
      <h2 className='header-title'>Club Clothing</h2>
      <div className='header-items'>
        <div className='header-item'>Explorar</div>
        <div className='header-item'>Login</div>
        <div className='header-item'>Criar conta</div>
        <div className='header-item'>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </div>
      </div>
    </header>
  )
}

export default Header
