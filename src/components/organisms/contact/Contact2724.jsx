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
  StyledH2,
  StyledInput,
  StyledLabel,
  StyledParagraph,
  StyledTextarea,
} from '../../assets/customStyledComponents';
import Contact2724Icon from './Contact2724.icon';

const Contact2724 = (props) => {
  const {
    backgroundeb6e67,
    h247a6c0,
    h26d9d2b,
    h20730fb,
    h274bfdd,
    pdb2f1a,
    p58d14e,
    pb9d1d9,
    p85654a,
    label3682b3,
    label641b8b,
    labeld9b1b7,
    button01be85,
    button312d23,
    inputa246ff,
    inpute3425d,
    textarea283e07,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font relative"
      id="backgroundeb6e67"
      styles={backgroundeb6e67.styles}
      customProps={backgroundeb6e67}
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            className="absolute inset-0"
            style={{ filter: 'grayscale(1)contrast(1.2)opacity(0.4)' }}
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <StyledH2
                className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                id="h247a6c0"
                styles={h247a6c0.styles}
                customProps={h247a6c0}
              >
                ADDRESS
              </StyledH2>
              <StyledParagraph
                className="mt-1"
                id="pdb2f1a"
                styles={pdb2f1a.styles}
                customProps={pdb2f1a}
              >
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </StyledParagraph>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <StyledH2
                className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                id="h26d9d2b"
                styles={h26d9d2b.styles}
                customProps={h26d9d2b}
              >
                EMAIL
              </StyledH2>
              <StyledButton
                className="text-indigo-500 leading-relaxed"
                id="button312d23"
                styles={button312d23.styles}
                onClick={button312d23.onClick}
                customProps={button312d23}
              >
                example@email.com
              </StyledButton>
              <StyledH2
                className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
                id="h20730fb"
                styles={h20730fb.styles}
                customProps={h20730fb}
              >
                PHONE
              </StyledH2>
              <StyledParagraph
                className="leading-relaxed"
                id="p58d14e"
                styles={p58d14e.styles}
                customProps={p58d14e}
              >
                123-456-7890
              </StyledParagraph>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <StyledH2
            className="text-gray-900 text-lg mb-1 font-medium title-font"
            id="h274bfdd"
            styles={h274bfdd.styles}
            customProps={h274bfdd}
          >
            Feedback
          </StyledH2>
          <StyledParagraph
            className="leading-relaxed mb-5 text-gray-600"
            id="pb9d1d9"
            styles={pb9d1d9.styles}
            customProps={pb9d1d9}
          >
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </StyledParagraph>
          <div className="relative mb-4">
            <StyledLabel
              for="name"
              className="leading-7 text-sm text-gray-600"
              id="label3682b3"
              styles={label3682b3.styles}
              customProps={label3682b3}
            >
              Name
            </StyledLabel>
            <StyledInput
              type="text"
              id="inputa246ff"
              name="{inputa246ff.name}"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              styles={inputa246ff.styles}
              placeholder={inputa246ff.placeholder}
              maxlength={inputa246ff.maxLength}
              minlength={inputa246ff.minLength}
              required={inputa246ff.required}
              value={inputa246ff.value}
              customProps={inputa246ff}
            />
            <div className="relative mb-4">
              <StyledLabel
                for="email"
                className="leading-7 text-sm text-gray-600"
                id="label641b8b"
                styles={label641b8b.styles}
                customProps={label641b8b}
              >
                Email
              </StyledLabel>
              <StyledInput
                type="email"
                id="inpute3425d"
                name="{inpute3425d.name}"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                styles={inpute3425d.styles}
                placeholder={inpute3425d.placeholder}
                maxlength={inpute3425d.maxLength}
                minlength={inpute3425d.minLength}
                required={inpute3425d.required}
                value={inpute3425d.value}
                customProps={inpute3425d}
              />
              <div className="relative mb-4">
                <StyledLabel
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                  id="labeld9b1b7"
                  styles={labeld9b1b7.styles}
                  customProps={labeld9b1b7}
                >
                  Message
                </StyledLabel>
                <StyledTextarea
                  id="textarea283e07"
                  name="{textarea283e07.name}"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  styles={textarea283e07.styles}
                  placeholder={textarea283e07.placeholder}
                  maxlength={textarea283e07.maxLength}
                  minlength={textarea283e07.minLength}
                  required={textarea283e07.required}
                  customProps={textarea283e07}
                />
              </div>
              <StyledButton
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                id="button01be85"
                styles={button01be85.styles}
                onClick={button01be85.onClick}
                customProps={button01be85}
              >
                Button
              </StyledButton>
              <StyledParagraph
                className="text-xs text-gray-500 mt-3"
                id="p85654a"
                styles={p85654a.styles}
                customProps={p85654a}
              >
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </StyledParagraph>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Contact2724.icon = Contact2724Icon;

Contact2724.defaultProps = {
  backgroundeb6e67: {
    styles: {},
  },
  h247a6c0: {
    text: 'Lorem ipsum',
    styles: {},
  },
  h26d9d2b: {
    text: 'Lorem ipsum',
    styles: {},
  },
  h20730fb: {
    text: 'Lorem ipsum',
    styles: {},
  },
  h274bfdd: {
    text: 'Lorem ipsum',
    styles: {},
  },
  pdb2f1a: {
    text: 'Lorem ipsum',
    styles: {},
  },
  p58d14e: {
    text: 'Lorem ipsum',
    styles: {},
  },
  pb9d1d9: {
    text: 'Lorem ipsum',
    styles: {},
  },
  p85654a: {
    text: 'Lorem ipsum',
    styles: {},
  },
  label3682b3: {
    text: 'Lorem ipsum',
    styles: {},
  },
  label641b8b: {
    text: 'Lorem ipsum',
    styles: {},
  },
  labeld9b1b7: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button01be85: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  button312d23: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  inputa246ff: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
  inpute3425d: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
  textarea283e07: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
};

Contact2724.propTypes = {
  /**
   * Background prop for backgroundeb6e67.
   */
  backgroundeb6e67: backgroundType,
  /**
   * Text prop for h247a6c0..
   */
  h247a6c0: textType,
  /**
   * Text prop for h26d9d2b..
   */
  h26d9d2b: textType,
  /**
   * Text prop for h20730fb..
   */
  h20730fb: textType,
  /**
   * Text prop for h274bfdd..
   */
  h274bfdd: textType,
  /**
   * Text prop for pdb2f1a..
   */
  pdb2f1a: textType,
  /**
   * Text prop for p58d14e..
   */
  p58d14e: textType,
  /**
   * Text prop for pb9d1d9..
   */
  pb9d1d9: textType,
  /**
   * Text prop for p85654a..
   */
  p85654a: textType,
  /**
   * Text prop for label3682b3..
   */
  label3682b3: textType,
  /**
   * Text prop for label641b8b..
   */
  label641b8b: textType,
  /**
   * Text prop for labeld9b1b7..
   */
  labeld9b1b7: textType,
  /**
   * Button prop for button01be85..
   */
  button01be85: buttonType,
  /**
   * Button prop for button312d23..
   */
  button312d23: buttonType,
  /**
   * Input prop for inputa246ff.
   */
  inputa246ff: inputType,
  /**
   * Input prop for inpute3425d.
   */
  inpute3425d: inputType,
  /**
   * Input prop for textarea283e07.
   */
  textarea283e07: textareaType,
};

export default Contact2724;
