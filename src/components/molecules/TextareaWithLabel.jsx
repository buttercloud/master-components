import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
`;
const TextareaInput = styled.textarea`
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
  font-size: 1rem;
  font-family: ${(props) => props.fontFamily};
`;

const TextareaWithLabel = (props) => {
  const {
    label,
    placeholder,
    fontFamily,
    labelColor,
    value,
    setValue,
  } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const inputId = `${label}-${Math.random().toString().substring(10)}`;

  return (
    <Container>
      <Label
        htmlFor={inputId}
        fontFamily={fontFamily}
        color={labelColor}
      >
        {label}
      </Label>
      <TextareaInput
        id={inputId}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        fontFamily={fontFamily}
      />
    </Container>
  );
};

TextareaWithLabel.defaultProps = {
  placeholder: 'lorem ipsum',
  fontFamily: 'Public Sans, sans-serif',
  labelColor: '#000000',
};

TextareaWithLabel.propTypes = {
  /**
  * Label text.
  */
  label: PropTypes.string.isRequired,
  /**
  * Textarea placeholder.
  */
  placeholder: PropTypes.string,
  /**
  * Font family.
  */
  fontFamily: PropTypes.string,
  /**
  * Label color.
  */
  labelColor: PropTypes.string,
  /**
  * State variable that will get updated with setValue callback.
  */
  value: PropTypes.string.isRequired,
  /**
  * setState callback to update the value.
  */
  setValue: PropTypes.func.isRequired,
};

export default TextareaWithLabel;
