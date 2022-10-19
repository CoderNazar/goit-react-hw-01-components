import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'components/ui';
import styles from './index.module.css';

const TransactionHistoryHeader = ({ namesTaleHeader }) => {
  return (
    <Table.Header className={styles.tableHeader}>
      <Table.Row>
        {namesTaleHeader.map((name, index) => {
          return <Table.CellHeader className={styles.tableCell} key={index}>{name}</Table.CellHeader>;
        })}
      </Table.Row>
    </Table.Header>
  );
};

TransactionHistoryHeader.propTypes = {
  namesTaleHeader: PropTypes.arrayOf(PropTypes.string),
};

export { TransactionHistoryHeader };
