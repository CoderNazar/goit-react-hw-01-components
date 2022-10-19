import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'components/ui';

const TransactionHistoryBody = ({ items }) => {
  return (
    <Table.Body>
      {items.map(({ id, ...dataTable }) => {
        const cells = Object.values(dataTable);
        return (
          <Table.Row key={id}>
            {cells.map((value, index) => {
              return <Table.CellBody key={index}>{value}</Table.CellBody>;
            })}
          </Table.Row>
        );
      })}
    </Table.Body>
  );
};

TransactionHistoryBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export { TransactionHistoryBody };
