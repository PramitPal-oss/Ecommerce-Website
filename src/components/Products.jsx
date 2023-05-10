/** @format */
import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  align-items: center;
`;

function Products() {
  return (
    <Container>
      {popularProducts.map((el) => (
        <Product img={el.img} key={el.id} />
      ))}
    </Container>
  );
}

export default Products;
