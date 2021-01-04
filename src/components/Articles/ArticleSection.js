import React, { memo, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Section from '../Section';
import styles from './style/ArticleSection.module.scss';
import Articles from './Articles';

const propTypes = {
  /** Title for the component */
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Description for the component */
  description: PropTypes.string,
  /** Title for the component */
  title: PropTypes.node.isRequired,
};

const defaultProps = {
  description: '',
};

const ArticleSection = memo(({ title, description, articles = [] }) => {
  if (!articles.length) return null;
  const [currentVisibleCardRow, setCurrentVisibleCardRow] = useState(1);
  const visibleData = articles.slice(0, currentVisibleCardRow * 3);
  const hiddenData = articles.slice(
    currentVisibleCardRow * 3,
    currentVisibleCardRow.length
  );

  return (
    <Section>
      <Section.Head
        titleClassName={`${styles.relatedArticleTitle}`}
        title={title}
        description={description}
      />
      <Section.Body>
        <Row>
          <Articles data={visibleData} />
        </Row>
      </Section.Body>
      {hiddenData.length ? (
        <Section.Footer>
          <Button
            variant="outline"
            onClick={() => {
              setCurrentVisibleCardRow(currentVisibleCardRow + 1);
            }}
            className={`${styles.relatedArticleViewMore} font-weight-bold text-uppercase cursor-pointer`}
          >
            readMore
          </Button>
        </Section.Footer>
      ) : null}
    </Section>
  );
});

ArticleSection.propTypes = propTypes;
ArticleSection.defaultProps = defaultProps;

export default ArticleSection;
