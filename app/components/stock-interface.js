"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function StockInterface({ stockName }) {
  return (
    <Box
      border="none"
      borderRadius="24px"
      boxShadow="0px 0px 10px 0px"
      minWidth="300px"
      width="85%"
      flex="1"
      margin="24px auto"
      padding="16px"
      display="flex"
      flexDirection="column"
      gap="16px"
    >
      <Typography
        fontSize="50px"
        fontWeight="bold"
        width="100%"
        noWrap
        border="none"
        minHeight="50px"
        padding="8px"
      >
        {stockName}
      </Typography>

      <Box flex="1" display="flex" gap="16px">
        <Box
          flex="1"
          border="none"
          borderRadius="8px"
          boxShadow="0px 0px 5px 0px"
        ></Box>
        <Stack minWidth="30%" display="flex" flexDirection="column" gap="16px">
          <Box
            flex="1"
            border="none"
            borderRadius="8px"
            boxShadow="0px 0px 5px 0px"
          ></Box>
          <Typography
            border="none"
            borderRadius="8px"
            boxShadow="0px 0px 5px 0px"
            minHeight="200px"
          ></Typography>
        </Stack>
      </Box>
    </Box>
  );
}
