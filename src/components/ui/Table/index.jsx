import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { TableCellBody } from './TableCellBody';
import { TableCellHeader } from './TableCellHeader';

const TableComponent = ({ children }) => {
  return <table>{children}</table>;
};

TableComponent.displayName = 'Table';
TableRow.displayName = 'Table.Row';
TableBody.displayName = 'Table.Body';
TableHeader.displayName = 'Table.Header';
TableCellBody.displayName = 'Table.CellBody';
TableCellHeader.displayName = 'Table.CellHeader';

TableComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Table = Object.assign(TableComponent, {
  Row: TableRow,
  Body: TableBody,
  Header: TableHeader,
  CellBody: TableCellBody,
  CellHeader: TableCellHeader,
});
