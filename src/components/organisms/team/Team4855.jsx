import PropTypes from 'prop-types';
import React from 'react';

import {
  backgroundType,
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledImage,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Team4855Icon from './Team4855.icon';

const Team4855 = (props) => {
  const {
    background1ea97e,
    h16aff32,
    pa7aef3,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background1ea97e"
      styles={background1ea97e.styles}
      customProps={background1ea97e}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <StyledH1
            className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"
            id="h16aff32"
            styles={h16aff32.styles}
            customProps={h16aff32}
          >
            {h16aff32.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="pa7aef3"
            styles={pa7aef3.styles}
            customProps={pa7aef3}
          >
            {pa7aef3.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="p-4 lg:w-1/2"
                id={card.id}
                key={card.id}
              >
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <StyledImage
                    alt={card.imgc08929?.alt}
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={card.imgc08929?.src}
                    id={card.id + 'imgc08929'}
                    styles={card.imgc08929?.styles}
                    customProps={card.imgc08929}
                  />
                  <div className="flex-grow sm:pl-8">
                    <StyledH2
                      className="title-font font-medium text-lg text-gray-900"
                      id={card.id + 'h2e06ce6'}
                      styles={card.h2e06ce6?.styles}
                      customProps={card.h2e06ce6}
                    >
                      {card.h2e06ce6?.text}
                    </StyledH2>
                    <StyledH3
                      className="text-gray-500 mb-3"
                      id={card.id + 'h31b5141'}
                      styles={card.h31b5141?.styles}
                      customProps={card.h31b5141}
                    >
                      {card.h31b5141?.text}
                    </StyledH3>
                    <StyledParagraph
                      className="mb-4"
                      id={card.id + 'p2f57d7'}
                      styles={card.p2f57d7?.styles}
                      customProps={card.p2f57d7}
                    >
                      {card.p2f57d7?.text}
                    </StyledParagraph>
                    <StyledSpan
                      className="inline-flex"
                      id={card.id + 'span8a9007'}
                      styles={card.span8a9007?.styles}
                      customProps={card.span8a9007}
                    >
                      <StyledButton
                        className="text-gray-500"
                        id={card.id + 'buttonb2e8f9'}
                        styles={card.buttonb2e8f9?.styles}
                        onClick={card.buttonb2e8f9?.onClick}
                        customProps={card.buttonb2e8f9}
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
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </StyledButton>
                      <StyledButton
                        className="ml-2 text-gray-500"
                        id={card.id + 'button2c9ee5'}
                        styles={card.button2c9ee5?.styles}
                        onClick={card.button2c9ee5?.onClick}
                        customProps={card.button2c9ee5}
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
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </StyledButton>
                      <StyledButton
                        className="ml-2 text-gray-500"
                        id={card.id + 'buttonffd044'}
                        styles={card.buttonffd044?.styles}
                        onClick={card.buttonffd044?.onClick}
                        customProps={card.buttonffd044}
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
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </StyledButton>
                    </StyledSpan>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </StyledContainer>
  );
};

Team4855.icon = Team4855Icon;

Team4855.defaultProps = {
  background1ea97e: {
    styles: {},
  },
  h16aff32: {
    text: 'OUR TEAM',
    styles: {},
  },
  pa7aef3: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  cards: [],
};

Team4855.propTypes = {
  /**
   * Background prop for background1ea97e.
   */
  background1ea97e: backgroundType,
  /**
   * Text prop for h16aff32.
   */
  h16aff32: textType,
  /**
   * Text prop for pa7aef3.
   */
  pa7aef3: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h2e06ce6.
     */
    h2e06ce6: textType,
    /**
     * Text prop for h31b5141.
     */
    h31b5141: textType,
    /**
     * Text prop for p2f57d7.
     */
    p2f57d7: textType,
    /**
     * Text prop for span8a9007.
     */
    span8a9007: textType,
    /**
     * Image prop for imgc08929.
     */
    imgc08929: imageType,
    /**
     * Button prop for buttonb2e8f9.
     */
    buttonb2e8f9: buttonType,
    /**
     * Button prop for button2c9ee5.
     */
    button2c9ee5: buttonType,
    /**
     * Button prop for buttonffd044.
     */
    buttonffd044: buttonType,
  })),
};

export default Team4855;
