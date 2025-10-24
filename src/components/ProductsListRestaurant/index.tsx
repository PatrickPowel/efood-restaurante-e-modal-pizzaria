import Food from '../../Models/Food'
import ProductRestaurant from '../ProductRestaurant'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'salmon' | 'black'
  food: Food[]
}

const ProductsListRestaurant = ({ title, background, food }: Props) => (
  <Container background={background}>
    <div className="container">
      {title && <h2>{title}</h2>}
      <List>
        {food.map((item) => (
          <ProductRestaurant
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            infos={item.infos}
            system={item.system}
            nota={item.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsListRestaurant
