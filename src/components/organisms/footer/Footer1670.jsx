import PropTypes from 'prop-types';
import React from 'react';

import {
  backgroundType,
  buttonType,
  imageType,
  inputType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledFooter,
  StyledH2,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledSpan,
} from '../../assets/customStyledComponents';
import Footer1670Icon from './Footer1670.icon';

const Footer1670 = (props) => {
  const {
    background73223f,
    h2935cfe,
    p777c7d,
    p3089f9,
    span16135d,
    span3d6c66,
    labeld1eab9,
    button1c8973,
    buttonfdfac6,
    buttonbf0dd7,
    buttonc1147a,
    button87d0c2,
    buttone4e6ff,
    button27804d,
    input7414f4,
    sections,
    logo,
  } = props;

  return (
    <StyledFooter
      className="text-gray-600 body-font"
      id="background73223f"
      customProps={background73223f}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {
            sections?.map((section) => (
              <div
                className="lg:w-1/4 md:w-1/2 w-full px-4"
                id={section.id}
                key={section.id}
              >
                <StyledH2
                  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                  id={section.id + 'h28c72d3'}
                  customProps={section.h28c72d3}
                >
                  {section.h28c72d3?.text}
                </StyledH2>
                <nav className="list-none mb-10">
                  {
                    section.links?.map((link) => (
                      <li id={link.id} key={link.id}>
                        <StyledButton
                          className="text-gray-600 hover:text-gray-800"
                          id={link.id + 'button50095b'}
                          onClick={link.button50095b?.onClick}
                          customProps={link.button50095b}
                        >
                          {link.button50095b?.text}
                        </StyledButton>
                      </li>
                    ))
                  }
                </nav>
              </div>
            ))
          }
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <StyledH2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              id="h2935cfe"
              customProps={h2935cfe}
            >
              {h2935cfe.text}
            </StyledH2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <StyledLabel
                  for="footer-field"
                  className="leading-7 text-sm text-gray-600"
                  id="labeld1eab9"
                  customProps={labeld1eab9}
                >
                  {labeld1eab9.text}
                </StyledLabel>
                <StyledInput
                  type="text"
                  id="input7414f4"
                  name="{input7414f4.name}"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder={input7414f4.placeholder}
                  maxlength={input7414f4.maxLength}
                  minlength={input7414f4.minLength}
                  required={input7414f4.required}
                  value={input7414f4.value}
                  onChange={input7414f4.onChange}
                  customProps={input7414f4}
                />
              </div>
              <StyledButton
                className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                id="button1c8973"
                onClick={button1c8973.onClick}
                customProps={button1c8973}
              >
                {button1c8973.text}
              </StyledButton>
            </div>
            <StyledParagraph
              className="text-gray-500 text-sm mt-2 md:text-left text-center"
              id="p777c7d"
              customProps={p777c7d}
            >
              {p777c7d.text}
              <br className="lg:block hidden" />
            </StyledParagraph>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <StyledButton
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            id="buttonfdfac6"
            onClick={buttonfdfac6.onClick}
            customProps={buttonfdfac6}
          >
            <StyledImage
              src={logo?.src}
              alt={logo?.alt}
              customProps={logo}
            />
            <StyledSpan
              className="ml-3 text-xl"
              id="span16135d"
              customProps={span16135d}
            >
              {span16135d.text}
            </StyledSpan>
          </StyledButton>
          <StyledParagraph
            className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
            id="p3089f9"
            customProps={p3089f9}
          >
            {p3089f9.text}
            <StyledButton
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
              id="buttonbf0dd7"
              onClick={buttonbf0dd7.onClick}
              customProps={buttonbf0dd7}
            >
              {buttonbf0dd7.text}
            </StyledButton>
          </StyledParagraph>
          <StyledSpan
            className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
            id="span3d6c66"
            customProps={span3d6c66}
          >
            <StyledButton
              className="text-gray-500"
              id="buttonc1147a"
              onClick={buttonc1147a.onClick}
              customProps={buttonc1147a}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="button87d0c2"
              onClick={button87d0c2.onClick}
              customProps={button87d0c2}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="buttone4e6ff"
              onClick={buttone4e6ff.onClick}
              customProps={buttone4e6ff}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </StyledButton>
            <StyledButton
              className="ml-3 text-gray-500"
              id="button27804d"
              onClick={button27804d.onClick}
              customProps={button27804d}
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </StyledButton>
          </StyledSpan>
        </div>
      </div>
    </StyledFooter>
  );
};

Footer1670.icon = Footer1670Icon;

Footer1670.defaultProps = {
  background73223f: {
    styles: {},
  },
  logo: {},
  sections: [],
  h2935cfe: {
    text: 'Subscribe',
    styles: {},
  },
  p777c7d: {
    text: 'Lorem ipsum dolor sit amet',
    styles: {},
  },
  p3089f9: {
    text: '&#xA9; 2020 Tailblocks &#x2014;',
    styles: {},
  },
  span16135d: {
    text: 'MyWebsite',
    styles: {},
  },
  span3d6c66: {
    text: 'Lorem ipsum',
    styles: {},
  },
  labeld1eab9: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button1c8973: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttonfdfac6: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttonbf0dd7: {
    text: '@loremipsum',
    styles: {},
    onClick: () => {},
  },
  buttonc1147a: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button87d0c2: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttone4e6ff: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button27804d: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  input7414f4: {
    placeholder: 'Lorem ipsum',
    styles: {},
  },
};

Footer1670.propTypes = {
  /**
   * Background prop for background73223f.
   */
  background73223f: backgroundType,
  /**
  * Logo props.
  */
  logo: imageType,
  /**
   * Sections array
   */
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Text prop for h28c72d3.
     */
    h28c72d3: textType,
    /**
     * Links array
     */
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      /**
       * Button prop for button50095b.
       */
      button50095b: buttonType,
    })),
  })),
  /**
   * Text prop for h2935cfe.
   */
  h2935cfe: textType,
  /**
   * Text prop for p777c7d.
   */
  p777c7d: textType,
  /**
   * Text prop for p3089f9.
   */
  p3089f9: textType,
  /**
   * Text prop for span16135d.
   */
  span16135d: textType,
  /**
   * Text prop for span3d6c66.
   */
  span3d6c66: textType,
  /**
   * Text prop for labeld1eab9.
   */
  labeld1eab9: textType,
  /**
   * Button prop for button1c8973.
   */
  button1c8973: buttonType,
  /**
   * Button prop for buttonfdfac6.
   */
  buttonfdfac6: buttonType,
  /**
   * Button prop for buttonbf0dd7.
   */
  buttonbf0dd7: buttonType,
  /**
   * Button prop for buttonc1147a.
   */
  buttonc1147a: buttonType,
  /**
   * Button prop for button87d0c2.
   */
  button87d0c2: buttonType,
  /**
   * Button prop for buttone4e6ff.
   */
  buttone4e6ff: buttonType,
  /**
   * Button prop for button27804d.
   */
  button27804d: buttonType,
  /**
   * Input prop for input7414f4.
   */
  input7414f4: inputType,
};

export default Footer1670;
