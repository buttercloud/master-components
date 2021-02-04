// @flow

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgrey;
  border-radius: 15px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const Products = (props) => {
  return (
    <Container>
      <p>TODO add list of products in containers here</p>
    </Container>
  )
};

export default Products;
