import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { textType } from '../../customPropTypes/customPropTypes';
import { StyledButton } from '../assets/customStyledComponents';
import SocialButton, { socialTypes } from '../atoms/SocialButton';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;
const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
const Button = styled(StyledButton)`
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;
const Label = styled.p`
  margin: 0;
`;

const SocialButtons = (props) => {
  const { socialMedia, alignment } = props;

  return (
    <Container flexDirection={alignment}>
      {
        socialMedia?.map((social) => (
          <Button key={social.url}>
            {
              alignment === 'row' && (
                <TooltipText>{social.text}</TooltipText>
              )
            }
            <SocialButton
              type={social.type}
              url={social.url}
              color={social.styles?.color}
            />
            {
              alignment === 'column' && (
                <Label>{social.text}</Label>
              )
            }
          </Button>
        ))
      }
    </Container>
  );
};

export const socialMediaType = PropTypes.arrayOf(PropTypes.shape({
  type: PropTypes.oneOf(socialTypes),
  url: PropTypes.string,
  color: PropTypes.string,
  text: textType,
}));

SocialButtons.defaultProps = {
  alignment: 'column',
};

SocialButtons.propTypes = {
  /**
  * Social media icons to show.
  */
  socialMedia: socialMediaType.isRequired,
  /**
   * Social buttons alignment.
   */
  alignment: PropTypes.oneOf(['column', 'row']),
};

export default SocialButtons;
