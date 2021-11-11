import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledSpan,
  StyledImage,
  StyledParagraph,
  StyledH2,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
} from '../../../customPropTypes/customPropTypes';
import Testimonial8468Icon from './Testimonial8468.icon';

const Testimonial8468 = (props) => {
  const {
    backgrounda405bd,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgrounda405bd"
      styles={backgrounda405bd.styles}
      customProps={backgrounda405bd}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="lg:w-1/3 lg:mb-0 mb-6 p-4"
                id={card.id}
                key={card.id}
              >
                <div className="h-full text-center">
                  <StyledImage
                    alt={card.img6cc264?.alt}
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={card.img6cc264?.src}
                    id={card.id + 'img6cc264'}
                    styles={card.img6cc264?.styles}
                    customProps={card.img6cc264}
                  />
                  <StyledParagraph
                    className="leading-relaxed"
                    id={card.id + 'p82b3e2'}
                    styles={card.p82b3e2?.styles}
                    customProps={card.p82b3e2}
                  >
                    {card.p82b3e2?.text}
                  </StyledParagraph>
                  <StyledSpan
                    className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"
                    id={card.id + 'span2c9834'}
                    styles={card.span2c9834?.styles}
                    customProps={card.span2c9834}
                  />
                  <StyledH2
                    className="text-gray-900 font-medium title-font tracking-wider text-sm"
                    id={card.id + 'h283f86b'}
                    styles={card.h283f86b?.styles}
                    customProps={card.h283f86b}
                  >
                    {card.h283f86b?.text}
                  </StyledH2>
                  <StyledParagraph
                    className="text-gray-500"
                    id={card.id + 'p2c1f48'}
                    styles={card.p2c1f48?.styles}
                    customProps={card.p2c1f48}
                  >
                    {card.p2c1f48?.text}
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

Testimonial8468.icon = Testimonial8468Icon;

Testimonial8468.defaultProps = {
  backgrounda405bd: {
    styles: {},
  },
  cards: [],
};

Testimonial8468.propTypes = {
  /**
   * Background prop for backgrounda405bd.
   */
  backgrounda405bd: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h283f86b.
     */
    h283f86b: textType,
    /**
     * Text prop for p82b3e2.
     */
    p82b3e2: textType,
    /**
     * Text prop for p2c1f48.
     */
    p2c1f48: textType,
    /**
     * Text prop for span2c9834.
     */
    span2c9834: textType,
    /**
     * Image prop for img6cc264.
     */
    img6cc264: imageType,
  })),
};

export default Testimonial8468;
