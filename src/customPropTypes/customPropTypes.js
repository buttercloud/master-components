import PropTypes from 'prop-types';

const TextType = PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number,
  text: PropTypes.string,
});

const MoneyType = PropTypes.shape({
  cents: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  precision: PropTypes.string.isRequired,
});

const ImageType = PropTypes.shape({
  url: PropTypes.string,
  alt: PropTypes.string,
});

export default {
  TextType,
  MoneyType,
  ImageType,
};
