import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import * as React from "react";

export default function ButtonAction({ onClick, text }) {
  return (
    <Button onClick={onClick} variant="contained" endIcon={<AddIcon />}>
      {text}
    </Button>
  );
}
