import React from 'react';
import PropTypes from 'prop-types';
import { Item, Text, Image } from 'components/ui';
import { FriendIsOnline } from './FriendIsOnline';
import styles from './index.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <Item className={styles.wrapperFriendItem}>
        <FriendIsOnline isOnline={isOnline} />
        <Image
          src={avatar}
          alt={'avatar'}
          circle={false}
          width={48}
          height={48}
        />
        <Text text={name} />
      </Item>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { FriendListItem };
