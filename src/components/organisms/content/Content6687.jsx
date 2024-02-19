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
  StyledContainer,
  StyledH2,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Content6687Icon from './Content6687.icon';

const Content6687 = (props) => {
  const {
    backgroundba95b0,
    h259f168,
    p67d97c,
    pfe9399,
    img5aa429,
    buttonb29479,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundba95b0"
      styles={backgroundba95b0.styles}
      customProps={backgroundba95b0}
    >
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <StyledImage
              alt={img5aa429.alt}
              className="object-cover object-center h-full w-full"
              src={img5aa429.src}
              id="img5aa429"
              styles={img5aa429.styles}
              customProps={img5aa429}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <StyledH2
                  className="font-medium title-font mt-4 text-gray-900 text-lg"
                  id="h259f168"
                  styles={h259f168.styles}
                  customProps={h259f168}
                >
                  {h259f168.text}
                </StyledH2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                <StyledParagraph
                  className="text-base"
                  id="p67d97c"
                  styles={p67d97c.styles}
                  customProps={p67d97c}
                >
                  {p67d97c.text}
                </StyledParagraph>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <StyledParagraph
                className="leading-relaxed text-lg mb-4"
                id="pfe9399"
                styles={pfe9399.styles}
                customProps={pfe9399}
              >
                {pfe9399.text}
              </StyledParagraph>
              <StyledButton
                className="text-indigo-500 inline-flex items-center"
                id="buttonb29479"
                styles={buttonb29479.styles}
                onClick={buttonb29479.onClick}
                customProps={buttonb29479}
              >
                {buttonb29479.text}
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
      </div>
    </StyledContainer>
  );
};

Content6687.icon = Content6687Icon;

Content6687.defaultProps = {
  backgroundba95b0: {
    styles: {},
  },
  h259f168: {
    text: 'Lorem ipsum',
    styles: {},
  },
  p67d97c: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  pfe9399: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  img5aa429: {
    styles: {},
    src: 'https://dummyimage.com/1200x500',
    alt: '',
  },
  buttonb29479: {
    text: 'Learn More',
    styles: {},
    onClick: () => {},
  },
};

Content6687.propTypes = {
  /**
   * Background prop for backgroundba95b0.
   */
  backgroundba95b0: backgroundType,
  /**
   * Text prop for h259f168.
   */
  h259f168: textType,
  /**
   * Text prop for p67d97c.
   */
  p67d97c: textType,
  /**
   * Text prop for pfe9399.
   */
  pfe9399: textType,
  /**
   * Image prop for img5aa429.
   */
  img5aa429: imageType,
  /**
   * Button prop for buttonb29479.
   */
  buttonb29479: buttonType,
};

export default Content6687;
