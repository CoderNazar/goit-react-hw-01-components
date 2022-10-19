import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'components/ui';
import styles from './index.module.css';

const TransactionHistoryBody = ({ items }) => {
  return (
    <Table.Body className={styles.tableBody}>
      {items.map(({ id, ...dataTable }) => {
        const cells = Object.values(dataTable);
        return (
          <Table.Row key={id}>
            {cells.map((value, index) => {
              return <Table.CellBody className={styles.tableCell} key={index}>{value}</Table.CellBody>;
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
