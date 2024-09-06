import { NextResponse } from "next/server";
const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${process.env.FINNHUB_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Error: ${response.status}`;
    throw new Error(message);
  }

  return new NextResponse.json(response);
};