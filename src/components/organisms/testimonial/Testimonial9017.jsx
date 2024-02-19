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
  StyledImage,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Testimonial9017Icon from './Testimonial9017.icon';

const Testimonial9017 = (props) => {
  const {
    background783f17,
    h1af34ec,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background783f17"
      styles={background783f17.styles}
      customProps={background783f17}
    >
      <div className="container px-5 py-24 mx-auto">
        <StyledH1
          className="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
          id="h1af34ec"
          styles={h1af34ec.styles}
          customProps={h1af34ec}
        >
          {h1af34ec.text}
        </StyledH1>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => (
              <div
                className="p-4 md:w-1/2 w-full"
                id={card.id}
                key={card.id}
              >
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                  </svg>
                  <StyledParagraph
                    className="leading-relaxed mb-6"
                    id={card.id + 'p9d1e0c'}
                    styles={card.p9d1e0c?.styles}
                    customProps={card.p9d1e0c}
                  >
                    {card.p9d1e0c?.text}
                  </StyledParagraph>
                  <StyledButton
                    className="inline-flex items-center"
                    id={card.id + 'buttona565e9'}
                    styles={card.buttona565e9?.styles}
                    onClick={card.buttona565e9?.onClick}
                    customProps={card.buttona565e9}
                  >
                    <StyledImage
                      alt={card.img21a991?.alt}
                      src={card.img21a991?.src}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      id={card.id + 'img21a991'}
                      styles={card.img21a991?.styles}
                      customProps={card.img21a991}
                    />
                    <StyledSpan
                      className="flex-grow flex flex-col pl-4"
                      id={card.id + 'spanfb7e6c'}
                      styles={card.spanfb7e6c?.styles}
                      customProps={card.spanfb7e6c}
                    >
                      <StyledSpan
                        className="title-font font-medium text-gray-900"
                        id={card.id + 'span5a5f22'}
                        styles={card.span5a5f22?.styles}
                        customProps={card.span5a5f22}
                      >
                        {card.span5a5f22?.text}
                      </StyledSpan>
                      <StyledSpan
                        className="text-gray-500 text-sm"
                        id={card.id + 'spancb9f5c'}
                        styles={card.spancb9f5c?.styles}
                        customProps={card.spancb9f5c}
                      >
                        {card.spancb9f5c?.text}
                      </StyledSpan>
                    </StyledSpan>
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

Testimonial9017.icon = Testimonial9017Icon;

Testimonial9017.defaultProps = {
  background783f17: {
    styles: {},
  },
  h1af34ec: {
    text: 'Testimonials',
    styles: {},
  },
  cards: [],
};

Testimonial9017.propTypes = {
  /**
   * Background prop for background783f17.
   */
  background783f17: backgroundType,
  /**
   * Text prop for h1af34ec.
   */
  h1af34ec: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for p9d1e0c.
     */
    p9d1e0c: textType,
    /**
     * Text prop for spanfb7e6c.
     */
    spanfb7e6c: textType,
    /**
     * Text prop for span5a5f22.
     */
    span5a5f22: textType,
    /**
     * Text prop for spancb9f5c.
     */
    spancb9f5c: textType,
    /**
     * Image prop for img21a991.
     */
    img21a991: imageType,
    /**
     * Button prop for buttona565e9.
     */
    buttona565e9: buttonType,
  })),
};

export default Testimonial9017;
