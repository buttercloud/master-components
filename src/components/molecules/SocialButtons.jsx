import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SocialButton, { socialTypes } from '../atoms/SocialButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.p`
  margin: 0;
  margin-left: 5px;
`;

const SocialButtons = (props) => {
  const { socials } = props;

  return (
    <Container>
      {
        socials.map((social) => (
          <Button>
            <SocialButton
              type={social.type}
              url={social.url}
              color={social.color}
            />
            <Label>{social.text}</Label>
          </Button>
        ))
      }
    </Container>
  );
};

SocialButtons.defaultProps = {
  // placeholder: 'placeholder',
};

SocialButtons.propTypes = {
  /**
  * Placeholder description.
  */
  socials: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(socialTypes),
    url: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default SocialButtons;
