import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButtons, { socialMediaType } from '../molecules/SocialButtons';
import { textType } from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.backgroundColor)};
  padding: 10px 50px;
`;
const InfoFieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;
const SocialInfoContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`;
const InfoBlock = styled.div`
  margin-right: 20px;
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
`;
const InfoBlockLabel = styled.p`
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: bold;
  margin-bottom: 0;
`;
const InfoBlockValue = styled.p`
  font-size: ${({ fontSize }) => fontSize}rem;
  margin-top: 0;
`;

/**
* Basic footer component with dynamic sections and social icons.
*/
const FooterWithInfoAndSocial = (props) => {
  const {
    background,
    infoFields,
    socialMedia,
  } = props;

  const ContactInfo = () => (
    <InfoFieldsContainer>
      {
        infoFields.map((field) => (
          <InfoBlock
            key={Math.random().toString().slice(10)}
            color={background?.color}
            fontFamily={background?.fontFamily}
          >
            <InfoBlockLabel fontSize={field.label?.fontSize}>
              {field.label?.text}
            </InfoBlockLabel>
            <InfoBlockValue fontSize={field.value?.fontSize}>
              {field.value?.text}
            </InfoBlockValue>
          </InfoBlock>
        ))
      }
    </InfoFieldsContainer>
  );

  return (
    <Container backgroundColor={background?.backgroundColor}>
      <ContactInfo />
      <SocialInfoContainer>
        <SocialButtons
          socialMedia={socialMedia}
          alignment="row"
        />
      </SocialInfoContainer>
    </Container>
  );
};

FooterWithInfoAndSocial.defaultProps = {
  background: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'Public Sans, sans-serif',
  },
  socialMedia: [],
  infoFields: [],
};

FooterWithInfoAndSocial.propTypes = {
  /**
  * Background
  */
  background: PropTypes.shape({
    /**
     * Background color
     */
    backgroundColor: PropTypes.string,
    /**
     * Font type
     */
    fontFamily: PropTypes.string,
    /**
     * Color of all text
     */
    color: PropTypes.string,
  }),
  /**
   * Social media icons to show.
   */
  socialMedia: socialMediaType,
  /**
   * The fields to show on the footer
   */
  infoFields: PropTypes.arrayOf(PropTypes.shape({
    label: textType,
    value: textType,
  })),
};

export default FooterWithInfoAndSocial;
