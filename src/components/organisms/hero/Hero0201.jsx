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
import Hero0201Icon from './Hero0201.icon';

const Hero0201 = (props) => {
  const {
    background9d3d83,
    h19a2493,
    p87a587,
    p84073b,
    spane59038,
    spanddeb95,
    span38c4bf,
    span9bf866,
    span9d7ba4,
    spana0a652,
    label5a53a1,
    img5c295e,
    button50133a,
    button1209c1,
    buttone2da1d,
    input09f303,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background9d3d83"
      styles={background9d3d83.styles}
      customProps={background9d3d83}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <StyledImage
            className="object-cover object-center rounded"
            alt={img5c295e.alt}
            src={img5c295e.src}
            id="img5c295e"
            styles={img5c295e.styles}
            customProps={img5c295e}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <StyledH1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            id="h19a2493"
            styles={h19a2493.styles}
            customProps={h19a2493}
          >
            {h19a2493.text}
          </StyledH1>
          <StyledParagraph
            className="mb-8 leading-relaxed"
            id="p87a587"
            styles={p87a587.styles}
            customProps={p87a587}
          >
            {p87a587.text}
          </StyledParagraph>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <StyledLabel
                for="input09f303"
                className="leading-7 text-sm text-gray-600"
                id="label5a53a1"
                styles={label5a53a1.styles}
                customProps={label5a53a1}
              >
                {label5a53a1.text}
              </StyledLabel>
              <StyledInput
                type="text"
                id="input09f303"
                name={input09f303.name}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                styles={input09f303.styles}
                placeholder={input09f303.placeholder}
                maxlength={input09f303.maxLength}
                minlength={input09f303.minLength}
                required={input09f303.required}
                value={input09f303.value}
                onChange={input09f303.onChange}
                customProps={input09f303}
              />
            </div>
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="button50133a"
              styles={button50133a.styles}
              onClick={button50133a.onClick}
              customProps={button50133a}
            >
              {button50133a.text}
            </StyledButton>
          </div>
          <StyledParagraph
            className="text-sm mt-2 text-gray-500 mb-8 w-full"
            id="p84073b"
            styles={p84073b.styles}
            customProps={p84073b}
          >
            {p84073b.text}
          </StyledParagraph>
          <div className="flex lg:flex-row md:flex-col">
            <StyledButton
              className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
              id="button1209c1"
              styles={button1209c1.styles}
              onClick={button1209c1.onClick}
              customProps={button1209c1}
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
                id="spane59038"
                styles={spane59038.styles}
                customProps={spane59038}
              >
                <StyledSpan
                  className="text-xs text-gray-600 mb-1"
                  id="spanddeb95"
                  styles={spanddeb95.styles}
                  customProps={spanddeb95}
                >
                  GET IT ON
                </StyledSpan>
                <StyledSpan
                  className="title-font font-medium"
                  id="span38c4bf"
                  styles={span38c4bf.styles}
                  customProps={span38c4bf}
                >
                  Google Play
                </StyledSpan>
              </StyledSpan>
            </StyledButton>
            <StyledButton
              className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none"
              id="buttone2da1d"
              styles={buttone2da1d.styles}
              onClick={buttone2da1d.onClick}
              customProps={buttone2da1d}
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
                id="span9bf866"
                styles={span9bf866.styles}
                customProps={span9bf866}
              >
                <StyledSpan
                  className="text-xs text-gray-600 mb-1"
                  id="span9d7ba4"
                  styles={span9d7ba4.styles}
                  customProps={span9d7ba4}
                >
                  Download on the
                </StyledSpan>
                <StyledSpan
                  className="title-font font-medium"
                  id="spana0a652"
                  styles={spana0a652.styles}
                  customProps={spana0a652}
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

Hero0201.icon = Hero0201Icon;

Hero0201.defaultProps = {
  background9d3d83: {
    styles: {},
  },
  h19a2493: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p87a587: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  p84073b: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  spane59038: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spanddeb95: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span38c4bf: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span9bf866: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span9d7ba4: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spana0a652: {
    text: 'Lorem ipsum',
    styles: {},
  },
  label5a53a1: {
    text: 'Lorem ipsum',
    styles: {},
  },
  img5c295e: {
    styles: {},
    src: 'https://dummyimage.com/720x600',
    alt: '',
  },
  button50133a: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button1209c1: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttone2da1d: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  input09f303: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Hero0201.propTypes = {
  /**
   * Background prop for background9d3d83.
   */
  background9d3d83: backgroundType,
  /**
   * Text prop for h19a2493.
   */
  h19a2493: textType,
  /**
   * Text prop for p87a587.
   */
  p87a587: textType,
  /**
   * Text prop for p84073b.
   */
  p84073b: textType,
  /**
   * Text prop for spane59038.
   */
  spane59038: textType,
  /**
   * Text prop for spanddeb95.
   */
  spanddeb95: textType,
  /**
   * Text prop for span38c4bf.
   */
  span38c4bf: textType,
  /**
   * Text prop for span9bf866.
   */
  span9bf866: textType,
  /**
   * Text prop for span9d7ba4.
   */
  span9d7ba4: textType,
  /**
   * Text prop for spana0a652.
   */
  spana0a652: textType,
  /**
   * Text prop for label5a53a1.
   */
  label5a53a1: textType,
  /**
   * Image prop for img5c295e.
   */
  img5c295e: imageType,
  /**
   * Button prop for button50133a.
   */
  button50133a: buttonType,
  /**
   * Button prop for button1209c1.
   */
  button1209c1: buttonType,
  /**
   * Button prop for buttone2da1d.
   */
  buttone2da1d: buttonType,
  /**
   * Input prop for input09f303.
   */
  input09f303: inputType,
};

export default Hero0201;
