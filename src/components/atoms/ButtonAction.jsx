import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function ButtonAction({ onClick, text }) {
  return (
    <Button onClick={onClick} variant="contained" endIcon={<SendIcon />}>
      {text}
    </Button>
  );
}
