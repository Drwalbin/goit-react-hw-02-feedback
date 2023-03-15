import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={styles.paragraph}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};