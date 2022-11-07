import PropTypes from 'prop-types';
import React from 'react';

const CartIcon = (props) => {
  const { color, width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 26.433}
      height={height || 27.916}
      viewBox="0 0 26.433 27.916"
      // {...props}
    >
      <path
        data-name="Path 1515"
        d="M25.115 8.28a3.737 3.737 0 00-3.736-3.415h-2.5a5.723 5.723 0 00-11.317 0h-2.5A3.739 3.739 0 001.326 8.28l-1.31 15.6a3.734 3.734 0 003.736 4.032h18.932a3.733 3.733 0 003.731-4.028zM6.236 11.11h-1.94V9.183h1.935zm3.271-6.245a3.8 3.8 0 017.4 0zm12.2 6.245h-1.934V9.183h1.935z"
        fill={color || '#0c0c0c'}
      />
    </svg>
  );
};

CartIcon.defaultProps = {
  color: '#0c0c0c',
  width: 26.433,
  height: 27.916,
};

CartIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CartIcon;
