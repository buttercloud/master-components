import React from 'react';

import {
  backgroundType,
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledFooter,
  StyledImage,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Footer9657Icon from './Footer9657.icon';

const Footer9657 = (props) => {
  const {
    backgroundf5367c,
    p7ae461,
    span8fd2de,
    span6144d1,
    button040e09,
    buttoncbde1a,
    button632405,
    button3043d9,
    button1fd09b,
    button6882c5,
    logo,
  } = props;

  return (
    <StyledFooter
      className="text-gray-600 body-font"
      id="backgroundf5367c"
      customProps={backgroundf5367c}
    >
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <StyledButton
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          id="button040e09"
          styles={button040e09.styles}
          onClick={button040e09.onClick}
          customProps={button040e09}
        >
          <StyledImage
            src={logo?.src}
            alt={logo?.alt}
            customProps={logo}
          />
          <StyledSpan
            className="ml-3 text-xl"
            id="span8fd2de"
            styles={span8fd2de.styles}
            customProps={span8fd2de}
          >
            {span8fd2de.text}
          </StyledSpan>
        </StyledButton>
        <StyledParagraph
          className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
          id="p7ae461"
          styles={p7ae461.styles}
          customProps={p7ae461}
        >
          {p7ae461.text}
          <StyledButton
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
            id="buttoncbde1a"
            styles={buttoncbde1a.styles}
            onClick={buttoncbde1a.onClick}
            customProps={buttoncbde1a}
          >
            {buttoncbde1a.text}
          </StyledButton>
        </StyledParagraph>
        <StyledSpan
          className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          id="span6144d1"
          styles={span6144d1.styles}
          customProps={span6144d1}
        >
          <StyledButton
            className="text-gray-500"
            id="button632405"
            styles={button632405.styles}
            onClick={button632405.onClick}
            customProps={button632405}
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
            id="button3043d9"
            styles={button3043d9.styles}
            onClick={button3043d9.onClick}
            customProps={button3043d9}
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
            id="button1fd09b"
            styles={button1fd09b.styles}
            onClick={button1fd09b.onClick}
            customProps={button1fd09b}
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
            id="button6882c5"
            styles={button6882c5.styles}
            onClick={button6882c5.onClick}
            customProps={button6882c5}
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
    </StyledFooter>
  );
};

Footer9657.icon = Footer9657Icon;

Footer9657.defaultProps = {
  backgroundf5367c: {
    styles: {},
  },
  logo: {},
  p7ae461: {
    text: '&#xA9; 2020 Tailblocks &#x2014;',
    styles: {},
  },
  span8fd2de: {
    text: 'MyWebsite',
    styles: {},
  },
  span6144d1: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button040e09: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttoncbde1a: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button632405: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button3043d9: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button1fd09b: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button6882c5: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
};

Footer9657.propTypes = {
  /**
   * Background prop for backgroundf5367c.
   */
  backgroundf5367c: backgroundType,
  /**
  * Logo props.
  */
  logo: imageType,
  /**
   * Text prop for p7ae461.
   */
  p7ae461: textType,
  /**
   * Text prop for span8fd2de.
   */
  span8fd2de: textType,
  /**
   * Text prop for span6144d1.
   */
  span6144d1: textType,
  /**
   * Button prop for button040e09.
   */
  button040e09: buttonType,
  /**
   * Button prop for buttoncbde1a.
   */
  buttoncbde1a: buttonType,
  /**
   * Button prop for button632405.
   */
  button632405: buttonType,
  /**
   * Button prop for button3043d9.
   */
  button3043d9: buttonType,
  /**
   * Button prop for button1fd09b.
   */
  button1fd09b: buttonType,
  /**
   * Button prop for button6882c5.
   */
  button6882c5: buttonType,
};

export default Footer9657;
