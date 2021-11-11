import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledSpan,
  StyledParagraph,
  StyledH1,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Blog2197Icon from './Blog2197.icon';

const Blog2197 = (props) => {
  const {
    background8c2ea4,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background8c2ea4"
      styles={background8c2ea4.styles}
      customProps={background8c2ea4}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="p-4 lg:w-1/3"
                id={card.id}
                key={card.id}
              >
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <StyledH2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    id={card.id + '-h29a649f'}
                    styles={card.h29a649f?.styles}
                    customProps={card.h29a649f}
                  >
                    {card.h29a649f?.text}
                  </StyledH2>
                  <StyledH1
                    className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
                    id={card.id + '-h1184cb0'}
                    styles={card.h1184cb0?.styles}
                    customProps={card.h1184cb0}
                  >
                    {card.h1184cb0?.text}
                  </StyledH1>
                  <StyledParagraph
                    className="leading-relaxed mb-3"
                    id={card.id + '-p99c856'}
                    styles={card.p99c856?.styles}
                    customProps={card.p99c856}
                  >
                    {card.p99c856?.text}
                  </StyledParagraph>
                  <StyledButton
                    className="text-indigo-500 inline-flex items-center"
                    id={card.id + '-buttonbafe81'}
                    styles={card.buttonbafe81?.styles}
                    onClick={card.buttonbafe81?.onClick}
                    customProps={card.buttonbafe81}
                  >
                    {card.buttonbafe81?.text}
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
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <StyledSpan
                      className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                      id={card.id + '-span4a4e66'}
                      styles={card.span4a4e66?.styles}
                      customProps={card.span4a4e66}
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
                      {card.span4a4e66?.text}
                    </StyledSpan>
                    <StyledSpan
                      className="text-gray-400 inline-flex items-center leading-none text-sm"
                      id={card.id + '-spane33434'}
                      styles={card.spane33434?.styles}
                      customProps={card.spane33434}
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
                      {card.spane33434?.text}
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

Blog2197.icon = Blog2197Icon;

Blog2197.defaultProps = {
  background8c2ea4: {
    styles: {},
  },
  cards: [],
};

Blog2197.propTypes = {
  /**
   * Background prop for background8c2ea4.
   */
  background8c2ea4: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h29a649f..
     */
    h29a649f: textType,
    /**
     * Text prop for spane33434..
     */
    spane33434: textType,
    /**
     * Text prop for span4a4e66..
     */
    span4a4e66: textType,
    /**
     * Button prop for buttonbafe81..
     */
    buttonbafe81: buttonType,
    /**
     * Text prop for p99c856..
     */
    p99c856: textType,
    /**
     * Text prop for h1184cb0..
     */
    h1184cb0: textType,
  })),
};

export default Blog2197;
