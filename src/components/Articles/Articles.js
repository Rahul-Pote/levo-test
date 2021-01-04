import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import styles from './style/ArticleSection.module.scss';
import ArticleCard from './ArticleCard';

const propTypes = {
  /** Data for article card. */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const renderArticle = (data) =>
  data.map((item) => (
    <Col md={4} className={`${styles.relatedArticleCard} mb-4`} key={item.id}>
      <ArticleCard {...item} />
    </Col>
  ));

const Articles = memo(({ data }) => renderArticle(data));

Articles.propTypes = propTypes;
Articles.displayName = 'Articles';

export default Articles;
