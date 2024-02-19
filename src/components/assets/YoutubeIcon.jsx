import PropTypes from 'prop-types';
import React from 'react';

function YoutubeIcon(props) {
  const { color } = props;

  return (
    <svg
      width={30}
      height={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      // {...props}
    >
      <path
        d="M838.5 182.4h-677C77.8 182.4 10 254.7 10 343.9v312.2c0 89.1 67.8 161.5 151.5 161.5h676.9c83.7 0 151.5-72.3 151.5-161.5V343.9c.1-89.1-67.7-161.5-151.4-161.5zM388.4 699.6V300.4L738.7 500 388.4 699.6z"
        fill={color}
      />
    </svg>
  );
}

YoutubeIcon.defaultProps = {
  color: '#000',
};

YoutubeIcon.propTypes = {
  color: PropTypes.string,
};

export default YoutubeIcon;
