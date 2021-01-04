import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import getTime from '../../utils/getTime';

const propTypes = {
  /** Id of the card */
  id: PropTypes.number.isRequired,
  /** date of the card */
  date: PropTypes.string.isRequired,
  /** Title of the card */
  title: PropTypes.string.isRequired,
  /** Description of the card */
  description: PropTypes.string.isRequired,
  /** Url of the card */
  url: PropTypes.string.isRequired,
};

const ArticleCard = ({ id, date, title, description, url }) => {
  if (!title) return null;
  return (
    <Card className="h-100 text-white" id={id}>
      <Card.Body className="d-flex flex-column">
        <div className="font-weight-bold mb-2">{getTime(date)}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent pt-0 border-top-0 pb-4">
        <Card.Link
          href={url}
          className="d-inline-block font-weight-bold text-white rounded p-2 text-uppercase border border-white"
        >
          Read more
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

ArticleCard.propTypes = propTypes;

export default ArticleCard;
