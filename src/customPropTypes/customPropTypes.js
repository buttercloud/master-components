import PropTypes from 'prop-types';

export const textType = PropTypes.shape({
  text: PropTypes.string,
  styles: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  }),
});

const { text, ...textStyles } = textType;

export const moneyType = PropTypes.shape({
  cents: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  precision: PropTypes.number.isRequired,
  styles: PropTypes.shape({
    ...textStyles,
    backgroundColor: PropTypes.string,
  }),
});

export const imageType = PropTypes.shape({
  src: PropTypes.string,
  alt: PropTypes.string,
  styles: PropTypes.shape({}),
});

export const buttonType = PropTypes.shape({
  ...textType,
  styles: PropTypes.shape({
    ...textStyles,
    backgroundColor: PropTypes.string,
  }),
  onClick: PropTypes.func,
});

export const backgroundType = PropTypes.shape({
  styles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string,
  }),
});

export const textareaType = PropTypes.shape({
  styles: PropTypes.shape({
    ...textStyles,
  }),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  required: PropTypes.bool,
});

export const inputType = PropTypes.shape({
  styles: PropTypes.shape({
    ...textStyles,
  }),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  required: PropTypes.bool,
});
