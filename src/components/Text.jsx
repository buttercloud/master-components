// @flow

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid lightgrey;
  border-radius: 15px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  display: flex;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: red;
  }
`;

const StyledText = styled.p``;

const Text = (props) => {
  return (
    <Container>
      <StyledText>{props.data.text}</StyledText>
    </Container>
  )
}

export default Text;

