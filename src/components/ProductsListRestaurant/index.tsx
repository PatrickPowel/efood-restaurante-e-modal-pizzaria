import Food from '../../Models/Food'
import ProductRestaurant from '../ProductRestaurant'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'salmon' | 'black'
  food: Food[]
  onSelectProduct: (product: Food) => void // ✅ agora aceita instância da classe Food
}

const ProductsListRestaurant = ({
  title,
  background,
  food,
  onSelectProduct
}: Props) => (
  <Container background={background}>
    <div className="container">
      {title && <h2>{title}</h2>}
      <List>
        {food &&
          food.map((item) => (
            <ProductRestaurant
              key={item.id}
              id={item.id} // 👈 adiciona essa linha
              title={item.title}
              description={item.description}
              image={item.image}
              infos={item.infos || []}
              system={item.system}
              nota={item.nota}
              onSelect={onSelectProduct}
            />
          ))}
      </List>
    </div>
  </Container>
)

export default ProductsListRestaurant
