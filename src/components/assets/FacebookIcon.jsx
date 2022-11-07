import PropTypes from 'prop-types';
import React from 'react';

const FacebookIcon = (props) => {
  const { color } = props;
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <path
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
        fill={color ?? '#000'}
      />
    </svg>
  );
};

FacebookIcon.defaultProps = {
  color: '#000',
};

FacebookIcon.propTypes = {
  color: PropTypes.string,
};

export default FacebookIcon;
