import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, clearCart } from '../../store/reducers/carts'
import Header from '../../components/Header'
import { Container, CartItem, TotalSection, EmptyCart } from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  // Soma total dos preços
  const total = cartItems.reduce((sum, item) => sum + (item.preco || 0), 0)

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <EmptyCart>
          <h2>Seu carrinho está vazio 😕</h2>
          <p>Adicione alguns produtos deliciosos e volte aqui!</p>
        </EmptyCart>
      </>
    )
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Seu Carrinho</h1>

        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>R$ {item.preco?.toFixed(2).replace('.', ',')}</strong>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
          </CartItem>
        ))}

        <TotalSection>
          <p>Total:</p>
          <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
        </TotalSection>

        <button
          className="finalizar"
          onClick={() => {
            alert('Pedido finalizado com sucesso! 🍕')
            dispatch(clearCart())
          }}
        >
          Finalizar Pedido
        </button>
      </Container>
    </>
  )
}

export default Cart
