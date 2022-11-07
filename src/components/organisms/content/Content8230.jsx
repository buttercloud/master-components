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
  StyledH2,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Content8230Icon from './Content8230.icon';

const Content8230 = (props) => {
  const {
    background0cae97,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background0cae97"
      styles={background0cae97.styles}
      customProps={background0cae97}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {
            cards?.map((card) => (
              <div
                className="sm:w-1/2 mb-10 px-4"
                id={card.id}
                key={card.id}
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <StyledImage
                    alt={card.img5b65b1?.alt}
                    className="object-cover object-center h-full w-full"
                    src={card.img5b65b1?.src}
                    id={card.id + 'img5b65b1'}
                    styles={card.img5b65b1?.styles}
                    customProps={card.img5b65b1}
                  />
                </div>
                <StyledH2
                  className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"
                  id={card.id + 'h217462d'}
                  styles={card.h217462d?.styles}
                  customProps={card.h217462d}
                >
                  {card.h217462d?.text}
                </StyledH2>
                <StyledParagraph
                  className="leading-relaxed text-base"
                  id={card.id + 'p91ee87'}
                  styles={card.p91ee87?.styles}
                  customProps={card.p91ee87}
                >
                  {card.p91ee87?.text}
                </StyledParagraph>
                <StyledButton
                  className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
                  id={card.id + 'button3e6eb1'}
                  styles={card.button3e6eb1?.styles}
                  onClick={card.button3e6eb1?.onClick}
                  customProps={card.button3e6eb1}
                >
                  {card.button3e6eb1?.text}
                </StyledButton>
              </div>
            ))
          }
        </div>
      </div>
    </StyledContainer>
  );
};

Content8230.icon = Content8230Icon;

Content8230.defaultProps = {
  background0cae97: {
    styles: {},
  },
  cards: [],
};

Content8230.propTypes = {
  /**
   * Background prop for background0cae97.
   */
  background0cae97: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h217462d.
     */
    h217462d: textType,
    /**
     * Text prop for p91ee87.
     */
    p91ee87: textType,
    /**
     * Image prop for img5b65b1.
     */
    img5b65b1: imageType,
    /**
     * Button prop for button3e6eb1.
     */
    button3e6eb1: buttonType,
  })),
};

export default Content8230;
