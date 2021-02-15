// @flow

import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
        fill={props.color ?? "#000"}
      />
    </svg>
  )
}

const FacebookButton = (props) => {
  const { pageUrl, color } = props;

  return (
    <div>
      <a target="blank" alt="facebook" href={pageUrl}>
        <FacebookIcon color={color} />
      </a>
    </div>
  )
}

FacebookButton.propTypes = {
  pageUrl: String,
  color: String, // convert to PropTypes.Color or something
};

export default FacebookButton;