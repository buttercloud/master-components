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
import Content8929Icon from './Content8929.icon';

const Content8929 = (props) => {
  const {
    background229ecf,
    h1a78d6f,
    h21ff8bf,
    p4464e6,
    cards,
    button952629,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background229ecf"
      styles={background229ecf.styles}
      customProps={background229ecf}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <StyledH2
            className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
            id="h21ff8bf"
            styles={h21ff8bf.styles}
            customProps={h21ff8bf}
          >
            {h21ff8bf.text}
          </StyledH2>
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            id="h1a78d6f"
            styles={h1a78d6f.styles}
            customProps={h1a78d6f}
          >
            {h1a78d6f.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="p4464e6"
            styles={p4464e6.styles}
            customProps={p4464e6}
          >
            {p4464e6.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap">
          {
            cards?.map((card) => (
              <div
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
                id={card.id}
                key={card.id}
              >
                <StyledH2
                  className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"
                  id={card.id + 'h20e21d7'}
                  styles={card.h20e21d7?.styles}
                  customProps={card.h20e21d7}
                >
                  {card.h20e21d7?.text}
                </StyledH2>
                <StyledParagraph
                  className="leading-relaxed text-base mb-4"
                  id={card.id + 'p3d0a44'}
                  styles={card.p3d0a44?.styles}
                  customProps={card.p3d0a44}
                >
                  {card.p3d0a44?.text}
                </StyledParagraph>
                <StyledButton
                  className="text-indigo-500 inline-flex items-center"
                  id={card.id + 'button5d8c67'}
                  styles={card.button5d8c67?.styles}
                  onClick={card.button5d8c67?.onClick}
                  customProps={card.button5d8c67}
                >
                  {card.button5d8c67?.text}
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
            ))
          }
        </div>
        <StyledButton
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          id="button952629"
          styles={button952629.styles}
          onClick={button952629.onClick}
          customProps={button952629}
        >
          {button952629.text}
        </StyledButton>
      </div>
    </StyledContainer>
  );
};

Content8929.icon = Content8929Icon;

Content8929.defaultProps = {
  background229ecf: {
    styles: {},
  },
  h1a78d6f: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  h21ff8bf: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p4464e6: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  button952629: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  cards: [],
};

Content8929.propTypes = {
  /**
   * Background prop for background229ecf.
   */
  background229ecf: backgroundType,
  /**
   * Text prop for h1a78d6f.
   */
  h1a78d6f: textType,
  /**
   * Text prop for h21ff8bf.
   */
  h21ff8bf: textType,
  /**
   * Text prop for p4464e6.
   */
  p4464e6: textType,
  /**
   * Button prop for button952629.
   */
  button952629: buttonType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h20e21d7.
     */
    h20e21d7: textType,
    /**
     * Text prop for p3d0a44.
     */
    p3d0a44: textType,
    /**
     * Button prop for button5d8c67.
     */
    button5d8c67: buttonType,
  })),
};

export default Content8929;
