import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/ui';
import { FriendListItem } from './FriendListItem';
import styles from './index.module.css';

const FriendList = ({ friends }) => {
  
  if (!friends.length) {
    return null;
  }

  return (
    <List className={styles.wrapperFriendList}>
      {friends.map(({ id, ...dataFriendItem }) => {
        return <FriendListItem key={id} {...dataFriendItem} />;
      })}
    </List>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export { FriendList };
