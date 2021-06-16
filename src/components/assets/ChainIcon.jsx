import React from 'react';
import PropTypes from 'prop-types';

function ChainIcon(props) {
  const { color } = props;

  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      // {...props}
    >
      <path
        d="M568.2 644.1c-54.4 0-108.7-20.7-150.1-62.1-11.2-11.2-11.2-29.5 0-40.8 11.2-11.2 29.5-11.2 40.8 0 60.3 60.3 158.4 60.3 218.7 0l209.6-209.6c60.3-60.3 60.3-158.4 0-218.7-60.3-60.3-158.4-60.3-218.7 0L491.6 289.7c-11.2 11.2-29.5 11.2-40.8 0-11.2-11.2-11.2-29.5 0-40.8L627.7 72.1c82.8-82.8 217.5-82.8 300.2 0 82.7 82.8 82.8 217.5 0 300.2L718.3 582c-41.4 41.4-95.8 62.1-150.1 62.1zM222.2 990c-54.4 0-108.7-20.7-150.1-62.1-82.8-82.8-82.8-217.5 0-300.2L281.7 418c82.8-82.8 217.5-82.8 300.2 0 11.2 11.2 11.2 29.5 0 40.8-11.2 11.2-29.5 11.2-40.8 0-60.3-60.3-158.4-60.3-218.7 0L112.9 668.4c-60.3 60.3-60.3 158.4 0 218.7 60.3 60.3 158.4 60.3 218.7 0l176.9-176.9c11.2-11.2 29.5-11.2 40.8 0 11.2 11.2 11.2 29.5 0 40.8l-177 176.9c-41.4 41.4-95.7 62.1-150.1 62.1z"
        fill={color}
      />
    </svg>
  );
}

ChainIcon.defaultProps = {
  color: '#000',
};

ChainIcon.propTypes = {
  color: PropTypes.string,
};

export default ChainIcon;
