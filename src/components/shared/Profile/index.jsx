import React from 'react';
import PropTypes from 'prop-types';
import { ProfileHeader } from './ProfileHeader';
import { ProfileBody } from './ProfileBody';

const Profile = ({ stats, ...dataHeader }) => {
  const allStats = Object.entries(stats);
  return (
    <div>
      <ProfileHeader {...dataHeader} />
      <ProfileBody allStats={allStats} />
    </div>
  );
};

Profile.defaultProps = {
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export { Profile };
