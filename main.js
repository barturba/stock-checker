import { argv, exit } from "node:process";
import { fetchURL, printReport } from "./check.js";
async function main() {
  if (argv.length < 3) {
    console.log("number of arguments less than 1");
    exit();
  } else if (argv.length > 3) {
    console.log("number of arguments greater than 1");
    exit();
  }

  const stockSymbol = argv[2];
  console.log(`starting at stock symbol: ${stockSymbol}`);
  try {
    console.log(`checking stock price for symbol: ${stockSymbol}`);
    var text = await fetchURL(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${process.env.API_KEY}`
    );
    printReport(text);
  } catch (error) {
    console.error(error.message);

    exit();
  }
}

main();
