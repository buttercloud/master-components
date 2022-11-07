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
  StyledSpan,
} from '../../assets/customStyledComponents';
import Testimonial7732Icon from './Testimonial7732.icon';

const Testimonial7732 = (props) => {
  const {
    background2f0ae7, h2d114af, p1a8e93, pc97e71, span03f484,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background2f0ae7"
      styles={background2f0ae7.styles}
      customProps={background2f0ae7}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>
          <StyledParagraph
            className="leading-relaxed text-lg"
            id="p1a8e93"
            styles={p1a8e93.styles}
            customProps={p1a8e93}
          >
            {p1a8e93.text}
          </StyledParagraph>
          <StyledSpan
            className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
            id="span03f484"
            styles={span03f484.styles}
            customProps={span03f484}
          />
          <StyledH2
            className="text-gray-900 font-medium title-font tracking-wider text-sm"
            id="h2d114af"
            styles={h2d114af.styles}
            customProps={h2d114af}
          >
            {h2d114af.text}
          </StyledH2>
          <StyledParagraph
            className="text-gray-500"
            id="pc97e71"
            styles={pc97e71.styles}
            customProps={pc97e71}
          >
            {pc97e71.text}
          </StyledParagraph>
        </div>
      </div>
    </StyledContainer>
  );
};

Testimonial7732.icon = Testimonial7732Icon;

Testimonial7732.defaultProps = {
  background2f0ae7: {
    styles: {},
  },
  h2d114af: {
    text: 'Lorem ipsum',
    styles: {},
  },
  p1a8e93: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  pc97e71: {
    text: 'Senior Product Manager',
    styles: {},
  },
  span03f484: {
    text: 'Lorem ipsum',
    styles: {},
  },
};

Testimonial7732.propTypes = {
  /**
   * Background prop for background2f0ae7.
   */
  background2f0ae7: backgroundType,
  /**
   * Text prop for h2d114af.
   */
  h2d114af: textType,
  /**
   * Text prop for p1a8e93.
   */
  p1a8e93: textType,
  /**
   * Text prop for pc97e71.
   */
  pc97e71: textType,
  /**
   * Text prop for span03f484.
   */
  span03f484: textType,
};

export default Testimonial7732;
