import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'components/ui';
import { firstLetterToUppercase } from 'utils/helpers';

const ProfileBody = ({ allStats }) => {
  return (
    <ul>
      {allStats.map(([label, quantity], index) => {
        const newLabel = firstLetterToUppercase(label);
        return <Item key={index} label={newLabel} quantity={quantity} />;
      })}
    </ul>
  );
};

export { ProfileBody };
