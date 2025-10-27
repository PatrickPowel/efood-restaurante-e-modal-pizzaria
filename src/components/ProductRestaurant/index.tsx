import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/carts'
import Food from '../../Models/Food'
import estrela from '../../assets/images/estrela.png'
import {
  Card,
  Titulo,
  Descricao,
  Infos,
  Nota,
  ButtonContainer
} from './styles'

type Props = {
  title: string
  system: string
  description: string
  infos: string[]
  image: string
  nota: number
  preco: number
  id: number
}

const ProductRestaurant = ({
  title,
  system,
  description,
  infos,
  image,
  nota,
  preco,
  id
}: Props) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    const product = new Food(id, title, description, image, infos, system, nota, preco)
    dispatch(addToCart(product))
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos && infos.map((info) => <span key={info}>{info}</span>)}
      </Infos>
      <Nota>
        <span>{nota.toFixed(1)}</span>
        <img src={estrela} alt="estrela" />
      </Nota>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>

      <ButtonContainer type="button" onClick={handleAdd}>
        Adicionar — R$ {preco.toFixed(2).replace('.', ',')}
      </ButtonContainer>
    </Card>
  )
}

export default ProductRestaurant
