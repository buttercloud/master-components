import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import CartIcon from '../assets/CartIcon';

const Container = styled.div`
  background-color: transparent;
  position: sticky;
  top: 0;
`;
const Button = styled.button`
  background-color: transparent;
  border: 0;
  position: relative;
  &:active {
    transform: translateY(1px);
  }
`;
const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${(props) => props.position === 'bottom-left' && css`
    bottom: -7px;
    left: 0;
  `}
  ${(props) => props.position === 'bottom-right' && css`
    bottom: -7px;
    right: 0;
  `}
  ${(props) => props.position === 'top-left' && css`
    top: -7px;
    left: 0;
  `}
  ${(props) => props.position === 'top-right' && css`
    top: -7px;
    right: 0;
  `}
`;
const Number = styled.p`
  font-size: 0.7rem;
  margin: 0;
  color: ${(props) => props.color};
`;

/**
* Cart button
*/
const CartButton = (props) => {
  const {
    onClick,
    iconColor,
    badgeColor,
    badgeNumber,
    badgePosition,
    fontColor,
  } = props;

  return (
    <Container>
      <Button onClick={onClick}>
        <CartIcon color={iconColor} />
        {
          badgeNumber > 0 && (
            <Badge
              position={badgePosition}
              color={badgeColor}
            >
              <Number color={fontColor}>
                {badgeNumber}
              </Number>
            </Badge>
          )
        }
      </Button>
    </Container>
  );
};

CartButton.defaultProps = {
  iconColor: '#0c0c0c',
  badgeColor: '#0c0c0c',
  badgeNumber: 0,
  badgePosition: 'bottom-left',
  fontColor: '#fff',
};

CartButton.propTypes = {
  /**
  * Function to trigger when the button is clicked (to open the cart or something).
  */
  onClick: PropTypes.func.isRequired,
  /**
  * Cart icon color.
  */
  iconColor: PropTypes.string,
  /**
  * Notification badge color.
  */
  badgeColor: PropTypes.string,
  /**
  * Badge number (number of items in the cart).
  */
  badgeNumber: PropTypes.number,
  /**
  * Position of the notification badge.
  */
  badgePosition: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
  /**
  * Notification badge number color.
  */
  fontColor: PropTypes.string,
};

export default CartButton;
