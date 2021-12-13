import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledImage,
  StyledParagraph,
  StyledH1,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Content8712Icon from './Content8712.icon';

const Content8712 = (props) => {
  const {
    backgroundc0e726,
    h1ee682b,
    pfb38d0,
    cards,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundc0e726"
      styles={backgroundc0e726.styles}
      customProps={backgroundc0e726}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500" />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <StyledH1
              className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"
              id="h1ee682b"
              styles={h1ee682b.styles}
              customProps={h1ee682b}
            >
              {h1ee682b.text}
            </StyledH1>
            <StyledParagraph
              className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"
              id="pfb38d0"
              styles={pfb38d0.styles}
              customProps={pfb38d0}
            >
              {pfb38d0.text}
            </StyledParagraph>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            cards?.map((card) => (
              <div
                className="p-4 md:w-1/3 sm:mb-0 mb-6"
                id={card.id}
                key={card.id}
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <StyledImage
                    alt={card.img3d2872?.alt}
                    className="object-cover object-center h-full w-full"
                    src={card.img3d2872?.src}
                    id={card.id + 'img3d2872'}
                    styles={card.img3d2872?.styles}
                    customProps={card.img3d2872}
                  />
                </div>
                <StyledH2
                  className="text-xl font-medium title-font text-gray-900 mt-5"
                  id={card.id + 'h269c32a'}
                  styles={card.h269c32a?.styles}
                  customProps={card.h269c32a}
                >
                  {card.h269c32a?.text}
                </StyledH2>
                <StyledParagraph
                  className="text-base leading-relaxed mt-2"
                  id={card.id + 'pff6413'}
                  styles={card.pff6413?.styles}
                  customProps={card.pff6413}
                >
                  {card.pff6413?.text}
                </StyledParagraph>
                <StyledButton
                  className="text-indigo-500 inline-flex items-center mt-3"
                  id={card.id + 'button5911fd'}
                  styles={card.button5911fd?.styles}
                  onClick={card.button5911fd?.onClick}
                  customProps={card.button5911fd}
                >
                  {card.button5911fd?.text}
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
      </div>
    </StyledContainer>
  );
};

Content8712.icon = Content8712Icon;

Content8712.defaultProps = {
  backgroundc0e726: {
    styles: {},
  },
  h1ee682b: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pfb38d0: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  cards: [],
};

Content8712.propTypes = {
  /**
   * Background prop for backgroundc0e726.
   */
  backgroundc0e726: backgroundType,
  /**
   * Text prop for h1ee682b.
   */
  h1ee682b: textType,
  /**
   * Text prop for pfb38d0.
   */
  pfb38d0: textType,
  /**
   * Cards array
   */
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h269c32a.
     */
    h269c32a: textType,
    /**
     * Text prop for pff6413.
     */
    pff6413: textType,
    /**
     * Image prop for img3d2872.
     */
    img3d2872: imageType,
    /**
     * Button prop for button5911fd.
     */
    button5911fd: buttonType,
  })),
};

export default Content8712;
