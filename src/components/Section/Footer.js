import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const propTypes = {
  /** content for the component */
  children: PropTypes.node.isRequired,
  /** ClassName for the component */
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Footer = ({ children, className, ...otherProps }) => (
  <footer {...otherProps} className={clsx('text-center mt-2', className)}>
    {children}
  </footer>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

Footer.displayName = 'SectionFooter';

export default Footer;
