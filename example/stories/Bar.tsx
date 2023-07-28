import React, { Component } from 'react'
import PropTypes from 'prop-types';
export const Bar = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>Bar</div>
  );
};


Bar.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
};

Bar.defaultProps = {
  primary: false,
};
