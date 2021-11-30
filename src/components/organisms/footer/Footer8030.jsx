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
import Footer8030Icon from './Footer8030.icon';

const Footer8030 = (props) => {
  const {
    background3923cc,
    p03b1dc,
    p6ba6fa,
    span415a1e,
    spand73fc5,
    buttonb4c6c7,
    button17785c,
    button7c3b7b,
    button3c388d,
    button76e882,
    buttonc46c6f,
    sections,
  } = props;

  return (
    <StyledFooter
      className="text-gray-600 body-font"
      id="background3923cc"
      customProps={background3923cc}
    >
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <StyledButton
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            id="buttonb4c6c7"
            styles={buttonb4c6c7.styles}
            onClick={buttonb4c6c7.onClick}
            customProps={buttonb4c6c7}
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
              id="span415a1e"
              styles={span415a1e.styles}
              customProps={span415a1e}
            >
              {span415a1e.text}
            </StyledSpan>
          </StyledButton>
          <StyledParagraph
            className="mt-2 text-sm text-gray-500"
            id="p03b1dc"
            styles={p03b1dc.styles}
            customProps={p03b1dc}
          >
            {p03b1dc.text}
          </StyledParagraph>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          {
            sections?.map((section) => (
              <div
                className="lg:w-1/4 md:w-1/2 w-full px-4"
                id={section.id}
                key={section.id}
              >
                <StyledH2
                  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                  id={section.id + 'h2c60623'}
                  styles={section.h2c60623?.styles}
                  customProps={section.h2c60623}
                >
                  {section.h2c60623?.text}
                </StyledH2>
                <nav className="list-none mb-10">
                  {
                    section.links?.map((link) => (
                      <li id={link.id} key={link.id}>
                        <StyledButton
                          className="text-gray-600 hover:text-gray-800"
                          id={link.id + 'button0fe4a7'}
                          styles={link.button0fe4a7?.styles}
                          onClick={link.button0fe4a7?.onClick}
                          customProps={link.button0fe4a7}
                        >
                          {link.button0fe4a7?.text}
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
            id="p6ba6fa"
            styles={p6ba6fa.styles}
            customProps={p6ba6fa}
          >
            {p6ba6fa.text}
            <StyledButton
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
              id="button17785c"
              styles={button17785c.styles}
              onClick={button17785c.onClick}
              customProps={button17785c}
            >
              {button17785c.text}
            </StyledButton>
          </StyledParagraph>
          <StyledSpan
            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
            id="spand73fc5"
            styles={spand73fc5.styles}
            customProps={spand73fc5}
          >
            <StyledButton
              className="text-gray-500"
              id="button7c3b7b"
              styles={button7c3b7b.styles}
              onClick={button7c3b7b.onClick}
              customProps={button7c3b7b}
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
              id="button3c388d"
              styles={button3c388d.styles}
              onClick={button3c388d.onClick}
              customProps={button3c388d}
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
              id="button76e882"
              styles={button76e882.styles}
              onClick={button76e882.onClick}
              customProps={button76e882}
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
              id="buttonc46c6f"
              styles={buttonc46c6f.styles}
              onClick={buttonc46c6f.onClick}
              customProps={buttonc46c6f}
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

Footer8030.icon = Footer8030Icon;

Footer8030.defaultProps = {
  background3923cc: {
    styles: {},
  },
  sections: [],
  p03b1dc: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p6ba6fa: {
    text: '&#xA9; 2020 MyWebsite &#x2014;',
    styles: {},
  },
  span415a1e: {
    text: 'MyWebsite',
    styles: {},
  },
  spand73fc5: {
    text: 'Lorem ipsum',
    styles: {},
  },
  buttonb4c6c7: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button17785c: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button7c3b7b: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button3c388d: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button76e882: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttonc46c6f: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
};

Footer8030.propTypes = {
  /**
   * Background prop for background3923cc.
   */
  background3923cc: backgroundType,
  /**
   * Sections array
   */
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h2c60623.
     */
    h2c60623: textType,
    /**
     * Links array
     */
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      /**
       * Button prop for button0fe4a7.
       */
      button0fe4a7: buttonType,
    })),
  })),
  /**
   * Text prop for p03b1dc.
   */
  p03b1dc: textType,
  /**
   * Text prop for p6ba6fa.
   */
  p6ba6fa: textType,
  /**
   * Text prop for span415a1e.
   */
  span415a1e: textType,
  /**
   * Text prop for spand73fc5.
   */
  spand73fc5: textType,
  /**
   * Button prop for buttonb4c6c7.
   */
  buttonb4c6c7: buttonType,
  /**
   * Button prop for button17785c.
   */
  button17785c: buttonType,
  /**
   * Button prop for button7c3b7b.
   */
  button7c3b7b: buttonType,
  /**
   * Button prop for button3c388d.
   */
  button3c388d: buttonType,
  /**
   * Button prop for button76e882.
   */
  button76e882: buttonType,
  /**
   * Button prop for buttonc46c6f.
   */
  buttonc46c6f: buttonType,
};

export default Footer8030;
