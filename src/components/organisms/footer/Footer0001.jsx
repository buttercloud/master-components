import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledFooter, StyledParagraph } from '../../assets/customStyledComponents';
import SocialButtons, { socialMediaType } from '../../molecules/SocialButtons';
import { textType, backgroundType } from '../../../customPropTypes/customPropTypes';
import Footer0001Icon from './Footer0001.icon';

const Container = styled(StyledFooter)`
  display: flex;
  flex-direction: column;
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
`;
const InfoBlockLabel = styled(StyledParagraph)`
  font-weight: bold;
  margin-bottom: 0;
`;
const InfoBlockValue = styled(StyledParagraph)`
  margin-top: 0;
`;

/**
* Basic footer component with dynamic sections and social icons.
*/
const Footer0001 = (props) => {
  const {
    background,
    infoFields,
    socialMedia,
  } = props;

  const ContactInfo = () => (
    <InfoFieldsContainer>
      {
        infoFields?.map((field) => (
          <InfoBlock key={field.id} id={field.id}>
            <InfoBlockLabel customProps={field.label}>
              {field.label?.text}
            </InfoBlockLabel>
            <InfoBlockValue customProps={field.value}>
              {field.value?.text}
            </InfoBlockValue>
          </InfoBlock>
        ))
      }
    </InfoFieldsContainer>
  );

  return (
    <Container customProps={background}>
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

Footer0001.icon = Footer0001Icon;

Footer0001.defaultProps = {
  background: {},
  socialMedia: [],
  infoFields: [],
};

Footer0001.propTypes = {
  /**
  * Background
  */
  background: backgroundType,
  /**
   * Social media icons to show.
   */
  socialMedia: socialMediaType,
  /**
   * The fields to show on the footer
   */
  infoFields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: textType,
    value: textType,
  })),
};

export default Footer0001;
