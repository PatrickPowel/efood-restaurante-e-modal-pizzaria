import { Container, SocialLinks, FooterText, Logo } from './styles'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const logo = '/logo.png'

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt="efood" />
      <SocialLinks>
        <SocialLinks>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
        </SocialLinks>
      </SocialLinks>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </Container>
  )
}

export default Footer
