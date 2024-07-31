import { argv, exit } from "node:process";
import { fetchURL, printReport } from "./check.js";
import config from "./config.json" assert { type: "json" };

async function main() {
  var symbols = config.symbols;
  console.log(`loaded the following symbols from the config file:`);

  for (const symbol of symbols) {
    try {
      console.log(`checking stock symbol: ${symbol}`);
      var text = await fetchURL(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.API_KEY}`
      );
      printReport(text);
    } catch (error) {
      console.error(error.message);

      exit();
    }
  }
}

main();
