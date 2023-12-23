import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ButtonAction from "../atoms/ButtonAction";

export const Macros = ({ childen, handleNewItem }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            lg: "70%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
        }}
        marginY={8}
      >
        <Box>
          <Typography variant="h1" sx={{ fontSize: 24 }}>
            Macros
          </Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column", alignItems:"flex-end"}}> 
          <ButtonAction onClick={handleNewItem} text={"Nuevo Macro"} />
          {childen}
        </Box>
      </Box>
    </Box>
  );
};
