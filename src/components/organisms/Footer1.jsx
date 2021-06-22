// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButton from '../atoms/SocialButton';

// TODO: change name later

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
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFamily};
`;
const InfoBlockLabel = styled.p`
  font-size: ${(props) => props.fontSize}rem;
  font-weight: bold;
  margin-bottom: 0;
`;
const InfoBlockValue = styled.p`
  font-size: ${(props) => props.fontSize}rem;
  margin-top: 0;
`;

/**
* Basic footer component with dynamic sections and social icons
*/
const Footer1 = (props) => {
  const {
    backgroundColor,
    instagramPageUrl,
    instagramButtonColor,
    facebookPageUrl,
    facebookButtonColor,
    fontFamily,
    fontColor,
    infoFields,
    infoKeyFontSize,
    infoValueFontSize,
  } = props;

  const ContactInfo = () => (
    <InfoFieldsContainer>
      {
        infoFields.map((field) => (
          <InfoBlock
            key={Math.random().toString().slice(10)}
            fontColor={fontColor}
            fontFamily={fontFamily}
          >
            <InfoBlockLabel fontSize={infoKeyFontSize}>
              {field.name}
            </InfoBlockLabel>
            <InfoBlockValue fontSize={infoValueFontSize}>
              {field.value}
            </InfoBlockValue>
          </InfoBlock>
        ))
      }
    </InfoFieldsContainer>
  );

  const SocialInfo = () => (
    <SocialInfoContainer>
      <SocialButton
        type="facebook"
        url={facebookPageUrl}
        color={facebookButtonColor}
      />
      <SocialButton
        type="instagram"
        url={instagramPageUrl}
        color={instagramButtonColor}
      />
    </SocialInfoContainer>
  );

  return (
    <Container backgroundColor={backgroundColor}>
      <ContactInfo />
      <SocialInfo />
    </Container>
  );
};

Footer1.defaultProps = {
  infoFields: [],
  backgroundColor: '#000000',
  facebookButtonColor: '#ffffff',
  instagramButtonColor: '#ffffff',
  fontColor: '#ffffff',
  fontFamily: 'Public Sans, sans-serif',
  infoKeyFontSize: 1.7,
  infoValueFontSize: 1,
};

Footer1.propTypes = {
  /**
  * Background color
  */
  backgroundColor: PropTypes.string,
  /**
  * Facebook button color
  */
  facebookButtonColor: PropTypes.string,
  /**
  * Instagram button color
  */
  instagramButtonColor: PropTypes.string,
  /**
  * Font type
  */
  fontFamily: PropTypes.string,
  /**
  * Color of all text
  */
  fontColor: PropTypes.string,
  /**
  * Facebook page url
  */
  facebookPageUrl: PropTypes.string.isRequired,
  /**
  * Instagram page url
  */
  instagramPageUrl: PropTypes.string.isRequired,
  /**
  * Font size of info key in `rem`
  */
  infoKeyFontSize: PropTypes.number,
  /**
  * Font size of info value in `rem`
  */
  infoValueFontSize: PropTypes.number,
  /**
  * The fields to show on the footer
  */
  infoFields: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  })),
};

export default Footer1;
