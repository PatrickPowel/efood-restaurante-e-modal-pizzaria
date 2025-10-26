import { ModalOverlay, ModalContent } from './styles'
import Food from '../../Models/Food'

type Props = {
  isOpen: boolean
  onClose: () => void
  product: Food | null
  onAddToCart: (product: Food) => void
}

const ModalProduct = ({ isOpen, onClose, product, onAddToCart }: Props) => {
  if (!isOpen || !product) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <button className="close" onClick={onClose}>
          ×
        </button>

        <img src={product.image} alt={product.title} />
        <div className="info">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="serving">Serve: {product.infos.join(', ')}</p>
          <button
            className="add"
            onClick={() => {
              onAddToCart(product)
              onClose()
            }}
          >
            Adicionar ao carrinho — <span>R$ {product.nota.toFixed(2)}</span>
          </button>
        </div>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalProduct
