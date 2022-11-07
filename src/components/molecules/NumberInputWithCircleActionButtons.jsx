import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const NumberInput = styled.input.attrs({ type: 'number' })`
  appearance: textfield;
  width: 35px;
  height: 35px;
  text-align: center;
  border: 0px;
  border-bottom: 1px solid;
  padding: 0;
`;
const Button = styled.button`
  padding: 0;
  width: 34px;
  height: 34px;
  margin: 10px 5px;
  border-radius: 17px;
  cursor: pointer;
  border: 1px solid black;
  background-color: black;

  &:active {
    transform: ${(props) => (props.disabled ? null : 'translateY(1px)')};
  }
  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
  }
`;
const ActionButtonText = styled.p`
  margin: 0;
  padding: 0;
  color: white;
`;

const NumberInputWithCircleActionButtons = (props) => {
  const {
    value,
    setValue,
    min,
    max,
  } = props;

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    if (newValue > max) return setValue(max);
    if (newValue < min) return setValue(min);

    return setValue(newValue);
  };

  const handleIncreasing = () => {
    const newValue = (parseInt(value, 10) + 1) || null;
    setValue(newValue ?? 0);
  };

  const handleDecreasing = () => {
    const newValue = (parseInt(value, 10) - 1) || null;
    setValue(newValue ?? 0);
  };

  return (
    <Container>
      <Button
        onClick={handleDecreasing}
        disabled={value <= min}
      >
        <ActionButtonText>-</ActionButtonText>
      </Button>
      <NumberInput
        value={value}
        max={max}
        min={min}
        onChange={handleChange}
      />
      <Button
        onClick={handleIncreasing}
        disabled={value >= max}
      >
        <ActionButtonText>+</ActionButtonText>
      </Button>
    </Container>
  );
};

NumberInputWithCircleActionButtons.defaultProps = {
  min: 1,
  max: 99,
};

NumberInputWithCircleActionButtons.propTypes = {
  /**
  * State variable that will get updated with setValue callback.
  */
  value: PropTypes.string.isRequired,
  /**
  * setState callback to update the value.
  */
  setValue: PropTypes.func.isRequired,
  /**
  * Minimum valid number.
  */
  min: PropTypes.number,
  /**
  * Maximum valid number.
  */
  max: PropTypes.number,
};

export default NumberInputWithCircleActionButtons;
