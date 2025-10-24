import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import BannerRestaurant from '../../components/BannerRestaurant'
import ProductsListRestaurant from '../../components/ProductsListRestaurant'
import Food from '../../Models/Food'

// componente principal da página do restaurante
const Restaurant = () => {
  const { id } = useParams()
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    setFoods([
      {
        id: 1,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/images/pizza.png', // ✅ caminho corrigido
        infos: ['Italiana', '4 pessoas'],
        system: 'Tradicional',
        nota: 4.9
      },
      {
        id: 2,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/images/pizza.png',
        infos: ['Italiana', '3 pessoas'],
        system: 'Especial',
        nota: 4.8
      },
      {
        id: 3,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/images/pizza.png',
        infos: ['Italiana', '4 pessoas'],
        system: 'Tradicional',
        nota: 4.7
      },
      {
        id: 4,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/images/pizza.png',
        infos: ['Italiana', '4 pessoas'],
        system: 'Especial',
        nota: 4.6
      },
      {
        id: 5,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/images/pizza.png',
        infos: ['Italiana', '4 pessoas'],
        system: 'Tradicional',
        nota: 4.8
      },
      {
        id: 6,
        title: 'Pizza Marguerita',
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/images/pizza.png',
        infos: ['Italiana', '3 pessoas'],
        system: 'Tradicional',
        nota: 4.7
      }
    ])
  }, [id])

  return (
    <>
      <Header />
      <BannerRestaurant image="/images/apresentacao.png" />
      <div className="container">
        <ProductsListRestaurant title="" background="salmon" food={foods} />
      </div>
    </>
  )
}

export default Restaurant
