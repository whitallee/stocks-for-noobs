"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function StockInterface({ stockName, givenDetails, chartData }) {
  const stockDetailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const formatData = () => {
    return chartData.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(chartData.t[index]),
      };
    });
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
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
    >
      <Typography
        fontSize="50px"
        fontWeight="bold"
        width="100%"
        noWrap
        border="none"
        minHeight="50px"
        padding="8px"
        className="custom-font"
      >
        {stockName}
      </Typography>

      <Box flex="1" display="flex" gap="16px">
        <Box
          flex="1"
          flexShrink="0"
          border="none"
          borderRadius="8px"
          boxShadow="0px 0px 5px 0px"
        >
          <ResponsiveContainer>
            <AreaChart data={formatData(chartData)}>
              <defs>
                <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="green" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#023020" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#023020"
                fillOpacity={1}
                strokeWidth={0.5}
                fill="url(#chartColor)"
              />
              <Tooltip />
              <XAxis dataKey={"date"} />
              <YAxis domain={["dataMin", "dataMax"]} />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Stack
          maxWidth="27.5%"
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          <Box
            flex="1"
            border="none"
            borderRadius="8px"
            boxShadow="0px 0px 5px 0px"
            padding="12px"
            overflow="auto"
            className="scrollbar"
          >
            <Typography variant="h5" className="custom-font">
              Stock Details
            </Typography>
            <ul
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="divide-y-1"
            >
              {Object.keys(stockDetailsList).map((detail) => {
                return (
                  <li
                    key={detail}
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <span>
                      <strong>{stockDetailsList[detail]}</strong>
                    </span>
                    <span>
                      {detail === "marketCapitalization"
                        ? `${convertMillionToBillion(givenDetails[detail])}B`
                        : givenDetails[detail]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Box>
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
