import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledH1,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Cta5887Icon from './Cta5887.icon';

const Cta5887 = (props) => {
  const { backgroundd12223, h157d475, button569091 } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundd12223"
      styles={backgroundd12223.styles}
      customProps={backgroundd12223}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <StyledH1
            className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
            id="h157d475"
            styles={h157d475.styles}
            customProps={h157d475}
          >
            {h157d475.text}
          </StyledH1>
          <StyledButton
            className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
            id="button569091"
            styles={button569091.styles}
            onClick={button569091.onClick}
            customProps={button569091}
          >
            {button569091.text}
          </StyledButton>
        </div>
      </div>
    </StyledContainer>
  );
};

Cta5887.icon = Cta5887Icon;

Cta5887.defaultProps = {
  backgroundd12223: {
    styles: {},
  },
  h157d475: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  button569091: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
};

Cta5887.propTypes = {
  /**
   * Background prop for backgroundd12223.
   */
  backgroundd12223: backgroundType,
  /**
   * Text prop for h157d475.
   */
  h157d475: textType,
  /**
   * Button prop for button569091.
   */
  button569091: buttonType,
};

export default Cta5887;
