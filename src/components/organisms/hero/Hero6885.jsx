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
import Hero6885Icon from './Hero6885.icon';

const Hero6885 = (props) => {
  const {
    background7d500f,
    h1d6bf6d,
    p4f092f,
    img3b4220,
    button589f2f,
    buttonae8ba7,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background7d500f"
      styles={background7d500f.styles}
      customProps={background7d500f}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <StyledImage
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={img3b4220.alt}
          src={img3b4220.src}
          id="img3b4220"
          styles={img3b4220.styles}
          customProps={img3b4220}
        />
        <div className="text-center lg:w-2/3 w-full">
          <StyledH1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            id="h1d6bf6d"
            styles={h1d6bf6d.styles}
            customProps={h1d6bf6d}
          >
            {h1d6bf6d.text}
          </StyledH1>
          <StyledParagraph
            className="mb-8 leading-relaxed"
            id="p4f092f"
            styles={p4f092f.styles}
            customProps={p4f092f}
          >
            {p4f092f.text}
          </StyledParagraph>
          <div className="flex justify-center">
            <StyledButton
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="button589f2f"
              styles={button589f2f.styles}
              onClick={button589f2f.onClick}
              customProps={button589f2f}
            >
              {button589f2f.text}
            </StyledButton>
            <StyledButton
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              id="buttonae8ba7"
              styles={buttonae8ba7.styles}
              onClick={buttonae8ba7.onClick}
              customProps={buttonae8ba7}
            >
              {buttonae8ba7.text}
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Hero6885.icon = Hero6885Icon;

Hero6885.defaultProps = {
  background7d500f: {
    styles: {},
  },
  h1d6bf6d: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p4f092f: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  img3b4220: {
    styles: {},
    src: 'https://dummyimage.com/720x600',
    alt: '',
  },
  button589f2f: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttonae8ba7: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
};

Hero6885.propTypes = {
  /**
   * Background prop for background7d500f.
   */
  background7d500f: backgroundType,
  /**
   * Text prop for h1d6bf6d.
   */
  h1d6bf6d: textType,
  /**
   * Text prop for p4f092f.
   */
  p4f092f: textType,
  /**
   * Image prop for img3b4220.
   */
  img3b4220: imageType,
  /**
   * Button prop for button589f2f.
   */
  button589f2f: buttonType,
  /**
   * Button prop for buttonae8ba7.
   */
  buttonae8ba7: buttonType,
};

export default Hero6885;
