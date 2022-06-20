import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledFooter,
  StyledSpan,
  StyledParagraph,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Footer8324Icon from './Footer8324.icon';

const Footer8324 = (props) => {
  const {
    background9e8f73,
    p3ec6e0,
    pf55d82,
    spane65d96,
    span87de8a,
    button8ab97c,
    buttonad082c,
    button30220c,
    button9eb06f,
    button632660,
    button341ca3,
    sections,
  } = props;

  return (
    <StyledFooter
      className="text-gray-600 body-font"
      id="background9e8f73"
      customProps={background9e8f73}
    >
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <StyledButton
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            id="button8ab97c"
            styles={button8ab97c.styles}
            onClick={button8ab97c.onClick}
            customProps={button8ab97c}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <StyledSpan
              className="ml-3 text-xl"
              id="spane65d96"
              styles={spane65d96.styles}
              customProps={spane65d96}
            >
              {spane65d96.text}
            </StyledSpan>
          </StyledButton>
          <StyledParagraph
            className="mt-2 text-sm text-gray-500"
            id="p3ec6e0"
            styles={p3ec6e0.styles}
            customProps={p3ec6e0}
          >
            {p3ec6e0.text}
          </StyledParagraph>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {
            sections?.map((section) => (
              <div
                className="lg:w-1/4 md:w-1/2 w-full px-4"
                id={section.id}
                key={section.id}
              >
                <StyledH2
                  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                  id={section.id + 'h268b71e'}
                  styles={section.h268b71e?.styles}
                  customProps={section.h268b71e}
                >
                  {section.h268b71e?.text}
                </StyledH2>
                <nav className="list-none mb-10">
                  {
                    section.links?.map((link) => (
                      <li id={link.id} key={link.id}>
                        <StyledButton
                          className="text-gray-600 hover:text-gray-800"
                          id={link.id + 'button50f353'}
                          styles={link.button50f353?.styles}
                          onClick={link.button50f353?.onClick}
                          customProps={link.button50f353}
                        >
                          {link.button50f353?.text}
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
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <StyledParagraph
            className="text-gray-500 text-sm text-center sm:text-left"
            id="pf55d82"
            styles={pf55d82.styles}
            customProps={pf55d82}
          >
            {pf55d82.text}
            <StyledButton
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
              id="buttonad082c"
              styles={buttonad082c.styles}
              onClick={buttonad082c.onClick}
              customProps={buttonad082c}
            >
              {buttonad082c.text}
            </StyledButton>
          </StyledParagraph>
          <StyledSpan
            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
            id="span87de8a"
            styles={span87de8a.styles}
            customProps={span87de8a}
          >
            <StyledButton
              className="text-gray-500"
              id="button30220c"
              styles={button30220c.styles}
              onClick={button30220c.onClick}
              customProps={button30220c}
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
              id="button9eb06f"
              styles={button9eb06f.styles}
              onClick={button9eb06f.onClick}
              customProps={button9eb06f}
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
              id="button632660"
              styles={button632660.styles}
              onClick={button632660.onClick}
              customProps={button632660}
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="button341ca3"
              styles={button341ca3.styles}
              onClick={button341ca3.onClick}
              customProps={button341ca3}
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
    </StyledFooter>
  );
};

Footer8324.icon = Footer8324Icon;

Footer8324.defaultProps = {
  background9e8f73: {
    styles: {},
  },
  sections: [],
  p3ec6e0: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pf55d82: {
    text: '&#xA9; 2020 MyWebsite &#x2014;',
    styles: {},
  },
  spane65d96: {
    text: 'MyWebsite',
    styles: {},
  },
  span87de8a: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button8ab97c: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttonad082c: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button30220c: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button9eb06f: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button632660: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button341ca3: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
};

Footer8324.propTypes = {
  /**
   * Background prop for background9e8f73.
   */
  background9e8f73: backgroundType,
  /**
   * Sections array
   */
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h268b71e.
     */
    h268b71e: textType,
    /**
     * Links array
     */
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      /**
       * Button prop for button50f353.
       */
      button50f353: buttonType,
    })),
  })),
  /**
   * Text prop for p3ec6e0.
   */
  p3ec6e0: textType,
  /**
   * Text prop for pf55d82.
   */
  pf55d82: textType,
  /**
   * Text prop for spane65d96.
   */
  spane65d96: textType,
  /**
   * Text prop for span87de8a.
   */
  span87de8a: textType,
  /**
   * Button prop for button8ab97c.
   */
  button8ab97c: buttonType,
  /**
   * Button prop for buttonad082c.
   */
  buttonad082c: buttonType,
  /**
   * Button prop for button30220c.
   */
  button30220c: buttonType,
  /**
   * Button prop for button9eb06f.
   */
  button9eb06f: buttonType,
  /**
   * Button prop for button632660.
   */
  button632660: buttonType,
  /**
   * Button prop for button341ca3.
   */
  button341ca3: buttonType,
};

export default Footer8324;
