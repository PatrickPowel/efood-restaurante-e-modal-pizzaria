import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  background-color: ${cores.corSalmao};
  border: 1px solid ${cores.corSalmao};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  color: ${cores.corSalmao};
  padding-bottom: 16px;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Nota = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 14px;
    font-weight: bold;
  }

  img {
    width: 18px;
  }
`

export const Titulo = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 16px;
  color: ${cores.branca};
`

export const Descricao = styled.p`
  font-size: 14px;
  margin: 0 16px 16px;
  line-height: 20px;
  color: ${cores.branca};
`
