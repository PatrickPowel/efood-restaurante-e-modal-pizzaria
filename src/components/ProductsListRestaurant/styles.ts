import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div<{ background: 'salmon' | 'black' }>`
  background-color: ${(props) =>
    props.background === 'salmon'
      ? cores.corDeFundoHome
      : cores.corDeFundoHome};
  padding: 64px 0; /* 🔹 mais espaço no topo e no final */
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* 🔹 mais flexível */
  gap: 40px; /* 🔹 espaço entre os cards */
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 1024px;
  max-width: 90%;
`
