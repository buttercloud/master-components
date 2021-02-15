// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FacebookButton from '../atoms/FacebookButton';
import InstagramButton from '../atoms/InstagramButton';

// TODO: change name later

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  background-color: ${props => (props.backgroundColor)};
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex: 70%;
  padding-left: 50px;
`;

const SocialInfoContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`;

const InfoBlock = styled.div`
  padding-right: 15px;
  margin-right: 15px;
  color: white;
`;

const InfoBlockLabel = styled.h3`
  font-weight: bold;
  margin-bottom: 0;
`;

const InfoBlockValue = styled.p`
  margin-top: 0;
`;

const Footer1 = (props) => {
  const {
    backgroundColor,
    facebookPageUrl,
    instagramPageUrl,
    address,
    contact,
    hours,
  } = props;

  const ContactInfo = () => {
    return (
      <ContactInfoContainer>
        <row>
          <InfoBlock>
            <InfoBlockLabel>Address:</InfoBlockLabel>
            <InfoBlockValue>{address}</InfoBlockValue>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockLabel>Hours:</InfoBlockLabel>
            <InfoBlockValue>{hours}</InfoBlockValue>
          </InfoBlock>
        </row>
        <InfoBlock>
          <InfoBlockLabel>Contact:</InfoBlockLabel>
          <InfoBlockValue>{contact}</InfoBlockValue>
        </InfoBlock>
      </ContactInfoContainer>
    )
  }

  const SocialInfo = () => {
    return (
      <SocialInfoContainer>
        <FacebookButton pageUrl={facebookPageUrl} color="#ffffff" />
        <InstagramButton pageUrl={instagramPageUrl} color="#ffffff" />
      </SocialInfoContainer>
    )
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <ContactInfo />
      <SocialInfo />
    </Container>
  )
}

Footer1.propTypes = {
  backgroundColor: String, // TODO Convert to Color type if it exists
};

export default Footer1;
