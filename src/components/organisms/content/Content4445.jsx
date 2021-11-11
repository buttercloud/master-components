import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
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
import Content4445Icon from './Content4445.icon';

const Content4445 = (props) => {
  const {
    background940802,
    h1425992,
    p1587c8,
    cards,
    button9d116e,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background940802"
      styles={background940802.styles}
      customProps={background940802}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            id="h1425992"
            styles={h1425992.styles}
            customProps={h1425992}
          >
            {h1425992.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-1/2 w-full leading-relaxed text-gray-500"
            id="p1587c8"
            styles={p1587c8.styles}
            customProps={p1587c8}
          >
            {p1587c8.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="xl:w-1/3 md:w-1/2 p-4"
                id={card.id}
                key={card.id}
              >
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <StyledH2
                    className="text-lg text-gray-900 font-medium title-font mb-2"
                    id={card.id + 'h221b9ac'}
                    styles={card.h221b9ac?.styles}
                    customProps={card.h221b9ac}
                  >
                    {card.h221b9ac?.text}
                  </StyledH2>
                  <StyledParagraph
                    className="leading-relaxed text-base"
                    id={card.id + 'p9e5837'}
                    styles={card.p9e5837?.styles}
                    customProps={card.p9e5837}
                  >
                    {card.p9e5837?.text}
                  </StyledParagraph>
                </div>
              </div>
            ))
          }
        </div>
        <StyledButton
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          id="button9d116e"
          styles={button9d116e.styles}
          onClick={button9d116e.onClick}
          customProps={button9d116e}
        >
          {button9d116e.text}
        </StyledButton>
      </div>
    </StyledContainer>
  );
};

Content4445.icon = Content4445Icon;

Content4445.defaultProps = {
  background940802: {
    styles: {},
  },
  h1425992: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p1587c8: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  cards: [],
  button9d116e: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
};

Content4445.propTypes = {
  /**
   * Background prop for background940802.
   */
  background940802: backgroundType,
  /**
   * Text prop for h1425992.
   */
  h1425992: textType,
  /**
   * Text prop for p1587c8.
   */
  p1587c8: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h221b9ac.
     */
    h221b9ac: textType,
    /**
     * Text prop for p9e5837.
     */
    p9e5837: textType,
  })),
  /**
   * Button prop for button9d116e.
   */
  button9d116e: buttonType,
};

export default Content4445;
