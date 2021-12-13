import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledImage,
  StyledParagraph,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Gallery4193Icon from './Gallery4193.icon';

const Gallery4193 = (props) => {
  const {
    backgroundaf8702,
    h2f1964d,
    h22d439d,
    h2140e87,
    p9aab88,
    pc94756,
    p2a9dac,
    imgbe31d6,
    imgb832fd,
    img5b3772,
    button582550,
    button70d430,
    button685786,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundaf8702"
      styles={backgroundaf8702.styles}
      customProps={backgroundaf8702}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <StyledImage
              alt={imgbe31d6.alt}
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src={imgbe31d6.src}
              id="imgbe31d6"
              styles={imgbe31d6.styles}
              customProps={imgbe31d6}
            />
            <div className="text-center relative z-10 w-full">
              <StyledH2
                className="text-2xl text-gray-900 font-medium title-font mb-2"
                id="h2f1964d"
                styles={h2f1964d.styles}
                customProps={h2f1964d}
              >
                {h2f1964d.text}
              </StyledH2>
              <StyledParagraph
                className="leading-relaxed"
                id="p9aab88"
                styles={p9aab88.styles}
                customProps={p9aab88}
              >
                {p9aab88.text}
              </StyledParagraph>
              <StyledButton
                className="mt-3 text-indigo-500 inline-flex items-center"
                id="button582550"
                styles={button582550.styles}
                onClick={button582550.onClick}
                customProps={button582550}
              >
                {button582550.text}
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
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <StyledImage
                  alt={imgb832fd.alt}
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={imgb832fd.src}
                  id="imgb832fd"
                  styles={imgb832fd.styles}
                  customProps={imgb832fd}
                />
                <div className="text-center relative z-10 w-full">
                  <StyledH2
                    className="text-xl text-gray-900 font-medium title-font mb-2"
                    id="h22d439d"
                    styles={h22d439d.styles}
                    customProps={h22d439d}
                  >
                    {h22d439d.text}
                  </StyledH2>
                  <StyledParagraph
                    className="leading-relaxed"
                    id="pc94756"
                    styles={pc94756.styles}
                    customProps={pc94756}
                  >
                    {pc94756.text}
                  </StyledParagraph>
                  <StyledButton
                    className="mt-3 text-indigo-500 inline-flex items-center"
                    id="button70d430"
                    styles={button70d430.styles}
                    onClick={button70d430.onClick}
                    customProps={button70d430}
                  >
                    {button70d430.text}
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
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <StyledImage
                  alt={img5b3772.alt}
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={img5b3772.src}
                  id="img5b3772"
                  styles={img5b3772.styles}
                  customProps={img5b3772}
                />
                <div className="text-center relative z-10 w-full">
                  <StyledH2
                    className="text-xl text-gray-900 font-medium title-font mb-2"
                    id="h2140e87"
                    styles={h2140e87.styles}
                    customProps={h2140e87}
                  >
                    {h2140e87.text}
                  </StyledH2>
                  <StyledParagraph
                    className="leading-relaxed"
                    id="p2a9dac"
                    styles={p2a9dac.styles}
                    customProps={p2a9dac}
                  >
                    {p2a9dac.text}
                  </StyledParagraph>
                  <StyledButton
                    className="mt-3 text-indigo-500 inline-flex items-center"
                    id="button685786"
                    styles={button685786.styles}
                    onClick={button685786.onClick}
                    customProps={button685786}
                  >
                    {button685786.text}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Gallery4193.icon = Gallery4193Icon;

Gallery4193.defaultProps = {
  backgroundaf8702: {
    styles: {},
  },
  h2f1964d: {
    text: 'Lorem ipsum',
    styles: {},
  },
  h22d439d: {
    text: 'Lorem ipsum',
    styles: {},
  },
  h2140e87: {
    text: 'Lorem ipsum',
    styles: {},
  },
  p9aab88: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  pc94756: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  p2a9dac: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  imgbe31d6: {
    styles: {},
    src: 'https://dummyimage.com/820x340',
    alt: '',
  },
  imgb832fd: {
    styles: {},
    src: 'https://dummyimage.com/542x460',
    alt: '',
  },
  img5b3772: {
    styles: {},
    src: 'https://dummyimage.com/542x420',
    alt: '',
  },
  button582550: {
    text: 'Learn More',
    styles: {},
    onClick: () => {},
  },
  button70d430: {
    text: 'Learn More',
    styles: {},
    onClick: () => {},
  },
  button685786: {
    text: 'Learn More',
    styles: {},
    onClick: () => {},
  },
};

Gallery4193.propTypes = {
  /**
   * Background prop for backgroundaf8702.
   */
  backgroundaf8702: backgroundType,
  /**
   * Text prop for h2f1964d.
   */
  h2f1964d: textType,
  /**
   * Text prop for h22d439d.
   */
  h22d439d: textType,
  /**
   * Text prop for h2140e87.
   */
  h2140e87: textType,
  /**
   * Text prop for p9aab88.
   */
  p9aab88: textType,
  /**
   * Text prop for pc94756.
   */
  pc94756: textType,
  /**
   * Text prop for p2a9dac.
   */
  p2a9dac: textType,
  /**
   * Image prop for imgbe31d6.
   */
  imgbe31d6: imageType,
  /**
   * Image prop for imgb832fd.
   */
  imgb832fd: imageType,
  /**
   * Image prop for img5b3772.
   */
  img5b3772: imageType,
  /**
   * Button prop for button582550.
   */
  button582550: buttonType,
  /**
   * Button prop for button70d430.
   */
  button70d430: buttonType,
  /**
   * Button prop for button685786.
   */
  button685786: buttonType,
};

export default Gallery4193;
