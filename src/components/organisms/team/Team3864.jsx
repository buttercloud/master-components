import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledImage,
  StyledParagraph,
  StyledH1,
  StyledH2,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
} from '../../../customPropTypes/customPropTypes';
import Team3864Icon from './Team3864.icon';

const Team3864 = (props) => {
  const {
    background707b8e, h1034b3e, p7131fe, cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background707b8e"
      styles={background707b8e.styles}
      customProps={background707b8e}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            id="h1034b3e"
            styles={h1034b3e.styles}
            customProps={h1034b3e}
          >
            {h1034b3e.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="p7131fe"
            styles={p7131fe.styles}
            customProps={p7131fe}
          >
            {p7131fe.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap -m-2">
          {
            cards?.map((card) => (
              <div
                className="p-2 lg:w-1/3 md:w-1/2 w-full"
                id={card.id}
                key={card.id}
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <StyledImage
                    alt={card.img64ea44?.alt}
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={card.img64ea44?.src}
                    id={card.id + 'img64ea44'}
                    styles={card.img64ea44?.styles}
                    customProps={card.img64ea44}
                  />
                  <div className="flex-grow">
                    <StyledH2
                      className="text-gray-900 title-font font-medium"
                      id={card.id + 'h29f9644'}
                      styles={card.h29f9644?.styles}
                      customProps={card.h29f9644}
                    >
                      {card.h29f9644?.text}
                    </StyledH2>
                    <StyledParagraph
                      className="text-gray-500"
                      id={card.id + 'pde59b6'}
                      styles={card.pde59b6?.styles}
                      customProps={card.pde59b6}
                    >
                      {card.pde59b6?.text}
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

Team3864.icon = Team3864Icon;

Team3864.defaultProps = {
  background707b8e: {
    styles: {},
  },
  cards: [],
  h1034b3e: {
    text: 'Our Team',
    styles: {},
  },
  p7131fe: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
};

Team3864.propTypes = {
  /**
   * Background prop for background707b8e.
   */
  background707b8e: backgroundType,
  /**
   * Text prop for h1034b3e.
   */
  h1034b3e: textType,
  /**
   * Text prop for p7131fe.
   */
  p7131fe: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h29f9644.
     */
    h29f9644: textType,
    /**
     * Text prop for pde59b6.
     */
    pde59b6: textType,
    /**
     * Image prop for img64ea44.
     */
    img64ea44: imageType,
  })),
};

export default Team3864;
