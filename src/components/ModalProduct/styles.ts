import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8); /* Fundo escuro igual Figma */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: ${cores.corSalmao};
  color: ${cores.branco};
  border-radius: 8px;
  padding: 24px;
  max-width: 640px;
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .description {
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .serving {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .add {
    background: ${cores.corDeFundoHome};
    color: ${cores.corSalmao};
    font-weight: bold;
    border: none;
    padding: 12px 0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;
    transition: 0.3s;

    &:hover {
      opacity: 0.9;
    }

    span {
      color: ${cores.corSalmao};
      font-weight: bold;
    }
  }

  .close {
    position: absolute;
    right: 12px;
    top: 8px;
    background: none;
    border: none;
    font-size: 28px;
    color: ${cores.branco};
    cursor: pointer;
  }
`
