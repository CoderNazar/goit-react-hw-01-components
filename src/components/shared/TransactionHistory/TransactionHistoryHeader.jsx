import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'components/ui';

const TransactionHistoryHeader = ({ namesTaleHeader }) => {
  return (
    <Table.Header>
      <Table.Row>
        {namesTaleHeader.map((name, index) => {
          return <Table.CellHeader key={index}>{name}</Table.CellHeader>;
        })}
      </Table.Row>
    </Table.Header>
  );
};

TransactionHistoryHeader.propTypes = {
  namesTaleHeader: PropTypes.arrayOf(PropTypes.string),
};

export { TransactionHistoryHeader };
