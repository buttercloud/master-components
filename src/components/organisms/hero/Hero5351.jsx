import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledImage,
  StyledParagraph,
  StyledH1,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Hero5351Icon from './Hero5351.icon';

const Hero5351 = (props) => {
  const {
    backgroundee0535,
    h1b7283b,
    p8ca5ad,
    img956dea,
    button29e10e,
    button2c9a02,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundee0535"
      styles={backgroundee0535.styles}
      customProps={backgroundee0535}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <StyledH1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            id="h1b7283b"
            styles={h1b7283b.styles}
            customProps={h1b7283b}
          >
            {h1b7283b.text}
            <br className="hidden lg:inline-block" />
          </StyledH1>
          <StyledParagraph
            className="mb-8 leading-relaxed"
            id="p8ca5ad"
            styles={p8ca5ad.styles}
            customProps={p8ca5ad}
          >
            {p8ca5ad.text}
          </StyledParagraph>
          <div className="flex justify-center">
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="button29e10e"
              styles={button29e10e.styles}
              onClick={button29e10e.onClick}
              customProps={button29e10e}
            >
              {button29e10e.text}
            </StyledButton>
            <StyledButton
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              id="button2c9a02"
              styles={button2c9a02.styles}
              onClick={button2c9a02.onClick}
              customProps={button2c9a02}
            >
              {button2c9a02.text}
            </StyledButton>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <StyledImage
            className="object-cover object-center rounded"
            alt={img956dea.alt}
            src={img956dea.src}
            id="img956dea"
            styles={img956dea.styles}
            customProps={img956dea}
          />
        </div>
      </div>
    </StyledContainer>
  );
};

Hero5351.icon = Hero5351Icon;

Hero5351.defaultProps = {
  backgroundee0535: {
    styles: {},
  },
  h1b7283b: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p8ca5ad: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  img956dea: {
    styles: {},
    src: 'https://dummyimage.com/720x600',
    alt: '',
  },
  button29e10e: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button2c9a02: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
};

Hero5351.propTypes = {
  /**
   * Background prop for backgroundee0535.
   */
  backgroundee0535: backgroundType,
  /**
   * Text prop for h1b7283b.
   */
  h1b7283b: textType,
  /**
   * Text prop for p8ca5ad.
   */
  p8ca5ad: textType,
  /**
   * Image prop for img956dea.
   */
  img956dea: imageType,
  /**
   * Button prop for button29e10e.
   */
  button29e10e: buttonType,
  /**
   * Button prop for button2c9a02.
   */
  button2c9a02: buttonType,
};

export default Hero5351;
