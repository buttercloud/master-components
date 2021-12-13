import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledParagraph,
  StyledLabel,
  StyledH1,
  StyledH2,
  StyledButton,
  StyledInput,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
  inputType,
} from '../../../customPropTypes/customPropTypes';
import Cta9114Icon from './Cta9114.icon';

const Cta9114 = (props) => {
  const {
    background000021,
    h10f6d7d,
    h2136eeb,
    pffdd34,
    peb22c8,
    labelbce186,
    label2d23f8,
    button0f6d5b,
    input8a0ad7,
    inputd69ce5,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background000021"
      styles={background000021.styles}
      customProps={background000021}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <StyledH1
            className="title-font font-medium text-3xl text-gray-900"
            id="h10f6d7d"
            styles={h10f6d7d.styles}
            customProps={h10f6d7d}
          >
            {h10f6d7d.text}
          </StyledH1>
          <StyledParagraph
            className="leading-relaxed mt-4"
            id="pffdd34"
            styles={pffdd34.styles}
            customProps={pffdd34}
          >
            {pffdd34.text}
          </StyledParagraph>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <StyledH2
            className="text-gray-900 text-lg font-medium title-font mb-5"
            id="h2136eeb"
            styles={h2136eeb.styles}
            customProps={h2136eeb}
          >
            {h2136eeb.text}
          </StyledH2>
          <div className="relative mb-4">
            <StyledLabel
              for="input8a0ad7"
              className="leading-7 text-sm text-gray-600"
              id="labelbce186"
              styles={labelbce186.styles}
              customProps={labelbce186}
            >
              {labelbce186.text}
            </StyledLabel>
            <StyledInput
              type="text"
              id="input8a0ad7"
              name={input8a0ad7.name}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              styles={input8a0ad7.styles}
              placeholder={input8a0ad7.placeholder}
              maxlength={input8a0ad7.maxLength}
              minlength={input8a0ad7.minLength}
              required={input8a0ad7.required}
              value={input8a0ad7.value}
              onChange={input8a0ad7.onChange}
              customProps={input8a0ad7}
            />
          </div>
          <div className="relative mb-4">
            <StyledLabel
              for="inputd69ce5"
              className="leading-7 text-sm text-gray-600"
              id="label2d23f8"
              styles={label2d23f8.styles}
              customProps={label2d23f8}
            >
              {label2d23f8.text}
            </StyledLabel>
            <StyledInput
              type="email"
              id="inputd69ce5"
              name={inputd69ce5.name}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              styles={inputd69ce5.styles}
              placeholder={inputd69ce5.placeholder}
              maxlength={inputd69ce5.maxLength}
              minlength={inputd69ce5.minLength}
              required={inputd69ce5.required}
              value={inputd69ce5.value}
              onChange={inputd69ce5.onChange}
              customProps={inputd69ce5}
            />
          </div>
          <StyledButton
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            id="button0f6d5b"
            styles={button0f6d5b.styles}
            onClick={button0f6d5b.onClick}
            customProps={button0f6d5b}
          >
            {button0f6d5b.text}
          </StyledButton>
          <StyledParagraph
            className="text-xs text-gray-500 mt-3"
            id="peb22c8"
            styles={peb22c8.styles}
            customProps={peb22c8}
          >
            {peb22c8.text}
          </StyledParagraph>
        </div>
      </div>
    </StyledContainer>
  );
};

Cta9114.icon = Cta9114Icon;

Cta9114.defaultProps = {
  background000021: {
    styles: {},
  },
  h10f6d7d: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  h2136eeb: {
    text: 'Sign Up',
    styles: {},
  },
  pffdd34: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  peb22c8: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  labelbce186: {
    text: 'Full Name',
    styles: {},
  },
  label2d23f8: {
    text: 'Email',
    styles: {},
  },
  button0f6d5b: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  input8a0ad7: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
  inputd69ce5: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Cta9114.propTypes = {
  /**
   * Background prop for background000021.
   */
  background000021: backgroundType,
  /**
   * Text prop for h10f6d7d.
   */
  h10f6d7d: textType,
  /**
   * Text prop for h2136eeb.
   */
  h2136eeb: textType,
  /**
   * Text prop for pffdd34.
   */
  pffdd34: textType,
  /**
   * Text prop for peb22c8.
   */
  peb22c8: textType,
  /**
   * Text prop for labelbce186.
   */
  labelbce186: textType,
  /**
   * Text prop for label2d23f8.
   */
  label2d23f8: textType,
  /**
   * Button prop for button0f6d5b.
   */
  button0f6d5b: buttonType,
  /**
   * Input prop for input8a0ad7.
   */
  input8a0ad7: inputType,
  /**
   * Input prop for inputd69ce5.
   */
  inputd69ce5: inputType,
};

export default Cta9114;
