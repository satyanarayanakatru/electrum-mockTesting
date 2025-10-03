import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListAltIcon from "@mui/icons-material/ListAlt";

export interface Column {
  field: string;
  headerName: string;
  render?: (value: any, row: any, index: number) => React.ReactNode;
}

interface DynamicTableProps {
  columns: Column[];
  rows: any[];
  onDelete?: (index: number) => void;
  onLogs?: (index: number) => void;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  rows,
  onDelete,
  onLogs,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.field}>{col.headerName}</TableCell>
            ))}
            {onLogs && <TableCell>Logs</TableCell>}
            {onDelete && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col.field}>
                  {col.render
                    ? col.render(row[col.field], row, index)
                    : row[col.field]}
                </TableCell>
              ))}
              {onLogs && (
                <TableCell>
                  <IconButton color="secondary" onClick={() => onLogs(index)}>
                    <ListAltIcon />
                  </IconButton>
                </TableCell>
              )}
              {onDelete && (
                <TableCell>
                  <IconButton color="error" onClick={() => onDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
