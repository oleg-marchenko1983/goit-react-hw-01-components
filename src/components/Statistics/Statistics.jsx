import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function StatItem({ label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}

export default function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <StatItem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
