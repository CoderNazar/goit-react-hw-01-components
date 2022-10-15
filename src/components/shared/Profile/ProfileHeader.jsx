import React from 'react';
import PropTypes from 'prop-types';
import { Image, Heading, Text } from 'components/ui';

const ProfileHeader = ({ avatar, username, tag, location }) => {
  return (
    <div>
      <Image src={avatar} alt="avatar" />
      <Heading text={username} />
      <Text text={tag} />
      <Text text={location} />
    </div>
  );
};

ProfileHeader.defaultProps = {
  username: 'Alex',
  tag: 'tag',
  location: 'Kyiv',
  avatar: '',
};

ProfileHeader.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export { ProfileHeader };
