import PropTypes from 'prop-types';
import React from 'react';

import {
  backgroundType,
  buttonType,
  inputType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledFooter,
  StyledH2,
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Footer4879Icon from './Footer4879.icon';

const Footer4879 = (props) => {
  const {
    backgroundb0dc52,
    pd0dd21,
    pbe6e81,
    span1c34d5,
    spanc1f2da,
    labela4a573,
    button93ea94,
    buttoncfbb65,
    buttonb6b55d,
    button671564,
    button0c63f2,
    button2c06f0,
    inputa73c33,
    sections,
  } = props;

  return (
    <StyledFooter
      className="text-gray-600 body-font"
      id="backgroundb0dc52"
      customProps={backgroundb0dc52}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          {
            sections?.map((section) => (
              <div
                className="lg:w-1/6 md:w-1/2 w-full px-4"
                id={section.id}
                key={section.id}
              >
                <StyledH2
                  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                  id={section.id + 'h22b4187'}
                  styles={section.h22b4187?.styles}
                  customProps={section.h22b4187}
                >
                  {section.h22b4187?.text}
                </StyledH2>
                <nav className="list-none mb-10">
                  {
                    section.links?.map((link) => (
                      <li id={link.id} key={link.id}>
                        <StyledButton
                          className="text-gray-600 hover:text-gray-800"
                          id={link.id + 'button2d46e5'}
                          styles={link.button2d46e5?.styles}
                          onClick={link.button2d46e5?.onClick}
                          customProps={link.button2d46e5}
                        >
                          {link.button2d46e5?.text}
                        </StyledButton>
                      </li>
                    ))
                  }
                </nav>
              </div>
            ))
          }
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <StyledLabel
                for="footer-field"
                className="leading-7 text-sm text-gray-600"
                id="labela4a573"
                styles={labela4a573.styles}
                customProps={labela4a573}
              >
                {labela4a573.text}
              </StyledLabel>
              <StyledInput
                type="text"
                id="inputa73c33"
                name="{inputa73c33.name}"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                styles={inputa73c33.styles}
                placeholder={inputa73c33.placeholder}
                maxlength={inputa73c33.maxLength}
                minlength={inputa73c33.minLength}
                required={inputa73c33.required}
                value={inputa73c33.value}
                onChange={inputa73c33.onChange}
                customProps={inputa73c33}
              />
            </div>
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              id="button93ea94"
              styles={button93ea94.styles}
              onClick={button93ea94.onClick}
              customProps={button93ea94}
            >
              {button93ea94.text}
            </StyledButton>
            <StyledParagraph
              className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center"
              id="pd0dd21"
              styles={pd0dd21.styles}
              customProps={pd0dd21}
            >
              {pd0dd21.text}
              <br className="lg:block hidden" />
            </StyledParagraph>
          </div>
          <StyledSpan
            className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"
            id="span1c34d5"
            styles={span1c34d5.styles}
            customProps={span1c34d5}
          >
            <StyledButton
              className="text-gray-500"
              id="buttoncfbb65"
              styles={buttoncfbb65.styles}
              onClick={buttoncfbb65.onClick}
              customProps={buttoncfbb65}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="buttonb6b55d"
              styles={buttonb6b55d.styles}
              onClick={buttonb6b55d.onClick}
              customProps={buttonb6b55d}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="button671564"
              styles={button671564.styles}
              onClick={button671564.onClick}
              customProps={button671564}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="button0c63f2"
              styles={button0c63f2.styles}
              onClick={button0c63f2.onClick}
              customProps={button0c63f2}
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </StyledButton>
          </StyledSpan>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <StyledParagraph
            className="text-gray-500 text-sm text-center sm:text-left"
            id="pbe6e81"
            styles={pbe6e81.styles}
            customProps={pbe6e81}
          >
            {pbe6e81.text}
            <StyledButton
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
              id="button2c06f0"
              styles={button2c06f0.styles}
              onClick={button2c06f0.onClick}
              customProps={button2c06f0}
            >
              {button2c06f0.text}
            </StyledButton>
          </StyledParagraph>
          <StyledSpan
            className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm"
            id="spanc1f2da"
            styles={spanc1f2da.styles}
            customProps={spanc1f2da}
          >
            {spanc1f2da.text}
          </StyledSpan>
        </div>
      </div>
    </StyledFooter>
  );
};

Footer4879.icon = Footer4879Icon;

Footer4879.defaultProps = {
  backgroundb0dc52: {
    styles: {},
  },
  sections: [],
  pd0dd21: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pbe6e81: {
    text: '&#xA9; 2020 MyWebsite &#x2014;',
    styles: {},
  },
  span1c34d5: {
    text: 'Lorem ipsum',
    styles: {},
  },
  spanc1f2da: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  labela4a573: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button93ea94: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttoncfbb65: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttonb6b55d: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button671564: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button0c63f2: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button2c06f0: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  inputa73c33: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Footer4879.propTypes = {
  /**
   * Background prop for backgroundb0dc52.
   */
  backgroundb0dc52: backgroundType,
  /**
   * Sections array
   */
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h22b4187.
     */
    h22b4187: textType,
    /**
     * Links array
     */
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      /**
       * Button prop for button2d46e5.
       */
      button2d46e5: buttonType,
    })),
  })),
  /**
   * Text prop for pd0dd21.
   */
  pd0dd21: textType,
  /**
   * Text prop for pbe6e81.
   */
  pbe6e81: textType,
  /**
   * Text prop for span1c34d5.
   */
  span1c34d5: textType,
  /**
   * Text prop for spanc1f2da.
   */
  spanc1f2da: textType,
  /**
   * Text prop for labela4a573.
   */
  labela4a573: textType,
  /**
   * Button prop for button93ea94.
   */
  button93ea94: buttonType,
  /**
   * Button prop for buttoncfbb65.
   */
  buttoncfbb65: buttonType,
  /**
   * Button prop for buttonb6b55d.
   */
  buttonb6b55d: buttonType,
  /**
   * Button prop for button671564.
   */
  button671564: buttonType,
  /**
   * Button prop for button0c63f2.
   */
  button0c63f2: buttonType,
  /**
   * Button prop for button2c06f0.
   */
  button2c06f0: buttonType,
  /**
   * Input prop for inputa73c33.
   */
  inputa73c33: inputType,
};

export default Footer4879;
