import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledContainer,
  StyledSpan,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Header0069Icon from './Header0069.icon';

const Header0069 = (props) => {
  const {
    background77b0e9,
    span822e26,
    buttoneefcd5,
    button13a3a2,
    links,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background77b0e9"
      styles={background77b0e9?.styles}
      onClick={background77b0e9?.onClick}
      customProps={background77b0e9}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <StyledButton
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          id="button13a3a2"
          styles={button13a3a2.styles}
          onClick={button13a3a2.onClick}
          customProps={button13a3a2}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <StyledSpan
            className="ml-3 text-xl"
            id="span822e26"
            styles={span822e26.styles}
            onClick={span822e26?.onClick}
            customProps={span822e26}
          >
            {span822e26.text}
          </StyledSpan>
        </StyledButton>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {
            links?.map((link) => (
              <div key={link.id} id={link.id}>
                <StyledButton
                  className="mr-5 hover:text-gray-900"
                  id={link.id + 'buttonff2cb2'}
                  styles={link.buttonff2cb2?.styles}
                  onClick={link.buttonff2cb2?.onClick}
                  customProps={link.buttonff2cb2}
                >
                  {link.buttonff2cb2?.text}
                </StyledButton>
              </div>
            ))
          }
        </nav>
        <StyledButton
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          id="buttoneefcd5"
          styles={buttoneefcd5?.styles}
          onClick={buttoneefcd5?.onClick}
          customProps={buttoneefcd5}
        >
          {buttoneefcd5.text}
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
    </StyledContainer>
  );
};

Header0069.icon = Header0069Icon;

Header0069.defaultProps = {
  background77b0e9: {
    styles: {},
  },
  span822e26: {
    text: 'MyWebsite',
    styles: {},
  },
  buttoneefcd5: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button13a3a2: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  links: [],
};

Header0069.propTypes = {
  /**
   * Background prop for background77b0e9.
   */
  background77b0e9: backgroundType,
  /**
   * Text prop for span822e26.
   */
  span822e26: textType,
  /**
   * Button prop for buttoneefcd5.
   */
  buttoneefcd5: buttonType,
  /**
   * Button prop for button13a3a2.
   */
  button13a3a2: buttonType,
  /**
   * Links array
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button prop for buttonff2cb2.
     */
    buttonff2cb2: buttonType,
  })),
};

export default Header0069;
