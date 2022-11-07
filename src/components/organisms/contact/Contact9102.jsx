import React from 'react';

import {
  backgroundType,
  buttonType,
  inputType,
  textareaType,
  textType,
} from '../../../customPropTypes/customPropTypes';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledSpan,
  StyledTextarea,
} from '../../assets/customStyledComponents';
import Contact9102Icon from './Contact9102.icon';

const Contact9102 = (props) => {
  const {
    background23ec72,
    h1119c89,
    pba12b0,
    p9c29fd,
    span8d7871,
    labeld86b7e,
    label51169e,
    label005f6e,
    buttonedcff6,
    buttondc5706,
    button47a1c7,
    buttond1955f,
    button9e5a45,
    button10b7ef,
    textarea1ea566,
    input2d1421,
    input89038c,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font relative"
      id="background23ec72"
      styles={background23ec72.styles}
      customProps={background23ec72}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <StyledH1
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
            id="h1119c89"
            styles={h1119c89.styles}
            customProps={h1119c89}
          >
            {h1119c89.text}
          </StyledH1>
          <StyledParagraph
            className="lg:w-2/3 mx-auto leading-relaxed text-base"
            id="pba12b0"
            styles={pba12b0.styles}
            customProps={pba12b0}
          >
            {pba12b0.text}
          </StyledParagraph>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <StyledLabel
                  for="name"
                  className="leading-7 text-sm text-gray-600"
                  id="labeld86b7e"
                  styles={labeld86b7e.styles}
                  customProps={labeld86b7e}
                >
                  {labeld86b7e.text}
                </StyledLabel>
                <StyledInput
                  type="text"
                  id="input2d1421"
                  name="{input2d1421.name}"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  styles={input2d1421.styles}
                  placeholder={input2d1421.placeholder}
                  maxlength={input2d1421.maxLength}
                  minlength={input2d1421.minLength}
                  required={input2d1421.required}
                  value={input2d1421.value}
                  customProps={input2d1421}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <StyledLabel
                  for="email"
                  className="leading-7 text-sm text-gray-600"
                  id="label51169e"
                  styles={label51169e.styles}
                  customProps={label51169e}
                >
                  {label51169e.text}
                </StyledLabel>
                <StyledInput
                  type="email"
                  id="input89038c"
                  name="{input89038c.name}"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  styles={input89038c.styles}
                  placeholder={input89038c.placeholder}
                  maxlength={input89038c.maxLength}
                  minlength={input89038c.minLength}
                  required={input89038c.required}
                  value={input89038c.value}
                  customProps={input89038c}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <StyledLabel
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                  id="label005f6e"
                  styles={label005f6e.styles}
                  customProps={label005f6e}
                >
                  {label005f6e.text}
                </StyledLabel>
                <StyledTextarea
                  id="textarea1ea566"
                  name="{textarea1ea566.name}"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  styles={textarea1ea566.styles}
                  placeholder={textarea1ea566.placeholder}
                  maxlength={textarea1ea566.maxLength}
                  minlength={textarea1ea566.minLength}
                  required={textarea1ea566.required}
                  customProps={textarea1ea566}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <StyledButton
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                id="buttonedcff6"
                styles={buttonedcff6.styles}
                onClick={buttonedcff6.onClick}
                customProps={buttonedcff6}
              >
                {buttonedcff6.text}
              </StyledButton>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <StyledButton
                className="text-indigo-500"
                id="buttondc5706"
                styles={buttondc5706.styles}
                onClick={buttondc5706.onClick}
                customProps={buttondc5706}
              >
                {buttondc5706.text}
              </StyledButton>
              <StyledParagraph
                className="leading-normal my-5"
                id="p9c29fd"
                styles={p9c29fd.styles}
                customProps={p9c29fd}
              >
                {p9c29fd.text}
              </StyledParagraph>
              <StyledSpan
                className="inline-flex"
                id="span8d7871"
                styles={span8d7871.styles}
                customProps={span8d7871}
              >
                <StyledButton
                  className="text-gray-500"
                  id="button47a1c7"
                  styles={button47a1c7.styles}
                  onClick={button47a1c7.onClick}
                  customProps={button47a1c7}
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
                  className="ml-4 text-gray-500"
                  id="buttond1955f"
                  styles={buttond1955f.styles}
                  onClick={buttond1955f.onClick}
                  customProps={buttond1955f}
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
                  className="ml-4 text-gray-500"
                  id="button9e5a45"
                  styles={button9e5a45.styles}
                  onClick={button9e5a45.onClick}
                  customProps={button9e5a45}
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
                  className="ml-4 text-gray-500"
                  id="button10b7ef"
                  styles={button10b7ef.styles}
                  onClick={button10b7ef.onClick}
                  customProps={button10b7ef}
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </StyledButton>
              </StyledSpan>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Contact9102.icon = Contact9102Icon;

Contact9102.defaultProps = {
  background23ec72: {
    styles: {},
  },
  h1119c89: {
    text: 'Contact Us',
    styles: {},
  },
  pba12b0: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    styles: {},
  },
  p9c29fd: {
    text: 'Lorem ipsum St.',
    styles: {},
  },
  span8d7871: {
    text: 'Lorem ipsum',
    styles: {},
  },
  labeld86b7e: {
    text: 'Name',
    styles: {},
  },
  label51169e: {
    text: 'Email',
    styles: {},
  },
  label005f6e: {
    text: 'Message',
    styles: {},
  },
  buttonedcff6: {
    text: 'Button',
    styles: {},
    onClick: () => {},
  },
  buttondc5706: {
    text: 'example@email.com',
    styles: {},
    onClick: () => {},
  },
  button47a1c7: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  buttond1955f: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button9e5a45: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button10b7ef: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  textarea1ea566: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
  input2d1421: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
  input89038c: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
};

Contact9102.propTypes = {
  /**
   * Background prop for background23ec72.
   */
  background23ec72: backgroundType,
  /**
   * Text prop for h1119c89..
   */
  h1119c89: textType,
  /**
   * Text prop for pba12b0..
   */
  pba12b0: textType,
  /**
   * Text prop for p9c29fd..
   */
  p9c29fd: textType,
  /**
   * Text prop for span8d7871..
   */
  span8d7871: textType,
  /**
   * Text prop for labeld86b7e..
   */
  labeld86b7e: textType,
  /**
   * Text prop for label51169e..
   */
  label51169e: textType,
  /**
   * Text prop for label005f6e..
   */
  label005f6e: textType,
  /**
   * Button prop for buttonedcff6..
   */
  buttonedcff6: buttonType,
  /**
   * Button prop for buttondc5706..
   */
  buttondc5706: buttonType,
  /**
   * Button prop for button47a1c7..
   */
  button47a1c7: buttonType,
  /**
   * Button prop for buttond1955f..
   */
  buttond1955f: buttonType,
  /**
   * Button prop for button9e5a45..
   */
  button9e5a45: buttonType,
  /**
   * Button prop for button10b7ef..
   */
  button10b7ef: buttonType,
  /**
   * Textarea prop for textarea1ea566.
   */
  textarea1ea566: textareaType,
  /**
   * Input prop for input2d1421.
   */
  input2d1421: inputType,
  /**
   * Input prop for input89038c.
   */
  input89038c: inputType,
};

export default Contact9102;
