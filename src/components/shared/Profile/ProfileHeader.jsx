import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'components/ui';
import styles from './index.module.css';

const ProfileHeader = ({ avatar, username, tag, location }) => {
  const tagWithAt = `@${tag}`
  return (
    <div className={styles.wrapperProfileHeader}>
      <Image width={80} height={80} src={avatar} alt={"avatar"} className={styles.userAvatar} />
      <Text className={styles.userName} text={username} />
      <Text className={styles.userTag} text={tagWithAt} />
      <Text className={styles.userLocal} text={location} />
    </div>
  );
};

ProfileHeader.defaultProps = {
  username: 'Alex',
  tag: 'tag',
  location: 'Kyiv',
  avatar: 'https://i.stack.imgur.com/l60Hf.png',
};

ProfileHeader.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export { ProfileHeader };
