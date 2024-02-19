import React from 'react';

import {
  backgroundType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledH1,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Gallery3216Icon from './Gallery3216.icon';

const Gallery3216 = (props) => {
  const {
    background12deb3,
    h1143f54,
    pc26bb3,
    img384307,
    img8fb54b,
    imgef1c28,
    img48fa24,
    imgd35420,
    img120329,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background12deb3"
      styles={background12deb3.styles}
      customProps={background12deb3}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
            id="h1143f54"
            styles={h1143f54.styles}
            customProps={h1143f54}
          >
            {h1143f54.text}
          </StyledH1>
          <StyledParagraph
            className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"
            id="pc26bb3"
            styles={pc26bb3.styles}
            customProps={pc26bb3}
          >
            {pc26bb3.text}
          </StyledParagraph>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <StyledImage
                alt={img384307.alt}
                className="w-full object-cover h-full object-center block"
                src={img384307.src}
                id="img384307"
                styles={img384307.styles}
                customProps={img384307}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StyledImage
                alt={img8fb54b.alt}
                className="w-full object-cover h-full object-center block"
                src={img8fb54b.src}
                id="img8fb54b"
                styles={img8fb54b.styles}
                customProps={img8fb54b}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <StyledImage
                alt={imgef1c28.alt}
                className="w-full h-full object-cover object-center block"
                src={imgef1c28.src}
                id="imgef1c28"
                styles={imgef1c28.styles}
                customProps={imgef1c28}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <StyledImage
                alt={img48fa24.alt}
                className="w-full h-full object-cover object-center block"
                src={img48fa24.src}
                id="img48fa24"
                styles={img48fa24.styles}
                customProps={img48fa24}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StyledImage
                alt={imgd35420.alt}
                className="w-full object-cover h-full object-center block"
                src={imgd35420.src}
                id="imgd35420"
                styles={imgd35420.styles}
                customProps={imgd35420}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StyledImage
                alt={img120329.alt}
                className="w-full object-cover h-full object-center block"
                src={img120329.src}
                id="img120329"
                styles={img120329.styles}
                customProps={img120329}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Gallery3216.icon = Gallery3216Icon;

Gallery3216.defaultProps = {
  background12deb3: {
    styles: {},
  },
  h1143f54: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  pc26bb3: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  img384307: {
    styles: {},
    src: 'https://dummyimage.com/500x300',
    alt: '',
  },
  img8fb54b: {
    styles: {},
    src: 'https://dummyimage.com/501x301',
    alt: '',
  },
  imgef1c28: {
    styles: {},
    src: 'https://dummyimage.com/600x360',
    alt: '',
  },
  img48fa24: {
    styles: {},
    src: 'https://dummyimage.com/601x361',
    alt: '',
  },
  imgd35420: {
    styles: {},
    src: 'https://dummyimage.com/502x302',
    alt: '',
  },
  img120329: {
    styles: {},
    src: 'https://dummyimage.com/503x303',
    alt: '',
  },
};

Gallery3216.propTypes = {
  /**
   * Background prop for background12deb3.
   */
  background12deb3: backgroundType,
  /**
   * Text prop for h1143f54.
   */
  h1143f54: textType,
  /**
   * Text prop for pc26bb3.
   */
  pc26bb3: textType,
  /**
   * Image prop for img384307.
   */
  img384307: imageType,
  /**
   * Image prop for img8fb54b.
   */
  img8fb54b: imageType,
  /**
   * Image prop for imgef1c28.
   */
  imgef1c28: imageType,
  /**
   * Image prop for img48fa24.
   */
  img48fa24: imageType,
  /**
   * Image prop for imgd35420.
   */
  imgd35420: imageType,
  /**
   * Image prop for img120329.
   */
  img120329: imageType,
};

export default Gallery3216;
