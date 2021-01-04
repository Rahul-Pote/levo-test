import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Row, Col } from 'react-bootstrap';

import Head from './Head';
import Body from './Body';
import Footer from './Footer';

const propTypes = {
  /** content for the component */
  children: PropTypes.node.isRequired,
  /** ClassName for the component */
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Section = memo(({ children, className, ...otherProps }) => (
  <section className={clsx('mt-4', className)} {...otherProps}>
    <Row>
      <Col>{children}</Col>
    </Row>
  </section>
));

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

Section.Head = Head;
Section.Body = Body;
Section.Footer = Footer;

export default Section;
