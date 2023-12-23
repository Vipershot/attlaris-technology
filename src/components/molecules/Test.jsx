import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

export const Test = ({id, title, description, active, openMacros, editMacros, delteMacros}) => {
  return (
    <>
          <TableRow
            key={title}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="left" component="th" scope="items">
              {id}
            </TableCell>
            <TableCell align="left">{title}</TableCell>
            <TableCell align="left">{description}</TableCell>
            <TableCell align="left">
              {active}
            </TableCell>
            <TableCell
              sx={{ cursor: "pointer" }}
              onClick={openMacros}
              align="left"
            >
              <SearchIcon />
            </TableCell>
            <TableCell
              sx={{ cursor: "pointer" }}
              onClick={editMacros}
              align="left"
            >
              <EditIcon />
            </TableCell>
            <TableCell
              sx={{ cursor: "pointer" }}
              onClick={delteMacros}
              align="left"
            >
              <ClearIcon />
            </TableCell>
          </TableRow>
    </>
  );
};
