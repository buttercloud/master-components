// @flow

import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '../assets/FacebookIcon';

/**
* Facebook social icon button
*/
const FacebookButton = (props) => {
  const { pageUrl, color } = props;

  return (
    <div>
      <a target="blank" alt="facebook" href={pageUrl}>
        <FacebookIcon color={color} />
      </a>
    </div>
  );
};

FacebookButton.defaultProps = {
  color: '#000000',
};

FacebookButton.propTypes = {
  /**
  * Facebook page url.
  */
  pageUrl: PropTypes.string.isRequired,
  /**
  * A custom color for the button.
  */
  color: PropTypes.string,
};

export default FacebookButton;
