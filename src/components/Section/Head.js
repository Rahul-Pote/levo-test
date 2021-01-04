import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const propTypes = {
  /** Description for the component */
  description: PropTypes.string,
  /** ClassName for the description */
  descClassName: PropTypes.string,
  /** Title for the component */
  title: PropTypes.node.isRequired,
  /** ClassName for the title */
  titleClassName: PropTypes.string,
};

const defaultProps = {
  description: '',
  titleClassName: '',
  descClassName: '',
};

const Head = ({
  title,
  description,
  titleClassName,
  descClassName,
  ...otherProps
}) => (
  <header {...otherProps}>
    <h1 className={clsx('h3', titleClassName)}>{title}</h1>
    <p className={clsx('', descClassName)}>{description}</p>
  </header>
);

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

Head.displayName = 'SectionHead';

export default Head;
