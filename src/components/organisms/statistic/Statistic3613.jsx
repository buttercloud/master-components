import React from 'react';

import {
  backgroundType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledH2,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Statistic3613Icon from './Statistic3613.icon';

const Statistic3613 = (props) => {
  const {
    backgroundad868e,
    h2d23421,
    h2adacae,
    h2d50e1a,
    h23556ca,
    pacb736,
    p9bfbdf,
    p72ab63,
    pd38e7d,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundad868e"
      styles={backgroundad868e.styles}
      customProps={backgroundad868e}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              id="h2d23421"
              styles={h2d23421.styles}
              customProps={h2d23421}
            >
              {h2d23421.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="pacb736"
              styles={pacb736.styles}
              customProps={pacb736}
            >
              {pacb736.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              id="h2adacae"
              styles={h2adacae.styles}
              customProps={h2adacae}
            >
              {h2adacae.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="p9bfbdf"
              styles={p9bfbdf.styles}
              customProps={p9bfbdf}
            >
              {p9bfbdf.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              id="h2d50e1a"
              styles={h2d50e1a.styles}
              customProps={h2d50e1a}
            >
              {h2d50e1a.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="p72ab63"
              styles={p72ab63.styles}
              customProps={p72ab63}
            >
              {p72ab63.text}
            </StyledParagraph>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <StyledH2
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              id="h23556ca"
              styles={h23556ca.styles}
              customProps={h23556ca}
            >
              {h23556ca.text}
            </StyledH2>
            <StyledParagraph
              className="leading-relaxed"
              id="pd38e7d"
              styles={pd38e7d.styles}
              customProps={pd38e7d}
            >
              {pd38e7d.text}
            </StyledParagraph>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Statistic3613.icon = Statistic3613Icon;

Statistic3613.defaultProps = {
  backgroundad868e: {
    styles: {},
  },
  h2d23421: {
    text: '2.7k',
    styles: {},
  },
  h2adacae: {
    text: '1.8k',
    styles: {},
  },
  h2d50e1a: {
    text: '35',
    styles: {},
  },
  h23556ca: {
    text: '4',
    styles: {},
  },
  pacb736: {
    text: 'Users',
    styles: {},
  },
  p9bfbdf: {
    text: 'Subscribers',
    styles: {},
  },
  p72ab63: {
    text: 'Downloads',
    styles: {},
  },
  pd38e7d: {
    text: 'Products',
    styles: {},
  },
};

Statistic3613.propTypes = {
  /**
   * Background prop for backgroundad868e.
   */
  backgroundad868e: backgroundType,
  /**
   * Text prop for h2d23421.
   */
  h2d23421: textType,
  /**
   * Text prop for h2adacae.
   */
  h2adacae: textType,
  /**
   * Text prop for h2d50e1a.
   */
  h2d50e1a: textType,
  /**
   * Text prop for h23556ca.
   */
  h23556ca: textType,
  /**
   * Text prop for pacb736.
   */
  pacb736: textType,
  /**
   * Text prop for p9bfbdf.
   */
  p9bfbdf: textType,
  /**
   * Text prop for p72ab63.
   */
  p72ab63: textType,
  /**
   * Text prop for pd38e7d.
   */
  pd38e7d: textType,
};

export default Statistic3613;
