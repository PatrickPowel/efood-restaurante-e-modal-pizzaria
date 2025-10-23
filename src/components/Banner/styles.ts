import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 440px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${cores.corSalmao};
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    margin-top: 16px;
    max-width: 600px;
  }

  .container {
    margin-top: 24px;
  }
`

export const ImagemEfood = styled.div`
  width: 180px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`
