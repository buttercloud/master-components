import React from 'react';
// import PropTypes from 'prop-types';
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
import Statistic9641Icon from './Statistic9641.icon';

const Statistic9641 = (props) => {
  const {
    backgroundf7a98c,
    h13680ec,
    h295beec,
    h2783828,
    h27396c1,
    h2eebf30,
    pacb32f,
    pb98282,
    p822fe1,
    pa0c24f,
    pabc23f,
    imgff3600,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundf7a98c"
      styles={backgroundf7a98c.styles}
      customProps={backgroundf7a98c}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <StyledH1
              className="title-font font-medium text-xl mb-2 text-gray-900"
              id="h13680ec"
              styles={h13680ec.styles}
              customProps={h13680ec}
            >
              {h13680ec.text}
            </StyledH1>
            <StyledParagraph
              className="leading-relaxed"
              id="pabc23f"
              styles={pabc23f.styles}
              customProps={pabc23f}
            >
              {pabc23f.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium text-3xl text-gray-900"
              id="h295beec"
              styles={h295beec.styles}
              customProps={h295beec}
            >
              {h295beec.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="pacb32f"
              styles={pacb32f.styles}
              customProps={pacb32f}
            >
              {pacb32f.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium text-3xl text-gray-900"
              id="h2783828"
              styles={h2783828.styles}
              customProps={h2783828}
            >
              {h2783828.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="pb98282"
              styles={pb98282.styles}
              customProps={pb98282}
            >
              {pb98282.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium text-3xl text-gray-900"
              id="h27396c1"
              styles={h27396c1.styles}
              customProps={h27396c1}
            >
              {h27396c1.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="p822fe1"
              styles={p822fe1.styles}
              customProps={p822fe1}
            >
              {p822fe1.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium text-3xl text-gray-900"
              id="h2eebf30"
              styles={h2eebf30.styles}
              customProps={h2eebf30}
            >
              {h2eebf30.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="pa0c24f"
              styles={pa0c24f.styles}
              customProps={pa0c24f}
            >
              {pa0c24f.text}
            </StyledParagraph>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <StyledImage
            className="object-cover object-center w-full h-full"
            src={imgff3600.src}
            alt={imgff3600.alt}
            id="imgff3600"
            styles={imgff3600.styles}
            customProps={imgff3600}
          />
        </div>
      </div>
    </StyledContainer>
  );
};

Statistic9641.icon = Statistic9641Icon;

Statistic9641.defaultProps = {
  backgroundf7a98c: {
    styles: {},
  },
  h13680ec: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    styles: {},
  },
  h295beec: {
    text: '2.7K',
    styles: {},
  },
  h2783828: {
    text: '1.8K',
    styles: {},
  },
  h27396c1: {
    text: '35',
    styles: {},
  },
  h2eebf30: {
    text: '4',
    styles: {},
  },
  pacb32f: {
    text: 'Users',
    styles: {},
  },
  pb98282: {
    text: 'Subscribers',
    styles: {},
  },
  p822fe1: {
    text: 'Downloads',
    styles: {},
  },
  pa0c24f: {
    text: 'Products',
    styles: {},
  },
  pabc23f: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  imgff3600: {
    styles: {},
    src: 'https://dummyimage.com/600x300',
    alt: '',
  },
};

Statistic9641.propTypes = {
  /**
   * Background prop for backgroundf7a98c.
   */
  backgroundf7a98c: backgroundType,
  /**
   * Text prop for h13680ec.
   */
  h13680ec: textType,
  /**
   * Text prop for h295beec.
   */
  h295beec: textType,
  /**
   * Text prop for h2783828.
   */
  h2783828: textType,
  /**
   * Text prop for h27396c1.
   */
  h27396c1: textType,
  /**
   * Text prop for h2eebf30.
   */
  h2eebf30: textType,
  /**
   * Text prop for pacb32f.
   */
  pacb32f: textType,
  /**
   * Text prop for pb98282.
   */
  pb98282: textType,
  /**
   * Text prop for p822fe1.
   */
  p822fe1: textType,
  /**
   * Text prop for pa0c24f.
   */
  pa0c24f: textType,
  /**
   * Text prop for pabc23f.
   */
  pabc23f: textType,
  /**
   * Image prop for imgff3600.
   */
  imgff3600: imageType,
};

export default Statistic9641;
