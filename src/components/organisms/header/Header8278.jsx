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
import Header8278Icon from './Header8278.icon';

const Header8278 = (props) => {
  const {
    background502dd0,
    span014ddf,
    buttonefbd23,
    button2917cd,
    links,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background502dd0"
      styles={background502dd0.styles}
      onClick={background502dd0?.onClick}
      customProps={background502dd0}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <StyledButton
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          id="button2917cd"
          styles={button2917cd.styles}
          onClick={button2917cd.onClick}
          customProps={button2917cd}
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
            id="span014ddf"
            styles={span014ddf.styles}
            onClick={span014ddf?.onClick}
            customProps={span014ddf}
          >
            {span014ddf.text}
          </StyledSpan>
        </StyledButton>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            links?.map((link) => (
              <div key={link.id} id={link.id}>
                <StyledButton
                  className="mr-5 hover:text-gray-900"
                  id={link.id + 'button9831b8'}
                  styles={link.button9831b8?.styles}
                  onClick={link.button9831b8?.onClick}
                  customProps={link.button9831b8}
                >
                  {link.button9831b8?.text}
                </StyledButton>
              </div>
            ))
          }
        </nav>
        <StyledButton
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          id="buttonefbd23"
          styles={buttonefbd23.styles}
          onClick={buttonefbd23.onClick}
          customProps={buttonefbd23}
        >
          {buttonefbd23.text}
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

Header8278.icon = Header8278Icon;

Header8278.defaultProps = {
  background502dd0: {
    styles: {},
  },
  span014ddf: {
    text: 'MyWebsite',
    styles: {},
  },
  buttonefbd23: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button2917cd: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  links: [],
};

Header8278.propTypes = {
  /**
   * Background prop for background502dd0.
   */
  background502dd0: backgroundType,
  /**
   * Text prop for span014ddf.
   */
  span014ddf: textType,
  /**
   * Button prop for buttonefbd23.
   */
  buttonefbd23: buttonType,
  /**
   * Button prop for button2917cd.
   */
  button2917cd: buttonType,
  /**
   * Links array
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button prop for button9831b8.
     */
    button9831b8: buttonType,
  })),
};

export default Header8278;
