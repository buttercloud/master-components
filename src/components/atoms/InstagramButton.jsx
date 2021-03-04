// @flow

import React from 'react';
import PropTypes from 'prop-types';
import InstagramIcon from '../assets/InstagramIcon';

/**
* Instagram social icon button
*/
const InstagramButton = (props) => {
  const { pageUrl, color } = props;

  return (
    <div>
      <a target="blank" alt="instagram" href={pageUrl}>
        <InstagramIcon color={color} />
      </a>
    </div>
  );
};

InstagramButton.defaultProps = {
  color: '#000',
};

InstagramButton.propTypes = {
  /**
  * Instagram page url.
  */
  pageUrl: PropTypes.string.isRequired,
  /**
  * A custom color for the button.
  */
  color: PropTypes.string,
};

export default InstagramButton;
