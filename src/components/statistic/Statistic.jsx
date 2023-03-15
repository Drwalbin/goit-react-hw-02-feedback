import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const Array = [
    [1, `Good: ${good}`],
    [2, `Neutral: ${neutral}`],
    [3, `Bad: ${bad}`],
    [4, `Total: ${total}`],
    [5, `Positive feedback: ${positivePercentage} % `],
  ];

  return (
    <ul className={styles.list}>
      {Array.map(([id, superString]) => (
        <li key={id} className={styles.item}>
          <span className={styles.paragraph}>{superString}</span>
        </li>
      ))}
    </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};