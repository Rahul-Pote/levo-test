import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content for the component */
  children: PropTypes.node.isRequired,
  /** ClassName for the component */
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Body = ({ children, className, ...otherProps }) => (
  <div {...otherProps} className={className}>
    {children}
  </div>
);

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

Body.displayName = 'SectionBody';

export default Body;
