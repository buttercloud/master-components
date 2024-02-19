import PropTypes from 'prop-types';
import React from 'react';

import {
  backgroundType,
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledImage,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Header0248Icon from './Header0248.icon';

const Header0248 = (props) => {
  const {
    backgroundf06d74,
    spanb2ed6e,
    button9d5b64,
    buttonbd730b,
    links,
    logo,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="backgroundf06d74"
      styles={backgroundf06d74?.styles}
      onClick={backgroundf06d74?.onClick}
      customProps={backgroundf06d74}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {
            links?.map((link) => (
              <div key={link.id} id={link.id}>
                <StyledButton
                  className="mr-5 hover:text-gray-900"
                  id={link.id + 'button22f896'}
                  styles={link.button22f896?.styles}
                  onClick={link.button22f896?.onClick}
                  customProps={link.button22f896}
                >
                  {link.button22f896?.text}
                </StyledButton>
              </div>
            ))
          }
        </nav>
        <StyledButton
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          id="buttonbd730b"
          styles={buttonbd730b.styles}
          onClick={buttonbd730b.onClick}
          customProps={buttonbd730b}
        >
          <StyledImage
            src={logo?.src}
            alt={logo?.alt}
            customProps={logo}
          />
          <StyledSpan
            className="ml-3 text-xl"
            id="spanb2ed6e"
            styles={spanb2ed6e.styles}
            onClick={spanb2ed6e?.onClick}
            customProps={spanb2ed6e}
          >
            {spanb2ed6e.text}
          </StyledSpan>
        </StyledButton>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <StyledButton
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            id="button9d5b64"
            styles={button9d5b64.styles}
            onClick={button9d5b64.onClick}
            customProps={button9d5b64}
          >
            {button9d5b64.text}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </StyledButton>
        </div>
      </div>
    </StyledContainer>
  );
};

Header0248.icon = Header0248Icon;

Header0248.defaultProps = {
  backgroundf06d74: {
    styles: {},
  },
  logo: {},
  spanb2ed6e: {
    text: 'MyWebsite',
    styles: {},
  },
  button9d5b64: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  links: [],
  buttonbd730b: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
};

Header0248.propTypes = {
  /**
   * Background prop for backgroundf06d74.
   */
  backgroundf06d74: backgroundType,
  /**
  * Logo.
  */
  logo: imageType,
  /**
   * Text prop for spanb2ed6e.
   */
  spanb2ed6e: textType,
  /**
   * Button prop for button9d5b64.
   */
  button9d5b64: buttonType,
  /**
   * Button prop for buttonbd730b.
   */
  buttonbd730b: buttonType,
  /**
   * Links array
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button prop for button22f896.
     */
    button22f896: buttonType,
  })),
};

export default Header0248;
