import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.corDeFundoHome : cores.corDeFundoHome};
  border: 0px;
  width: 1024px;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  justify-items: center;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
