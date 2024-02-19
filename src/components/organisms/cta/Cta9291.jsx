import React from 'react';

import {
  backgroundType,
  buttonType,
  inputType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledInput,
  StyledLabel,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Cta9291Icon from './Cta9291.icon';

const Cta9291 = (props) => {
  const {
    background0669b4,
    h119f9ee,
    pb670ca,
    labelc9b02d,
    labelbda33a,
    button36efa6,
    input99ee12,
    inputa5d615,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background0669b4"
      styles={background0669b4.styles}
      customProps={background0669b4}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            id="h119f9ee"
            styles={h119f9ee.styles}
            customProps={h119f9ee}
          >
            {h119f9ee.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="pb670ca"
            styles={pb670ca.styles}
            customProps={pb670ca}
          >
            {pb670ca.text}
          </StyledParagraph>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <StyledLabel
              for="full-name"
              className="leading-7 text-sm text-gray-600"
              id="labelc9b02d"
              styles={labelc9b02d.styles}
              customProps={labelc9b02d}
            >
              {labelc9b02d.text}
            </StyledLabel>
            <StyledInput
              type="text"
              id="input99ee12"
              name={input99ee12.name}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              styles={input99ee12.styles}
              placeholder={input99ee12.placeholder}
              maxlength={input99ee12.maxLength}
              minlength={input99ee12.minLength}
              required={input99ee12.required}
              value={input99ee12.value}
              onChange={input99ee12.onChange}
              customProps={input99ee12}
            />
          </div>
          <div className="relative flex-grow w-full">
            <StyledLabel
              for="email"
              className="leading-7 text-sm text-gray-600"
              id="labelbda33a"
              styles={labelbda33a.styles}
              customProps={labelbda33a}
            >
              {labelbda33a.text}
            </StyledLabel>
            <StyledInput
              type="email"
              id="inputa5d615"
              name={inputa5d615.name}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              styles={inputa5d615.styles}
              placeholder={inputa5d615.placeholder}
              maxlength={inputa5d615.maxLength}
              minlength={inputa5d615.minLength}
              required={inputa5d615.required}
              value={inputa5d615.value}
              onChange={inputa5d615.onChange}
              customProps={inputa5d615}
            />
          </div>
          <StyledButton
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            id="button36efa6"
            styles={button36efa6.styles}
            onClick={button36efa6.onClick}
            customProps={button36efa6}
          >
            {button36efa6.text}
          </StyledButton>
        </div>
      </div>
    </StyledContainer>
  );
};

Cta9291.icon = Cta9291Icon;

Cta9291.defaultProps = {
  background0669b4: {
    styles: {},
  },
  h119f9ee: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pb670ca: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  labelc9b02d: {
    text: 'Full Name',
    styles: {},
  },
  labelbda33a: {
    text: 'Email',
    styles: {},
  },
  button36efa6: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  input99ee12: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
  inputa5d615: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Cta9291.propTypes = {
  /**
   * Background prop for background0669b4.
   */
  background0669b4: backgroundType,
  /**
   * Text prop for h119f9ee.
   */
  h119f9ee: textType,
  /**
   * Text prop for pb670ca.
   */
  pb670ca: textType,
  /**
   * Text prop for labelc9b02d.
   */
  labelc9b02d: textType,
  /**
   * Text prop for labelbda33a.
   */
  labelbda33a: textType,
  /**
   * Button prop for button36efa6.
   */
  button36efa6: buttonType,
  /**
   * Input prop for input99ee12.
   */
  input99ee12: inputType,
  /**
   * Input prop for inputa5d615.
   */
  inputa5d615: inputType,
};

export default Cta9291;
