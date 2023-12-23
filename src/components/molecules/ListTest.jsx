import { TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

export default function ListTest({ children }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Sub Tipo Examen</TableCell>
            <TableCell align="left">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
