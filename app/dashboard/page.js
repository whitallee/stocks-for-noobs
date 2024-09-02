"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import StockInterface from "../components/stock-interface";

export default function Dashboard() {
  const [stockName, setStockName] = useState("");
  const [displayedStock, setDisplayedStock] = useState("");

  const handleSearch = () => { };

  return (
    <Box height="100vh" width="100vw" display="flex" alignItems="flex-start">
      <Box
        height="100vh"
        maxWidth="300px"
        bgcolor="#023020"
        color="white"
        padding="24px"
        display="flex"
        flexDirection="column"
      >
        <Typography
          fontSize="42px"
          textAlign="center"
        //   border="2px solid red"
        >
          Portfolio Holdings
        </Typography>
        <Stack
          //   border="2px solid red"
          flex="1"
        ></Stack>
      </Box>
      <Box
        minWidth="300px"
        height="100vh"
        flex="1"
        // border="2px solid red"
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          gap="24px"
          //   border="2px solid red"
          width="85%"
          margin="0 auto"
          marginTop="24px"
        >
          <input
            type="text"
            value={stockName}
            style={{
              width: "100%",
              padding: "16px",
              fontSize: "24px",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0px 0px 5px 0px",
            }}
            placeholder="Type the name of a company..."
            onChange={(e) => setStockName(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#023020" }}
            onClick={() => {
              setDisplayedStock(stockName);
              setStockName("");
            }}
          >
            Search
          </Button>
        </Box>
        {displayedStock ? (
          <StockInterface stockName={displayedStock} />
        ) : (
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
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h3"
              color="rgba(0,0,0,.7)"
              textAlign="center"
              maxWidth="50%"
            >
              Sorry... we don&apos;t know that one. Please search for a stock!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
