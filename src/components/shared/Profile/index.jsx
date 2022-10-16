import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ProfileHeader } from './ProfileHeader';
import { ProfileBody } from './ProfileBody';
import styles from './index.module.css';

const Profile = ({ stats, username, tag, location, avatar }) => {
  const allStats = useMemo(() => Object.entries(stats), [stats]);
  return (
    <div className={styles.wrapperProfile}>
      <ProfileHeader
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileBody allStats={allStats} />
    </div>
  );
};

Profile.defaultProps = {
  username: '',
  tag: '',
  location: '',
  avatar: '',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export { Profile };
