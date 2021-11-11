import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledSpan,
  StyledImage,
  StyledParagraph,
  StyledLabel,
  StyledH1,
  StyledButton,
  StyledInput,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
  buttonType,
  inputType,
} from '../../../customPropTypes/customPropTypes';
import Hero2942Icon from './Hero2942.icon';

const Hero2942 = (props) => {
  const {
    backgroundf6fd03,
    h175afa3,
    pbef960,
    pb36313,
    span2c2d6e,
    spancdbb5d,
    span317b2f,
    span1af9e0,
    span9500ba,
    span8ed06f,
    label07ca4c,
    img50057a,
    button0a9d83,
    button2db5b2,
    buttona5c7ca,
    input496ef3,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundf6fd03"
      styles={backgroundf6fd03.styles}
      customProps={backgroundf6fd03}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <StyledH1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            id="h175afa3"
            styles={h175afa3.styles}
            customProps={h175afa3}
          >
            {h175afa3.text}
          </StyledH1>
          <StyledParagraph
            className="mb-8 leading-relaxed"
            id="pbef960"
            styles={pbef960.styles}
            customProps={pbef960}
          >
            {pbef960.text}
          </StyledParagraph>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <StyledLabel
                for="input496ef3"
                className="leading-7 text-sm text-gray-600"
                id="label07ca4c"
                styles={label07ca4c.styles}
                customProps={label07ca4c}
              >
                {label07ca4c.text}
              </StyledLabel>
              <StyledInput
                type="text"
                id="input496ef3"
                name={input496ef3.name}
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                styles={input496ef3.styles}
                placeholder={input496ef3.placeholder}
                maxlength={input496ef3.maxLength}
                minlength={input496ef3.minLength}
                required={input496ef3.required}
                value={input496ef3.value}
                onChange={input496ef3.onChange}
                customProps={input496ef3}
              />
            </div>
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="button0a9d83"
              styles={button0a9d83.styles}
              onClick={button0a9d83.onClick}
              customProps={button0a9d83}
            >
              {button0a9d83.text}
            </StyledButton>
          </div>
          <StyledParagraph
            className="text-sm mt-2 text-gray-500 mb-8 w-full"
            id="pb36313"
            styles={pb36313.styles}
            customProps={pb36313}
          >
            {pb36313.text}
          </StyledParagraph>
          <div className="flex lg:flex-row md:flex-col">
            <StyledButton
              className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
              id="button2db5b2"
              styles={button2db5b2.styles}
              onClick={button2db5b2.onClick}
              customProps={button2db5b2}
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
                id="span2c2d6e"
                styles={span2c2d6e.styles}
                customProps={span2c2d6e}
              >
                <StyledSpan
                  className="text-xs text-gray-600 mb-1"
                  id="spancdbb5d"
                  styles={spancdbb5d.styles}
                  customProps={spancdbb5d}
                >
                  GET IT ON
                </StyledSpan>
                <StyledSpan
                  className="title-font font-medium"
                  id="span317b2f"
                  styles={span317b2f.styles}
                  customProps={span317b2f}
                >
                  Google Play
                </StyledSpan>
              </StyledSpan>
            </StyledButton>
            <StyledButton
              className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none"
              id="buttona5c7ca"
              styles={buttona5c7ca.styles}
              onClick={buttona5c7ca.onClick}
              customProps={buttona5c7ca}
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
                id="span1af9e0"
                styles={span1af9e0.styles}
                customProps={span1af9e0}
              >
                <StyledSpan
                  className="text-xs text-gray-600 mb-1"
                  id="span9500ba"
                  styles={span9500ba.styles}
                  customProps={span9500ba}
                >
                  Download on the
                </StyledSpan>
                <StyledSpan
                  className="title-font font-medium"
                  id="span8ed06f"
                  styles={span8ed06f.styles}
                  customProps={span8ed06f}
                >
                  App Store
                </StyledSpan>
              </StyledSpan>
            </StyledButton>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <StyledImage
            className="object-cover object-center rounded"
            alt={img50057a.alt}
            src={img50057a.src}
            id="img50057a"
            styles={img50057a.styles}
            customProps={img50057a}
          />
        </div>
      </div>
    </StyledContainer>
  );
};

Hero2942.icon = Hero2942Icon;

Hero2942.defaultProps = {
  backgroundf6fd03: {
    styles: {},
  },
  h175afa3: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pbef960: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  pb36313: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  span2c2d6e: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spancdbb5d: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span317b2f: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span1af9e0: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span9500ba: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span8ed06f: {
    text: 'Lorem ipsum',
    styles: {},
  },
  label07ca4c: {
    text: 'Lorem ipsum',
    styles: {},
  },
  img50057a: {
    styles: {},
    src: 'https://dummyimage.com/720x600',
    alt: '',
  },
  button0a9d83: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button2db5b2: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttona5c7ca: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  input496ef3: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Hero2942.propTypes = {
  /**
   * Background prop for backgroundf6fd03.
   */
  backgroundf6fd03: backgroundType,
  /**
   * Text prop for h175afa3.
   */
  h175afa3: textType,
  /**
   * Text prop for pbef960.
   */
  pbef960: textType,
  /**
   * Text prop for pb36313.
   */
  pb36313: textType,
  /**
   * Text prop for span2c2d6e.
   */
  span2c2d6e: textType,
  /**
   * Text prop for spancdbb5d.
   */
  spancdbb5d: textType,
  /**
   * Text prop for span317b2f.
   */
  span317b2f: textType,
  /**
   * Text prop for span1af9e0.
   */
  span1af9e0: textType,
  /**
   * Text prop for span9500ba.
   */
  span9500ba: textType,
  /**
   * Text prop for span8ed06f.
   */
  span8ed06f: textType,
  /**
   * Text prop for label07ca4c.
   */
  label07ca4c: textType,
  /**
   * Image prop for img50057a.
   */
  img50057a: imageType,
  /**
   * Button prop for button0a9d83.
   */
  button0a9d83: buttonType,
  /**
   * Button prop for button2db5b2.
   */
  button2db5b2: buttonType,
  /**
   * Button prop for buttona5c7ca.
   */
  buttona5c7ca: buttonType,
  /**
   * Input prop for input496ef3.
   */
  input496ef3: inputType,
};

export default Hero2942;
