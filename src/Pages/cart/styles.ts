import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  padding: 20px;

  h1 {
    color: #e66767;
    margin-bottom: 32px;
    text-align: center;
  }

  .finalizar {
    display: block;
    margin: 40px auto 0;
    background-color: #e66767;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 16px 40px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #cf5c5c;
    }
  }
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff0f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }

  div {
    flex: 1;
    margin-left: 16px;

    h3 {
      color: #e66767;
      margin-bottom: 8px;
    }

    p {
      color: #555;
      font-size: 14px;
      margin-bottom: 6px;
    }

    strong {
      color: #000;
    }
  }

  button {
    background-color: transparent;
    border: 2px solid #e66767;
    color: #e66767;
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #e66767;
      color: #fff;
    }
  }
`

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  font-size: 18px;

  p {
    font-weight: bold;
    color: #333;
  }

  strong {
    font-size: 20px;
    color: #e66767;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #555;

  h2 {
    color: #e66767;
    margin-bottom: 16px;
  }
`
