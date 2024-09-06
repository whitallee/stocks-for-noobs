"use client";

import { useState } from "react";
import StockInterface from "../components/stock-interface";
import {
  mockCompanyDetails,
  mockHistoricalData,
  mockSearchResults,
} from "../constants/mock";
import StockContext from "../context/stock-context";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [displayedStock, setDisplayedStock] = useState("");
  const [matches, setMatches] = useState(mockSearchResults.result);
  const [stockSymbol, setStockSymbol] = useState("FB");

  const clear = () => {
    setInput("");
    setMatches([]);
  };

  const updateMatches = async () => {
    try {
      if (input) {
        const searchResults = await fetch("../api/search-results");
        const result = searchResults.result;
        setMatches(result)

      }
    } catch (error) {
      setMatches([]);
      console.error(error);
    }
  };

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <div className="h-screen w-screen flex">
        {/* Sidebar */}
        <div className="h-full w-72 bg-green-900 text-white p-6 flex flex-col">
          <h1 className="text-4xl text-center mb-8">Portfolio Holdings</h1>
          <div className="flex-1"></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 h-full flex flex-col p-6">
          {/* Search Section */}
          <div className="flex gap-6 mb-4 w-full">
            <input
              type="text"
              value={input}
              className="flex-grow p-4 text-lg border-none rounded-lg shadow"
              placeholder="Type the name of a company..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setDisplayedStock(input);
                  updateMatches();
                  clear();
                }
              }}
            />
            <button
              onClick={() => {
                setDisplayedStock(input);
                clear();
              }}
              className="bg-green-900 text-white px-6 py-4 rounded-lg"
            >
              Search
            </button>
          </div>

          {/* Search Results */}
          {input && matches.length > 0 ? (
            <ul className="absolute top-24 w-1/2 bg-white rounded-lg shadow overflow-y-auto max-h-64">
              {matches.map((match) => (
                <li
                  key={match.symbol}
                  className="cursor-pointer p-4 hover:bg-green-200 flex justify-between"
                  onClick={() => setDisplayedStock(match.symbol)}
                >
                  <span>{match.symbol}</span>
                  <span>{match.description}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {/* Stock Interface */}
          {displayedStock ? (
            <StockInterface
              stockName={displayedStock}
              givenDetails={mockCompanyDetails}
              chartData={mockHistoricalData}
            />
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 w-full p-6 rounded-lg shadow bg-white">
              <h2 className="text-3xl text-gray-700 text-center">
                Sorry... we don&apos;t know that one. Please search for a stock!
              </h2>
            </div>
          )}
        </div>
      </div>
    </StockContext.Provider>
  );
}
