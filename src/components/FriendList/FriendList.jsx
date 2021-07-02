import PropTypes from 'prop-types';
import defaultImage from '../../mock-data/default.png';
import css from '../FriendList/FriendList.module.css';

function Friend({ avatar = defaultImage, name, isOnline }) {
  const onlineStatus = `${isOnline ? 'online' : 'offline'}`;
  return (
    <>
      <span className={css[onlineStatus]}></span>
      <img className={css.avatar} src={avatar} alt={name} width="150" />
      <p className={css.name}>{name}</p>
    </>
  );
}

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li key={id} className={css.item}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
