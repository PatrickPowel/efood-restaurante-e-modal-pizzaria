import { Imagem, ImagemEfood } from './styles'

import bannerImg from '../../assets/images/VectorFundoCabecalho.png'
import bannerImgEfood from '../../assets/images/logo.png'
import Button from '../Button'

const BannerHome = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div>
      <ImagemEfood
        style={{ backgroundImage: `url(${bannerImgEfood})` }}
      ></ImagemEfood>
    </div>
    <div>
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </div>
    <div className="container"></div>
  </Imagem>
)

export default BannerHome
