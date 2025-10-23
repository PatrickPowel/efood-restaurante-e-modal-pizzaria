import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button'
import { Card, Descricao, Titulo, Infos, Nota } from './styles'

type Props = {
  title: string
  system: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const Product = ({ title, system, description, infos, image, nota }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Nota>
      <span>{nota}</span>
      <img src={estrela} alt="estrela" />
    </Nota>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button" to="/produto" title="">
      {system}
    </Button>
  </Card>
)

export default Product
