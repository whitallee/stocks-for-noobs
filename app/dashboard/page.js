"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import StockInterface from "../components/stock-interface";
import {
  mockCompanyDetails,
  mockHistoricalData,
  mockSearchResults,
} from "../constants/mock";


export default function Dashboard() {
  const [input, setInput] = useState("");
  const [displayedStock, setDisplayedStock] = useState("");
  const [matches, setMatches] = useState(mockSearchResults.result);

  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W")

  const clear = () => {
    setInput("");
    setMatches([]);
  };

  const updateMatches = () => {
    setMatches(mockSearchResults.result);
  };

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
          className="custom-font"
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
          width="90%"
          margin="24px"
          marginBottom="0px"
        >
          <input
            type="text"
            value={input}
            style={{
              width: "100%",
              padding: "16px",
              fontSize: "24px",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0px 0px 5px 0px",
            }}
            placeholder="Type the name of a company..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                setDisplayedStock(input);
                updateMatches();
                clear();
              }
            }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#023020", borderRadius: "8px" }}
            className="custom-font"
            onClick={() => {
              setDisplayedStock(input);
              clear();
            }}
          >
            Search
          </Button>
          {input && matches.length > 0 ? (
            <ul
              style={{
                position: "absolute",
                top: 100,
                width: "50%",
                borderRadius: "8px",
                height: "300px",
                overflowY: "scroll",
                backgroundColor: "white",
                boxShadow: "0px 0px 5px 0px",
              }}
              className="scrollbar"
            >
              {matches.map((match) => {
                return (
                  <li
                    key={match.symbol}
                    style={{
                      cursor: "pointer",
                      padding: "24px",
                      margin: "12px",
                      display: "flex",
                      borderRadius: "8px",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    className="hover:bg-green-200"
                  >
                    <span>{match.symbol}</span>
                    <span>{match.description}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </Box>
        {displayedStock ? (
          <StockInterface
            stockName={displayedStock}
            givenDetails={mockCompanyDetails}
            chartData={mockHistoricalData}
          />
        ) : (
          <Box
            border="none"
            borderRadius="24px"
            boxShadow="0px 0px 10px 0px"
            minWidth="300px"
            width="90%"
            flex="1"
            margin="24px"
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
              className="custom-font"
            >
              Sorry... we don&apos;t know that one. Please search for a stock!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
