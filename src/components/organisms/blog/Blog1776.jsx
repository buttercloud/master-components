import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledSpan,
  StyledImage,
  StyledParagraph,
  StyledH1,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Blog1776Icon from './Blog1776.icon';

const Blog1776 = (props) => {
  const {
    backgroundfbe231,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundfbe231"
      styles={backgroundfbe231.styles}
      customProps={backgroundfbe231}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="p-4 md:w-1/3"
                id={card.id}
                key={card.id}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <StyledImage
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={card.img6cf1e1?.src}
                    alt={card.img6cf1e1?.alt}
                    id={card.id + 'img6cf1e1'}
                    styles={card.img6cf1e1?.styles}
                    customProps={card.img6cf1e1}
                  />
                  <div className="p-6">
                    <StyledH2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      id={card.id + 'h278a95e'}
                      styles={card.h278a95e?.styles}
                      customProps={card.h278a95e}
                    >
                      {card.h278a95e?.text}
                    </StyledH2>
                    <StyledH1
                      className="title-font text-lg font-medium text-gray-900 mb-3"
                      id={card.id + 'h1a19822'}
                      styles={card.h1a19822?.styles}
                      customProps={card.h1a19822}
                    >
                      {card.h1a19822?.text}
                    </StyledH1>
                    <StyledParagraph
                      className="leading-relaxed mb-3"
                      id={card.id + 'pa30212'}
                      styles={card.pa30212?.styles}
                      customProps={card.pa30212}
                    >
                      {card.pa30212?.text}
                    </StyledParagraph>
                    <div className="flex items-center flex-wrap ">
                      <StyledButton
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        id={card.id + 'buttonf75bb7'}
                        styles={card.buttonf75bb7?.styles}
                        onClick={card.buttonf75bb7?.onClick}
                        customProps={card.buttonf75bb7}
                      >
                        {card.buttonf75bb7?.text}
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </StyledButton>
                      <StyledSpan
                        className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                        id={card.id + 'spanac7728'}
                        styles={card.spanac7728?.styles}
                        customProps={card.spanac7728}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {card.spanac7728?.text}
                      </StyledSpan>
                      <StyledSpan
                        className="text-gray-400 inline-flex items-center leading-none text-sm"
                        id={card.id + 'span714d9f'}
                        styles={card.span714d9f?.styles}
                        customProps={card.span714d9f}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        {card.span714d9f?.text}
                      </StyledSpan>
                    </div>
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

Blog1776.icon = Blog1776Icon;

Blog1776.defaultProps = {
  backgroundfbe231: {
    styles: {},
  },
  cards: [],
};

Blog1776.propTypes = {
  /**
   * Background prop for backgroundfbe231.
   */
  backgroundfbe231: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Image prop for img6cf1e1..
     */
    img6cf1e1: imageType,
    /**
     * Text prop for h278a95e..
     */
    h278a95e: textType,
    /**
     * Text prop for h1a19822..
     */
    h1a19822: textType,
    /**
     * Text prop for pa30212..
     */
    pa30212: textType,
    /**
     * Text prop for spanac7728..
     */
    spanac7728: textType,
    /**
     * Text prop for span714d9f..
     */
    span714d9f: textType,
    /**
     * Button prop for buttonf75bb7..
     */
    buttonf75bb7: buttonType,
  })),
};

export default Blog1776;
