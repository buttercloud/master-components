import PropTypes from 'prop-types';

export const textType = PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  text: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
});

const { text, ...textStyles } = textType;

export const moneyType = PropTypes.shape({
  ...textStyles,
  cents: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  precision: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
});

export const imageType = PropTypes.shape({
  src: PropTypes.string,
  alt: PropTypes.string,
});

export const buttonType = PropTypes.shape({
  ...textType,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
});

export const backgroundType = PropTypes.shape({
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
});
