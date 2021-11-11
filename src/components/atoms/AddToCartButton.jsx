import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartIcon from '../assets/CartIcon';
import { textType } from '../../customPropTypes/customPropTypes';

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  padding: 15px 20px;
  border: 0;
  &:active {
    transform: translateY(1px);
  }
`;
const Label = styled.p`
  margin: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 15px;
`;

const AddToCartButton = (props) => {
  const {
    label,
    color,
    fontSize,
    cartIconIsVisible,
    cartIconColor,
    backgroundColor,
    addToCart,
  } = props;

  return (
    <Container
      color={backgroundColor}
      onClick={addToCart}
    >
      <Label color={color} fontSize={fontSize}>
        {label?.text}
      </Label>
      {
        cartIconIsVisible && (
          <IconContainer>
            <CartIcon color={cartIconColor} width={20} height={25} />
          </IconContainer>
        )
      }
    </Container>
  );
};

AddToCartButton.defaultProps = {
  label: 'Add to Cart',
  cartIconIsVisible: true,
  fontSize: 1.1,
  color: '#fff',
  cartIconColor: '#fff',
  backgroundColor: '#000',
};

AddToCartButton.propTypes = {
  /**
  * A method to add the current item to the cart.
  */
  addToCart: PropTypes.func.isRequired,
  /**
  * Text on the button.
  */
  label: textType,
  /**
  * Show/hide icon on the button
  */
  cartIconIsVisible: PropTypes.bool,
  /**
  * Label font size in rem.
  */
  fontSize: PropTypes.number,
  /**
  * Color of the button label
  */
  color: PropTypes.string,
  /**
  * Cart Icon color
  */
  cartIconColor: PropTypes.string,
  /**
  * Color of the button.
  */
  backgroundColor: PropTypes.string,
};

export default AddToCartButton;
