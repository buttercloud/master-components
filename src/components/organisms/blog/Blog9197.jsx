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
  StyledSpan,
} from '../../assets/customStyledComponents';
import Blog9197Icon from './Blog9197.icon';

const Blog9197 = (props) => {
  const {
    background27cf8c,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font overflow-hidden"
      id="background27cf8c"
      styles={background27cf8c.styles}
      customProps={background27cf8c}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {
            cards?.map((card) => (
              <div
                className="p-12 md:w-1/2 flex flex-col items-start"
                id={card.id}
                key={card.key}
              >
                <StyledSpan
                  className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"
                  id={card.id + 'spance9288'}
                  styles={card.spance9288?.styles}
                  customProps={card.spance9288}
                >
                  {card.spance9288?.text}
                </StyledSpan>
                <StyledH2
                  className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4"
                  id={card.id + 'h21320bb'}
                  styles={card.h21320bb?.styles}
                  customProps={card.h21320bb}
                >
                  {card.h21320bb?.text}
                </StyledH2>
                <StyledParagraph
                  className="leading-relaxed mb-8"
                  id={card.id + 'pbe19e1'}
                  styles={card.pbe19e1?.styles}
                  customProps={card.pbe19e1}
                >
                  {card.pbe19e1?.text}
                </StyledParagraph>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  <StyledButton
                    className="text-indigo-500 inline-flex items-center"
                    id={card.id + 'button25a354'}
                    styles={card.button25a354?.styles}
                    onClick={card.button25a354?.onClick}
                    customProps={card.button25a354}
                  >
                    {card.button25a354?.text}
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
                  <StyledSpan
                    className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                    id={card.id + 'span2afc7d'}
                    styles={card.span2afc7d?.styles}
                    customProps={card.span2afc7d}
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {card.span2afc7d?.text}
                  </StyledSpan>
                  <StyledSpan
                    className="text-gray-400 inline-flex items-center leading-none text-sm"
                    id={card.id + 'span26ef0a'}
                    styles={card.span26ef0a?.styles}
                    customProps={card.span26ef0a}
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    {card.span26ef0a?.text}
                  </StyledSpan>
                </div>
                <StyledButton
                  className="inline-flex items-center"
                  id={card.id + 'button5920f8'}
                  styles={card.button5920f8?.styles}
                  onClick={card.button5920f8?.onClick}
                  customProps={card.button5920f8}
                >
                  <StyledImage
                    alt={card.imgbbfa09?.alt}
                    src={card.imgbbfa09?.src}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    id={card.id + 'imgbbfa09'}
                    styles={card.imgbbfa09?.styles}
                    customProps={card.imgbbfa09}
                  />
                  <StyledSpan
                    className="flex-grow flex flex-col pl-4"
                    id={card.id + 'span910327'}
                    styles={card.span910327?.styles}
                  >
                    <StyledSpan
                      className="title-font font-medium text-gray-900"
                      id={card.id + 'span249c4d'}
                      styles={card.span249c4d?.styles}
                      customProps={card.span249c4d}
                    >
                      {card.span249c4d?.text}
                    </StyledSpan>
                    <StyledSpan
                      className="text-gray-400 text-xs tracking-widest mt-0.5"
                      id={card.id + 'span0aea65'}
                      styles={card.span0aea65?.styles}
                      customProps={card.span0aea65}
                    >
                      {card.span0aea65?.text}
                    </StyledSpan>
                  </StyledSpan>
                </StyledButton>
              </div>
            ))
          }
        </div>
      </div>
    </StyledContainer>
  );
};

Blog9197.icon = Blog9197Icon;

Blog9197.defaultProps = {
  background27cf8c: {
    styles: {},
  },
  cards: [],
};

Blog9197.propTypes = {
  /**
   * Background prop for background27cf8c.
   */
  background27cf8c: backgroundType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h21320bb..
     */
    h21320bb: textType,
    /**
     * Text prop for pbe19e1..
     */
    pbe19e1: textType,
    /**
     * Text prop for spance9288..
     */
    spance9288: textType,
    /**
     * Text prop for span2afc7d..
     */
    span2afc7d: textType,
    /**
     * Text prop for span26ef0a..
     */
    span26ef0a: textType,
    /**
     * Text prop for span910327..
     */
    span910327: textType,
    /**
     * Text prop for span249c4d..
     */
    span249c4d: textType,
    /**
     * Text prop for span0aea65..
     */
    span0aea65: textType,
    /**
     * Image prop for imgbbfa09..
     */
    imgbbfa09: imageType,
    /**
     * Button prop for button25a354..
     */
    button25a354: buttonType,
    /**
     * Button prop for button5920f8..
     */
    button5920f8: buttonType,
  })),
};

export default Blog9197;
