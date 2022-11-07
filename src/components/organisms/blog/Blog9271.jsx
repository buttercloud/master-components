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
  StyledImage,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Blog9271Icon from './Blog9271.icon';

const Blog9271 = (props) => {
  const {
    background40aeac,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background40aeac"
      styles={background40aeac.styles}
      customProps={background40aeac}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {
            cards?.map((card) => (
              <div
                className="py-8 px-4 lg:w-1/3"
                id={card.id}
                key={card.id}
              >
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <StyledSpan
                      className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"
                      id={card.id + 'span8bb54d'}
                      styles={card.span8bb54d?.styles}
                      customProps={card.span8bb54d}
                    >
                      {card.span8bb54d?.text}
                    </StyledSpan>
                    <StyledSpan
                      className="font-medium text-lg text-gray-800 title-font leading-none"
                      id={card.id + 'span7c1d0e'}
                      styles={card.span7c1d0e?.styles}
                      customProps={card.span7c1d0e}
                    >
                      {card.span7c1d0e?.text}
                    </StyledSpan>
                  </div>
                  <div className="flex-grow pl-6">
                    <StyledH2
                      className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"
                      id={card.id + 'h20419ab'}
                      styles={card.h20419ab?.styles}
                      customProps={card.h20419ab}
                    >
                      {card.h20419ab?.text}
                    </StyledH2>
                    <StyledH1
                      className="title-font text-xl font-medium text-gray-900 mb-3"
                      id={card.id + 'h1107f02'}
                      styles={card.h1107f02?.styles}
                      customProps={card.h1107f02}
                    >
                      {card.h1107f02?.text}
                    </StyledH1>
                    <StyledParagraph
                      className="leading-relaxed mb-5"
                      id={card.id + 'p61585f'}
                      styles={card.p61585f?.styles}
                      customProps={card.p61585f}
                    >
                      {card.p61585f?.text}
                    </StyledParagraph>
                    <StyledButton
                      className="inline-flex items-center"
                      id={card.id + 'button2910ba'}
                      styles={card.button2910ba?.styles}
                      onClick={card.button2910ba?.onClick}
                      customProps={card.button2910ba}
                    >
                      <StyledImage
                        alt={card.img2938b8?.alt}
                        src={card.img2938b8?.src}
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                        id={card.id + 'img2938b8'}
                        styles={card.img2938b8?.styles}
                        customProps={card.img2938b8}
                      />
                      <StyledSpan
                        className="flex-grow flex flex-col pl-3"
                        id={card.id + 'span5b94d0'}
                        styles={card.span5b94d0?.styles}
                        customProps={card.span5b94d0}
                      >
                        <StyledSpan
                          className="title-font font-medium text-gray-900"
                          id={card.id + 'span22ab86'}
                          styles={card.span22ab86?.styles}
                          customProps={card.span22ab86}
                        >
                          {card.span22ab86?.text}
                        </StyledSpan>
                      </StyledSpan>
                    </StyledButton>
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

Blog9271.icon = Blog9271Icon;

Blog9271.defaultProps = {
  background40aeac: {
    styles: {},
  },
  cards: [],
};

Blog9271.propTypes = {
  /**
   * Background prop for background40aeac.
   */
  background40aeac: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h1107f02..
     */
    h1107f02: textType,
    /**
     * Text prop for h20419ab..
     */
    h20419ab: textType,
    /**
     * Text prop for p61585f..
     */
    p61585f: textType,
    /**
     * Text prop for span8bb54d..
     */
    span8bb54d: textType,
    /**
     * Text prop for span7c1d0e..
     */
    span7c1d0e: textType,
    /**
     * Text prop for span5b94d0..
     */
    span5b94d0: textType,
    /**
     * Text prop for span22ab86..
     */
    span22ab86: textType,
    /**
     * Image prop for img2938b8..
     */
    img2938b8: imageType,
    /**
     * Button prop for button2910ba..
     */
    button2910ba: buttonType,
  })),
};

export default Blog9271;
