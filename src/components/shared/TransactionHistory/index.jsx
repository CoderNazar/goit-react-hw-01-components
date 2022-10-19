import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'components/ui';
import { TransactionHistoryHeader } from './TransactionHistoryHeader';
import { TransactionHistoryBody } from './TransactionHistoryBody';

const TransactionHistory = ({ items }) => {
  const FIRST_ELEMENT = 0;
  const START_CUT = 1;
  const namesTaleHeader = useMemo(
    () => Object.keys(items[FIRST_ELEMENT] || []).slice(START_CUT),
    [items]
  );

  if (!items.length) {
    return null;
  }

  return (
    <Table>
      <TransactionHistoryHeader namesTaleHeader={namesTaleHeader} />
      <TransactionHistoryBody items={items} />
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export { TransactionHistory };
