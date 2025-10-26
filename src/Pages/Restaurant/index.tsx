import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import BannerRestaurant from '../../components/BannerRestaurant'
import ProductsListRestaurant from '../../components/ProductsListRestaurant'
import ModalProduct from '../../components/ModalProduct'
import Food from '../../Models/Food'

// 👇 Adicione logo aqui
type RestaurantData = {
  id: number
  titulo: string
  capa: string
  cardapio: Food[]
}

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantData | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Food | null>(null)
  const [cart, setCart] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const foods: Food[] = data.cardapio.map((item: any) => ({
          id: item.id,
          title: item.nome, // 👈 traduzido da API
          description: item.descricao,
          image: item.foto,
          infos: [data.tipo, item.porcao],
          system: 'Tradicional',
          nota: data.avaliacao
        }))

        setRestaurant({
          id: data.id,
          titulo: data.titulo,
          capa: data.capa,
          cardapio: foods
        })

        setLoading(false)
      })
  }, [id])

  const handleAddToCart = (product: Food) => {
    const updatedCart = [...cart, product]
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  if (loading) return <p>Carregando...</p>
  if (!restaurant) return <p>Restaurante não encontrado.</p>

  return (
    <>
      <Header />
      <BannerRestaurant image={restaurant.capa} />
      <div className="container">
        <ProductsListRestaurant
          title=""
          background="salmon"
          food={restaurant.cardapio}
          onSelectProduct={setSelectedProduct}
        />
      </div>

      <ModalProduct
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </>
  )
}

export default Restaurant
