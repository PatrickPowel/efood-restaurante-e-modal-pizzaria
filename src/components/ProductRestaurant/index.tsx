import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'
import Food from '../../Models/Food'

// 👇 importa tudo que vem do styles
import { Card, Descricao, Titulo, Infos, Nota, ButtonContainer } from './styles'

type Props = Food & {
  onSelect: (food: Food) => void
}

const ProductRestaurant = ({
  title,
  system,
  description,
  infos,
  image,
  nota,
  onSelect
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>{infos && infos.map((info) => <Tag key={info}>{info}</Tag>)}</Infos>
    <Nota>
      <span>{nota}</span>
      <img src={estrela} alt="estrela" />
    </Nota>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonContainer
      type="button"
      onClick={() =>
        onSelect({ title, system, description, infos, image, nota, id: 0 })
      }
    >
      ADICIONAR AO CARRINHO
    </ButtonContainer>
  </Card>
)

export default ProductRestaurant
