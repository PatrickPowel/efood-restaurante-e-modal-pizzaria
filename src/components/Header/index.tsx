import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import Logo from '../../assets/images/logo.png'
import Carrinho from '../../assets/images/carrinho.png'

const Header = () => {
  // 🔹 Lendo a quantidade de itens diretamente do Redux
  const cartCount = useSelector((state: RootState) => state.cart.items.length)

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

      {/* 🔹 Contador do carrinho dinâmico */}
      <LinkCart as={Link} to="/cart">
        {cartCount} - Produto{cartCount !== 1 ? 's' : ''}
        <img src={Carrinho} alt="carrinho de compras" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
