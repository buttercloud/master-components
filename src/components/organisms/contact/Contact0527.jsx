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
import Contact0527Icon from './Contact0527.icon';

const Contact0527 = (props) => {
  const {
    background3717ed,
    h28724ab,
    pb63adf,
    p0a3085,
    labele6b41b,
    labelb0e2ae,
    button60f268,
    textareaf80627,
    input33bae4,
  } = props;

  return (
    <StyledContainer
      className="text-gray-600 body-font relative"
      id="background3717ed"
      styles={background3717ed.styles}
      customProps={background3717ed}
    >
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          style={{ filter: 'grayscale(1)contrast(1.2)opacity(0.4)' }}
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <StyledH2
            className="text-gray-900 text-lg mb-1 font-medium title-font"
            id="h28724ab"
            styles={h28724ab.styles}
            customProps={h28724ab}
          >
            Feedback
          </StyledH2>
          <StyledParagraph
            className="leading-relaxed mb-5 text-gray-600"
            id="pb63adf"
            styles={pb63adf.styles}
            customProps={pb63adf}
          >
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </StyledParagraph>
          <div className="relative mb-4">
            <StyledLabel
              for="email"
              className="leading-7 text-sm text-gray-600"
              id="labele6b41b"
              styles={labele6b41b.styles}
              customProps={labele6b41b}
            >
              Email
            </StyledLabel>
            <StyledInput
              type="email"
              id="input33bae4"
              name="{input33bae4.name}"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              styles={input33bae4.styles}
              placeholder={input33bae4.placeholder}
              maxlength={input33bae4.maxLength}
              minlength={input33bae4.minLength}
              required={input33bae4.required}
              value={input33bae4.value}
              customProps={input33bae4}
            />
            <div className="relative mb-4">
              <StyledLabel
                for="message"
                className="leading-7 text-sm text-gray-600"
                id="labelb0e2ae"
                styles={labelb0e2ae.styles}
                customProps={labelb0e2ae}
              >
                Message
              </StyledLabel>
              <StyledTextarea
                id="textareaf80627"
                name="{textareaf80627.name}"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                styles={textareaf80627.styles}
                placeholder={textareaf80627.placeholder}
                maxlength={textareaf80627.maxLength}
                minlength={textareaf80627.minLength}
                required={textareaf80627.required}
                customProps={textareaf80627}
              />
            </div>
            <StyledButton
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              id="button60f268"
              styles={button60f268.styles}
              onClick={button60f268.onClick}
              customProps={button60f268}
            >
              Button
            </StyledButton>
            <StyledParagraph
              className="text-xs text-gray-500 mt-3"
              id="p0a3085"
              styles={p0a3085.styles}
              customProps={p0a3085}
            >
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </StyledParagraph>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

Contact0527.icon = Contact0527Icon;

Contact0527.defaultProps = {
  background3717ed: {
    styles: {},
  },
  h28724ab: {
    text: 'Lorem ipsum',
    styles: {},
  },
  pb63adf: {
    text: 'Lorem ipsum',
    styles: {},
  },
  p0a3085: {
    text: 'Lorem ipsum',
    styles: {},
  },
  labele6b41b: {
    text: 'Lorem ipsum',
    styles: {},
  },
  labelb0e2ae: {
    text: 'Lorem ipsum',
    styles: {},
  },
  button60f268: {
    text: 'Lorem ipsum',
    styles: {},
    onClick: () => {},
  },
  textareaf80627: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
  input33bae4: {
    placeholder: 'lorem ipsum',
    styles: {},
  },
};

Contact0527.propTypes = {
  /**
   * Background prop for background3717ed.
   */
  background3717ed: backgroundType,
  /**
   * Text prop for h28724ab.
   */
  h28724ab: textType,
  /**
   * Text prop for pb63adf.
   */
  pb63adf: textType,
  /**
   * Text prop for p0a3085.
   */
  p0a3085: textType,
  /**
   * Text prop for labele6b41b.
   */
  labele6b41b: textType,
  /**
   * Text prop for labelb0e2ae.
   */
  labelb0e2ae: textType,
  /**
   * Button prop for button60f268.
   */
  button60f268: buttonType,
  /**
   * Textarea prop for textareaf80627.
   */
  textareaf80627: textareaType,
  /**
   * Input prop for input33bae4.
   */
  input33bae4: inputType,
};

export default Contact0527;
