import PropTypes from 'prop-types';
import React from 'react';

import {
  backgroundType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Gallery8538Icon from './Gallery8538.icon';

const Gallery8538 = (props) => {
  const {
    background4ee5f2,
    h1702826,
    pfb98c2,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background4ee5f2"
      styles={background4ee5f2.styles}
      customProps={background4ee5f2}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            id="h1702826"
            styles={h1702826.styles}
            customProps={h1702826}
          >
            {h1702826.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="pfb98c2"
            styles={pfb98c2.styles}
            customProps={pfb98c2}
          >
            {pfb98c2.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <StyledImage
                    alt={card.imgf39064?.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={card.imgf39064?.src}
                    id="imgf39064"
                    styles={card.imgf39064?.styles}
                    customProps={card.imgf39064}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <StyledH2
                      className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"
                      id="h24fc552"
                      styles={card.h24fc552?.styles}
                      customProps={card.h24fc552}
                    >
                      {card.h24fc552?.text}
                    </StyledH2>
                    <StyledH1
                      className="title-font text-lg font-medium text-gray-900 mb-3"
                      id="h19d820e"
                      styles={card.h19d820e?.styles}
                      customProps={card.h19d820e}
                    >
                      {card.h19d820e?.text}
                    </StyledH1>
                    <StyledParagraph
                      className="leading-relaxed"
                      id="pd4ac10"
                      styles={card.pd4ac10?.styles}
                      customProps={card.pd4ac10}
                    >
                      {card.pd4ac10?.text}
                    </StyledParagraph>
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

Gallery8538.icon = Gallery8538Icon;

Gallery8538.defaultProps = {
  background4ee5f2: {
    styles: {},
  },
  h1702826: {
    text: 'Lorem ipsum',
    styles: {},
  },
  pfb98c2: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  cards: [],
};

Gallery8538.propTypes = {
  /**
   * Background prop for background4ee5f2.
   */
  background4ee5f2: backgroundType,
  /**
   * Text prop for h1702826.
   */
  h1702826: textType,
  /**
   * Text prop for pfb98c2.
   */
  pfb98c2: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h19d820e.
     */
    h19d820e: textType,
    /**
     * Text prop for h24fc552.
     */
    h24fc552: textType,
    /**
     * Text prop for pd4ac10.
     */
    pd4ac10: textType,
    /**
     * Image prop for imgf39064.
     */
    imgf39064: imageType,
  })),
};

export default Gallery8538;
