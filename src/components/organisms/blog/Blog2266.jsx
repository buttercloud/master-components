import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
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
import Blog2266Icon from './Blog2266.icon';

const Blog2266 = (props) => {
  const {
    background82f357,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font overflow-hidden"
      id="background82f357"
      styles={background82f357.styles}
      customProps={background82f357}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {
            cards?.map((card) => (
              <div
                className="py-8 flex flex-wrap md:flex-nowrap"
                id={card.id}
                key={card.id}
              >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <StyledSpan
                    className="font-semibold title-font text-gray-700"
                    id={card.id + 'spanadd6c3'}
                    styles={card.spanadd6c3?.styles}
                    customProps={card.spanadd6c3}
                  >
                    {card.spanadd6c3?.text}
                  </StyledSpan>
                  <StyledSpan
                    className="mt-1 text-gray-500 text-sm"
                    id={card.id + 'spanf9a557'}
                    styles={card.spanf9a557?.styles}
                    customProps={card.spanf9a557}
                  >
                    {card.spanf9a557?.text}
                  </StyledSpan>
                </div>
                <div className="md:flex-grow">
                  <StyledH2
                    className="text-2xl font-medium text-gray-900 title-font mb-2"
                    id={card.id + 'h29de95d'}
                    styles={card.h29de95d?.styles}
                    customProps={card.h29de95d}
                  >
                    {card.h29de95d?.text}
                  </StyledH2>
                  <StyledParagraph
                    className="leading-relaxed"
                    id={card.id + 'p27b16b'}
                    styles={card.p27b16b?.styles}
                    customProps={card.p27b16b}
                  >
                    {card.p27b16b?.text}
                  </StyledParagraph>
                  <StyledButton
                    className="text-indigo-500 inline-flex items-center mt-4"
                    id={card.id + 'button353254'}
                    styles={card.button353254?.styles}
                    onClick={card.button353254?.onClick}
                    customProps={card.button353254}
                  >
                    {card.button353254?.text}
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
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </StyledContainer>
  );
};

Blog2266.icon = Blog2266Icon;

Blog2266.defaultProps = {
  background82f357: {
    styles: {},
  },
  cards: [],
};

Blog2266.propTypes = {
  /**
   * Background prop for background82f357.
   */
  background82f357: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for spanadd6c3..
     */
    spanadd6c3: textType,
    /**
     * Button prop for button353254..
     */
    button353254: buttonType,
    /**
     * Text prop for p27b16b..
     */
    p27b16b: textType,
    /**
     * Text prop for h29de95d..
     */
    h29de95d: textType,
    /**
     * Text prop for spanf9a557..
     */
    spanf9a557: textType,
  })),
};

export default Blog2266;
