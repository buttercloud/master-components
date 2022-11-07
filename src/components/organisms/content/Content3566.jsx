import React from 'react';

import {
  backgroundType,
  buttonType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledH2,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Content3566Icon from './Content3566.icon';

const Content3566 = (props) => {
  const {
    backgroundb1689b, h289f294, pa7bad8, button77dc18, buttone978be,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundb1689b"
      styles={backgroundb1689b?.styles}
      customProps={backgroundb1689b}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <StyledH2
          className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"
          id="h289f294"
          styles={h289f294?.styles}
          onClick={h289f294?.onClick}
          customProps={h289f294}
        >
          {h289f294.text}
        </StyledH2>
        <div className="md:w-3/5 md:pl-6">
          <StyledParagraph
            className="leading-relaxed text-base"
            id="pa7bad8"
            styles={pa7bad8?.styles}
            onClick={pa7bad8?.onClick}
            customProps={pa7bad8}
          >
            {pa7bad8.text}
          </StyledParagraph>
          <div className="flex md:mt-4 mt-6">
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded"
              id="button77dc18"
              styles={button77dc18?.styles}
              onClick={button77dc18?.onClick}
              customProps={button77dc18}
            >
              {button77dc18?.text}
            </StyledButton>
            <StyledButton
              className="text-indigo-500 inline-flex items-center ml-4"
              id="buttone978be"
              styles={buttone978be?.styles}
              onClick={buttone978be?.onClick}
              customProps={buttone978be}
            >
              {buttone978be?.text}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Content3566.icon = Content3566Icon;

Content3566.defaultProps = {
  backgroundb1689b: {
    styles: {},
  },
  h289f294: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pa7bad8: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  button77dc18: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttone978be: {
    text: 'Learn More',
    styles: {},
    onClick: () => {},
  },
};

Content3566.propTypes = {
  /**
   * Background prop for backgroundb1689b.
   */
  backgroundb1689b: backgroundType,
  /**
   * Text prop for h289f294.
   */
  h289f294: textType,
  /**
   * Text prop for pa7bad8.
   */
  pa7bad8: textType,
  /**
   * Button prop for button77dc18.
   */
  button77dc18: buttonType,
  /**
   * Button prop for buttone978be.
   */
  buttone978be: buttonType,
};

export default Content3566;
