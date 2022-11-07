import React from 'react';

import {
  backgroundType,
  buttonType,
  imageType,
  inputType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Hero4677Icon from './Hero4677.icon';

const Hero4677 = (props) => {
  const {
    background87fd47,
    h189b1ce,
    pb47bb6,
    pe5da35,
    span56d73c,
    spande13e5,
    span8ab2c9,
    span7d6831,
    span966409,
    spanf58547,
    labela6a657,
    img02a586,
    buttonbd0c6a,
    buttona3222d,
    buttondd0376,
    inputdc6b0b,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background87fd47"
      styles={background87fd47.styles}
      customProps={background87fd47}
    >
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <StyledImage
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={img02a586.alt}
          src={img02a586.src}
          id="img02a586"
          styles={img02a586.styles}
          customProps={img02a586}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <StyledH1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            id="h189b1ce"
            styles={h189b1ce.styles}
            customProps={h189b1ce}
          >
            {h189b1ce.text}
          </StyledH1>
          <StyledParagraph
            className="mb-8 leading-relaxed"
            id="pb47bb6"
            styles={pb47bb6.styles}
            customProps={pb47bb6}
          >
            {pb47bb6.text}
          </StyledParagraph>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <StyledLabel
                for="hero-field"
                className="leading-7 text-sm text-gray-600"
                id="labela6a657"
                styles={labela6a657.styles}
                customProps={labela6a657}
              >
                {labela6a657.text}
              </StyledLabel>
              <StyledInput
                type="text"
                id="inputdc6b0b"
                name="{inputdc6b0b.name}"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                styles={inputdc6b0b.styles}
                placeholder={inputdc6b0b.placeholder}
                maxlength={inputdc6b0b.maxLength}
                minlength={inputdc6b0b.minLength}
                required={inputdc6b0b.required}
                value={inputdc6b0b.value}
                onChange={inputdc6b0b.onChange}
                customProps={inputdc6b0b}
              />
            </div>
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="buttonbd0c6a"
              styles={buttonbd0c6a.styles}
              onClick={buttonbd0c6a.onClick}
              customProps={buttonbd0c6a}
            >
              {buttonbd0c6a.text}
            </StyledButton>
          </div>
          <StyledParagraph
            className="text-sm mt-2 text-gray-500 mb-8 w-full"
            id="pe5da35"
            styles={pe5da35.styles}
            customProps={pe5da35}
          >
            {pe5da35.text}
          </StyledParagraph>
          <div className="flex">
            <StyledButton
              className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
              id="buttona3222d"
              styles={buttona3222d.styles}
              onClick={buttona3222d.onClick}
              customProps={buttona3222d}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
              </svg>
              <StyledSpan
                className="ml-4 flex items-start flex-col leading-none"
                id="span56d73c"
                styles={span56d73c.styles}
                customProps={span56d73c}
              >
                <StyledSpan
                  className="text-xs text-gray-600 mb-1"
                  id="spande13e5"
                  styles={spande13e5.styles}
                  customProps={spande13e5}
                >
                  GET IT ON
                </StyledSpan>
                <StyledSpan
                  className="title-font font-medium"
                  id="span8ab2c9"
                  styles={span8ab2c9.styles}
                  customProps={span8ab2c9}
                >
                  Google Play
                </StyledSpan>
              </StyledSpan>
            </StyledButton>
            <StyledButton
              className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none"
              id="buttondd0376"
              styles={buttondd0376.styles}
              onClick={buttondd0376.onClick}
              customProps={buttondd0376}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
              </svg>
              <StyledSpan
                className="ml-4 flex items-start flex-col leading-none"
                id="span7d6831"
                styles={span7d6831.styles}
                customProps={span7d6831}
              >
                <StyledSpan
                  className="text-xs text-gray-600 mb-1"
                  id="span966409"
                  styles={span966409.styles}
                  customProps={span966409}
                >
                  Download on the
                </StyledSpan>
                <StyledSpan
                  className="title-font font-medium"
                  id="spanf58547"
                  styles={spanf58547.styles}
                  customProps={spanf58547}
                >
                  App Store
                </StyledSpan>
              </StyledSpan>
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Hero4677.icon = Hero4677Icon;

Hero4677.defaultProps = {
  background87fd47: {
    styles: {},
  },
  h189b1ce: {
    text: 'Lorem ipsum',
    styles: {},
  },
  pb47bb6: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  pe5da35: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  span56d73c: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spande13e5: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span8ab2c9: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span7d6831: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span966409: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spanf58547: {
    text: 'Lorem ipsum',
    styles: {},
  },
  labela6a657: {
    text: 'Lorem ipsum',
    styles: {},
  },
  img02a586: {
    styles: {},
    src: 'https://dummyimage.com/720x600',
    alt: '',
  },
  buttonbd0c6a: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttona3222d: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttondd0376: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  inputdc6b0b: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Hero4677.propTypes = {
  /**
   * Background prop for background87fd47.
   */
  background87fd47: backgroundType,
  /**
   * Text prop for h189b1ce.
   */
  h189b1ce: textType,
  /**
   * Text prop for pb47bb6.
   */
  pb47bb6: textType,
  /**
   * Text prop for pe5da35.
   */
  pe5da35: textType,
  /**
   * Text prop for span56d73c.
   */
  span56d73c: textType,
  /**
   * Text prop for spande13e5.
   */
  spande13e5: textType,
  /**
   * Text prop for span8ab2c9.
   */
  span8ab2c9: textType,
  /**
   * Text prop for span7d6831.
   */
  span7d6831: textType,
  /**
   * Text prop for span966409.
   */
  span966409: textType,
  /**
   * Text prop for spanf58547.
   */
  spanf58547: textType,
  /**
   * Text prop for labela6a657.
   */
  labela6a657: textType,
  /**
   * Image prop for img02a586.
   */
  img02a586: imageType,
  /**
   * Button prop for buttonbd0c6a.
   */
  buttonbd0c6a: buttonType,
  /**
   * Button prop for buttona3222d.
   */
  buttona3222d: buttonType,
  /**
   * Button prop for buttondd0376.
   */
  buttondd0376: buttonType,
  /**
   * Input prop for inputdc6b0b.
   */
  inputdc6b0b: inputType,
};

export default Hero4677;
