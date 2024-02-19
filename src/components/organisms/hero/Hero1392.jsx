import React from 'react';

import {
  backgroundType,
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Hero1392Icon from './Hero1392.icon';

const Hero1392 = (props) => {
  const {
    background9bc5b7,
    h1d22095,
    pa2810f,
    img276e68,
    button174110,
    button5ecf4d,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background9bc5b7"
      styles={background9bc5b7.styles}
      customProps={background9bc5b7}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <StyledImage
            className="object-cover object-center rounded"
            alt={img276e68.alt}
            src={img276e68.src}
            id="img276e68"
            styles={img276e68.styles}
            customProps={img276e68}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <StyledH1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            id="h1d22095"
            styles={h1d22095.styles}
            customProps={h1d22095}
          >
            {h1d22095.text}
            <br className="hidden lg:inline-block" />
          </StyledH1>
          <StyledParagraph
            className="mb-8 leading-relaxed"
            id="pa2810f"
            styles={pa2810f.styles}
            customProps={pa2810f}
          >
            {pa2810f.text}
          </StyledParagraph>
          <div className="flex justify-center">
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="button174110"
              styles={button174110.styles}
              onClick={button174110.onClick}
              customProps={button174110}
            >
              {button174110.text}
            </StyledButton>
            <StyledButton
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              id="button5ecf4d"
              styles={button5ecf4d.styles}
              onClick={button5ecf4d.onClick}
              customProps={button5ecf4d}
            >
              {button5ecf4d.text}
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Hero1392.icon = Hero1392Icon;

Hero1392.defaultProps = {
  background9bc5b7: {
    styles: {},
  },
  h1d22095: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pa2810f: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  img276e68: {
    styles: {},
    src: 'https://dummyimage.com/720x600',
    alt: '',
  },
  button174110: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button5ecf4d: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
};

Hero1392.propTypes = {
  /**
   * Background prop for background9bc5b7.
   */
  background9bc5b7: backgroundType,
  /**
   * Text prop for h1d22095.
   */
  h1d22095: textType,
  /**
   * Text prop for pa2810f.
   */
  pa2810f: textType,
  /**
   * Image prop for img276e68.
   */
  img276e68: imageType,
  /**
   * Button prop for button174110.
   */
  button174110: buttonType,
  /**
   * Button prop for button5ecf4d.
   */
  button5ecf4d: buttonType,
};

export default Hero1392;
