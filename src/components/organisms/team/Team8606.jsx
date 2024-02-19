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
import Team8606Icon from './Team8606.icon';

const Team8606 = (props) => {
  const {
    background0283c0,
    h1e61d57,
    p378907,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background0283c0"
      styles={background0283c0.styles}
      customProps={background0283c0}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <StyledH1
            className="text-2xl font-medium title-font mb-4 text-gray-900"
            id="h1e61d57"
            styles={h1e61d57.styles}
            customProps={h1e61d57}
          >
            {h1e61d57.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="p378907"
            styles={p378907.styles}
            customProps={p378907}
          >
            {p378907.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="p-4 lg:w-1/4 md:w-1/2"
                id={card.id}
                key={card.id}
              >
                <div className="h-full flex flex-col items-center text-center">
                  <StyledImage
                    alt={card.img8cb400?.alt}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={card.img8cb400?.src}
                    id={card.id + 'img8cb400'}
                    styles={card.img8cb400?.styles}
                    customProps={card.img8cb400}
                  />
                  <div className="w-full">
                    <StyledH2
                      className="title-font font-medium text-lg text-gray-900"
                      id={card.id + 'h23aae33'}
                      styles={card.h23aae33?.styles}
                      customProps={card.h23aae33}
                    >
                      {card.h23aae33?.text}
                    </StyledH2>
                    <StyledH3
                      className="text-gray-500 mb-3"
                      id={card.id + 'h3004fb7'}
                      styles={card.h3004fb7.styles}
                      customProps={card.h3004fb7}
                    >
                      {card.h3004fb7?.text}
                    </StyledH3>
                    <StyledParagraph
                      className="mb-4"
                      id={card.id + 'p80fcc7'}
                      styles={card.p80fcc7?.styles}
                      customProps={card.p80fcc7}
                    >
                      {card.p80fcc7?.text}
                    </StyledParagraph>
                    <StyledSpan
                      className="inline-flex"
                      id={card.id + 'span6ea60a'}
                      styles={card.span6ea60a?.styles}
                      customProps={card.span6ea60a}
                    >
                      <StyledButton
                        className="text-gray-500"
                        id={card.id + 'buttone7afeb'}
                        styles={card.buttone7afeb?.styles}
                        onClick={card.buttone7afeb?.onClick}
                        customProps={card.buttone7afeb}
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
                        id={card.id + 'buttoneb0693'}
                        styles={card.buttoneb0693?.styles}
                        onClick={card.buttoneb0693?.onClick}
                        customProps={card.buttoneb0693}
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
                        id={card.id + 'button21bf52'}
                        styles={card.button21bf52?.styles}
                        onClick={card.button21bf52?.onClick}
                        customProps={card.button21bf52}
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

Team8606.icon = Team8606Icon;

Team8606.defaultProps = {
  background0283c0: {
    styles: {},
  },
  h1e61d57: {
    text: 'OUR TEAM',
    styles: {},
  },
  p378907: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  cards: [],
};

Team8606.propTypes = {
  /**
   * Background prop for background0283c0.
   */
  background0283c0: backgroundType,
  /**
   * Text prop for h1e61d57.
   */
  h1e61d57: textType,
  /**
   * Text prop for p378907.
   */
  p378907: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h23aae33.
     */
    h23aae33: textType,
    /**
     * Text prop for h3004fb7.
     */
    h3004fb7: textType,
    /**
     * Text prop for p80fcc7.
     */
    p80fcc7: textType,
    /**
     * Text prop for span6ea60a.
     */
    span6ea60a: textType,
    /**
     * Image prop for img8cb400.
     */
    img8cb400: imageType,
    /**
     * Button prop for buttone7afeb.
     */
    buttone7afeb: buttonType,
    /**
     * Button prop for buttoneb0693.
     */
    buttoneb0693: buttonType,
    /**
     * Button prop for button21bf52.
     */
    button21bf52: buttonType,
  })),
};

export default Team8606;
