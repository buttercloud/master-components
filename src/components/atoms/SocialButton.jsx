import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InstagramIcon from '../assets/InstagramIcon';
import FacebookIcon from '../assets/FacebookIcon';
import TwitterIcon from '../assets/TwitterIcon';
import DiscordIcon from '../assets/DiscordIcon';
import YoutubeIcon from '../assets/YoutubeIcon';
import ChainIcon from '../assets/ChainIcon';

const Container = styled.div`
  margin: 5px;
`;
const Link = styled.a``;

export const socialTypes = ['facebook', 'instagram', 'youtube', 'twitter', 'discord', 'custom'];

/**
* Social icon button
*/
const SocialButton = (props) => {
  const { type, color, url } = props;

  return (
    <Container>
      <Link target="blank" alt={type} href={url}>
        { type === 'instagram' && <InstagramIcon color={color} /> }
        { type === 'facebook' && <FacebookIcon color={color} /> }
        { type === 'youtube' && <YoutubeIcon color={color} /> }
        { type === 'discord' && <DiscordIcon color={color} /> }
        { type === 'twitter' && <TwitterIcon color={color} /> }
        { type === 'custom' && <ChainIcon color={color} /> }
      </Link>
    </Container>
  );
};

SocialButton.defaultProps = {
  color: '#000',
};

SocialButton.propTypes = {
  /**
  * Type of social.
  */
  type: PropTypes.oneOf(socialTypes).isRequired,
  /**
  * Social url.
  */
  url: PropTypes.string.isRequired,
  /**
  * A custom color for the social icon.
  */
  color: PropTypes.string,
};

export default SocialButton;
