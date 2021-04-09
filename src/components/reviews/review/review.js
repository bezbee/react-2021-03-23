import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reviewTextSelector,
  reviewRatingSelector,
  reviewUserSelector,
} from '../../../redux/selectors';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, user, text, rating }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => {
  return {
    user: reviewUserSelector(state, props),
    text: reviewTextSelector(state, props),
    rating: reviewRatingSelector(state, props),
  };
})(Review);
