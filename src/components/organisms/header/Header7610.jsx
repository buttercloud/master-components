import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledButton,
  StyledImage,
} from '../../assets/customStyledComponents';
import {
  backgroundType,
  buttonType,
  imageType,
} from '../../../customPropTypes/customPropTypes';
import Header7610Icon from './Header7610.icon';

const Header7610 = (props) => {
  const {
    background9d694a,
    buttonafe73c,
    button16f859,
    links,
    logo,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font"
      id="background9d694a"
      styles={background9d694a?.styles}
      onClick={background9d694a?.onClick}
      customProps={background9d694a}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <StyledButton
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 text-xl"
          id="button16f859"
          styles={button16f859?.styles}
          onClick={button16f859?.onClick}
          customProps={button16f859}
        >
          <StyledImage
            src={logo?.src}
            alt={logo?.alt}
            customProps={logo}
          />
          <span
            className="ml-3"
            id="span90d075"
          >
            {button16f859.text}
          </span>
        </StyledButton>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          {
            links?.map((link) => (
              <div key={link.id} id={link.id}>
                <StyledButton
                  className="mr-5 hover:text-gray-900"
                  id={link.id + 'buttond79b6c'}
                  styles={link.buttond79b6c?.styles}
                  onClick={link.buttond79b6c?.onClick}
                  customProps={link.buttond79b6c}
                >
                  {link.buttond79b6c?.text}
                </StyledButton>
              </div>
            ))
          }
        </nav>
        <StyledButton
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          id="buttonafe73c"
          styles={buttonafe73c?.styles}
          onClick={buttonafe73c?.onClick}
          customProps={buttonafe73c}
        >
          {buttonafe73c?.text}
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

Header7610.icon = Header7610Icon;

Header7610.defaultProps = {
  background9d694a: {
    styles: {},
  },
  logo: {},
  buttonafe73c: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  button16f859: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  links: [],
};

Header7610.propTypes = {
  /**
   * Background prop for background9d694a.
   */
  background9d694a: backgroundType,
  /**
  * Logo to display on the left.
  */
  logo: imageType,
  /**
   * Button prop for buttonafe73c.
   */
  buttonafe73c: buttonType,
  /**
   * Button prop for button16f859.
   */
  button16f859: buttonType,
  /**
   * Links array
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button prop for buttond79b6c.
     */
    buttond79b6c: buttonType,
  })),
};

export default Header7610;
