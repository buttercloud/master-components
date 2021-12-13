import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledParagraph,
  StyledH1,
  StyledH2,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Content8679Icon from './Content8679.icon';

const Content8679 = (props) => {
  const {
    background3d5683,
    h1842ec9,
    h2bcff9f,
    p6f7012,
    buttonb6264e,
    links,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background3d5683"
      styles={background3d5683.styles}
      customProps={background3d5683}
    >
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            id="h1842ec9"
            styles={h1842ec9.styles}
            customProps={h1842ec9}
          >
            {h1842ec9.text}
          </StyledH1>
          <StyledParagraph
            className="leading-relaxed text-base"
            id="p6f7012"
            styles={p6f7012.styles}
            customProps={p6f7012}
          >
            {p6f7012.text}
          </StyledParagraph>
          <StyledButton
            className="text-indigo-500 inline-flex items-center mt-4"
            id="buttonb6264e"
            styles={buttonb6264e.styles}
            onClick={buttonb6264e.onClick}
            customProps={buttonb6264e}
          >
            {buttonb6264e.text}
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
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <StyledH2
            className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3"
            id="h2bcff9f"
            styles={h2bcff9f.styles}
            customProps={h2bcff9f}
          >
            {h2bcff9f.text}
          </StyledH2>
          <nav className="flex flex-wrap list-none -mb-1">
            {
              links?.map((link) => (
                <li
                  className="lg:w-1/3 mb-1 w-1/2"
                  id={link.id}
                  key={link.id}
                >
                  <StyledButton
                    className="text-gray-600 hover:text-gray-800"
                    id={link.id + 'button85f531'}
                    styles={link.button85f531?.styles}
                    onClick={link.button85f531?.onClick}
                    customProps={link.button85f531}
                  >
                    {link.button85f531?.text}
                  </StyledButton>
                </li>
              ))
            }
          </nav>
        </div>
      </div>
    </StyledContainer>
  );
};

Content8679.icon = Content8679Icon;

Content8679.defaultProps = {
  background3d5683: {
    styles: {},
  },
  h1842ec9: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  h2bcff9f: {
    text: 'CATEGORIES',
    styles: {},
  },
  p6f7012: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  buttonb6264e: {
    text: 'Learn More',
    styles: {},
    onClick: () => {},
  },
  links: [],
};

Content8679.propTypes = {
  /**
   * Background prop for background3d5683.
   */
  background3d5683: backgroundType,
  /**
   * Text prop for h1842ec9.
   */
  h1842ec9: textType,
  /**
   * Text prop for h2bcff9f.
   */
  h2bcff9f: textType,
  /**
   * Text prop for p6f7012.
   */
  p6f7012: textType,
  /**
   * Button prop for buttonb6264e.
   */
  buttonb6264e: buttonType,
  /**
   * Links array
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button prop for button85f531.
     */
    button85f531: buttonType,
  })),
};

export default Content8679;
