import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import Logo from '../../assets/images/logo.png'
import Carrinho from '../../assets/images/carrinho.png'

const Header = () => {
  const [cartCount, setCartCount] = useState(0)
  const location = useLocation()

  // 🔹 Atualiza contador sempre que a rota muda
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      const items = JSON.parse(savedCart)
      setCartCount(items.length)
    } else {
      setCartCount(0)
    }
  }, [location]) // recarrega ao mudar de página

  return (
    <HeaderBar>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
        </Links>
      </nav>

      <Link to="/">
        <img src={Logo} alt="logo efood" />
      </Link>

      <LinkCart as={Link} to="/cart">
        {cartCount} - Produto{cartCount !== 1 ? 's' : ''}
        <img src={Carrinho} alt="carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
