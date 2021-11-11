import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledSpan,
  StyledH1,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Cta0369Icon from './Cta0369.icon';

const Cta0369 = (props) => {
  const {
    background11b747,
    h15f122e,
    h21f0640,
    span95b5fa,
    spandfa2c2,
    spanceaa97,
    span362101,
    spanf0e25c,
    spand6f0d3,
    button1b3134,
    buttonc11708,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background11b747"
      styles={background11b747.styles}
      customProps={background11b747}
    >
      <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <StyledH2
            className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
            id="h21f0640"
            styles={h21f0640.styles}
            customProps={h21f0640}
          >
            {h21f0640.text}
          </StyledH2>
          <StyledH1
            className="md:text-3xl text-2xl font-medium title-font text-gray-900"
            id="h15f122e"
            styles={h15f122e.styles}
            customProps={h15f122e}
          >
            {h15f122e.text}
          </StyledH1>
        </div>
        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <StyledButton
            className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
            id="button1b3134"
            styles={button1b3134.styles}
            onClick={button1b3134.onClick}
            customProps={button1b3134}
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
              id="span95b5fa"
              styles={span95b5fa.styles}
              customProps={span95b5fa}
            >
              <StyledSpan
                className="text-xs text-gray-600 mb-1"
                id="spandfa2c2"
                styles={spandfa2c2.styles}
                customProps={spandfa2c2}
              >
                GET IT ON
              </StyledSpan>
              <StyledSpan
                className="title-font font-medium"
                id="spanceaa97"
                styles={spanceaa97.styles}
                customProps={spanceaa97}
              >
                Google Play
              </StyledSpan>
            </StyledSpan>
          </StyledButton>
          <StyledButton
            className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
            id="buttonc11708"
            styles={buttonc11708.styles}
            onClick={buttonc11708.onClick}
            customProps={buttonc11708}
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
              id="span362101"
              styles={span362101.styles}
              customProps={span362101}
            >
              <StyledSpan
                className="text-xs text-gray-600 mb-1"
                id="spanf0e25c"
                styles={spanf0e25c.styles}
                customProps={spanf0e25c}
              >
                Download on the
              </StyledSpan>
              <StyledSpan
                className="title-font font-medium"
                id="spand6f0d3"
                styles={spand6f0d3.styles}
                customProps={spand6f0d3}
              >
                App Store
              </StyledSpan>
            </StyledSpan>
          </StyledButton>
        </div>
      </div>
    </StyledContainer>
  );
};

Cta0369.icon = Cta0369Icon;

Cta0369.defaultProps = {
  background11b747: {
    styles: {},
  },
  h15f122e: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  h21f0640: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span95b5fa: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spandfa2c2: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spanceaa97: {
    text: 'Lorem ipsum',
    styles: {},
  },
  span362101: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spanf0e25c: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spand6f0d3: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button1b3134: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttonc11708: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
};

Cta0369.propTypes = {
  /**
   * Background prop for background11b747.
   */
  background11b747: backgroundType,
  /**
   * Text prop for h15f122e.
   */
  h15f122e: textType,
  /**
   * Text prop for h21f0640.
   */
  h21f0640: textType,
  /**
   * Text prop for span95b5fa.
   */
  span95b5fa: textType,
  /**
   * Text prop for spandfa2c2.
   */
  spandfa2c2: textType,
  /**
   * Text prop for spanceaa97.
   */
  spanceaa97: textType,
  /**
   * Text prop for span362101.
   */
  span362101: textType,
  /**
   * Text prop for spanf0e25c.
   */
  spanf0e25c: textType,
  /**
   * Text prop for spand6f0d3.
   */
  spand6f0d3: textType,
  /**
   * Button prop for button1b3134.
   */
  button1b3134: buttonType,
  /**
   * Button prop for buttonc11708.
   */
  buttonc11708: buttonType,
};

export default Cta0369;
