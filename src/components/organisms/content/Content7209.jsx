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
  StyledH3,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Content7209Icon from './Content7209.icon';

const Content7209 = (props) => {
  const {
    background778396,
    h108c12a,
    pe458f9,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background778396"
      styles={background778396.styles}
      customProps={background778396}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <StyledH1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              id="h108c12a"
              styles={h108c12a.styles}
              customProps={h108c12a}
            >
              {h108c12a.text}
            </StyledH1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <StyledParagraph
            className="lg:w-1/2 w-full leading-relaxed text-gray-500"
            id="pe458f9"
            styles={pe458f9.styles}
            customProps={pe458f9}
          >
            {pe458f9.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="xl:w-1/4 md:w-1/2 p-4"
                id={card.id}
                key={card.id}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <StyledImage
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={card.img120e93?.src}
                    alt={card.img120e93?.alt}
                    id={card.id + 'img120e93'}
                    styles={card.img120e93?.styles}
                    customProps={card.img120e93}
                  />
                  <StyledH3
                    className="tracking-widest text-indigo-500 text-xs font-medium title-font"
                    id={card.id + 'h31d04c8'}
                    styles={card.h31d04c8?.styles}
                    customProps={card.h31d04c8}
                  >
                    {card.h31d04c8?.text}
                  </StyledH3>
                  <StyledH2
                    className="text-lg text-gray-900 font-medium title-font mb-4"
                    id={card.id + 'h26728f1'}
                    styles={card.h26728f1?.styles}
                    customProps={card.h26728f1}
                  >
                    {card.h26728f1?.text}
                  </StyledH2>
                  <StyledParagraph
                    className="leading-relaxed text-base"
                    id={card.id + 'p1b9a6b'}
                    styles={card.p1b9a6b?.styles}
                    customProps={card.p1b9a6b}
                  >
                    {card.p1b9a6b?.text}
                  </StyledParagraph>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </StyledContainer>
  );
};

Content7209.icon = Content7209Icon;

Content7209.defaultProps = {
  background778396: {
    styles: {},
  },
  h108c12a: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pe458f9: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  cards: [],
};

Content7209.propTypes = {
  /**
   * Background prop for background778396.
   */
  background778396: backgroundType,
  /**
   * Text prop for h108c12a.
   */
  h108c12a: textType,
  /**
   * Text prop for pe458f9.
   */
  pe458f9: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h26728f1.
     */
    h26728f1: textType,
    /**
     * Text prop for h31d04c8.
     */
    h31d04c8: textType,
    /**
     * Text prop for p1b9a6b.
     */
    p1b9a6b: textType,
    /**
     * Image prop for img120e93.
     */
    img120e93: imageType,
  })),
};

export default Content7209;
