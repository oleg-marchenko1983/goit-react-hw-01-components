import PropTypes from 'prop-types';
import defaultImage from '../../mock-data/default.png';
import css from '../FriendList/FriendList.module.css';

export function Friend({ avatar = defaultImage, name, isOnline }) {
  const onlineStatus = `${isOnline ? 'online' : 'offline'}`;
  return (
    <>
      <span className={css[onlineStatus]}></span>
      <img className={css.avatar} src={avatar} alt={name} width="150" />
      <p className={css.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
