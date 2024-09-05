import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function StockInterface({ stockName, companyDetails, quoteData, chartData }) {
  if (!companyDetails || !quoteData || !chartData) {
    return <div>Loading data...</div>;
  }

  const chartConfig = {
    labels: chartData.t.map((timestamp) =>
      new Date(timestamp * 1000).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Stock Price",
        data: chartData.c, // 'c' is the closing price in the API response
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Stock Details */}
      <div className="mb-4">
        <h2 className="text-4xl font-bold">{companyDetails.name}</h2>
        <p className="text-lg">Ticker: {stockName}</p>
        <p className="text-lg">Market Cap: {companyDetails.marketCapitalization}</p>
        <p className="text-lg">Currency: {companyDetails.currency}</p>
      </div>

      {/* Stock Quote */}
      <div className="mb-4">
        <h3 className="text-3xl font-semibold">Current Price: ${quoteData.c}</h3>
        <p className={quoteData.dp > 0 ? "text-green-500" : "text-red-500"}>
          Change: {quoteData.d} ({quoteData.dp}%)
        </p>
      </div>

      {/* Historical Chart */}
      <div className="w-full h-64">
        <Line data={chartConfig} />
      </div>
    </div>
  );
}
