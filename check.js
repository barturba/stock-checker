async function fetchURL(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error(error.message);
  }
}

function printReport(text) {
  var output = JSON.parse(text);
  const symbol = Object.entries(output["Meta Data"])[1][1];
  const price = JSON.stringify(
    Object.entries(output["Time Series (Daily)"])[0],
    0,
    2
  );

  console.log(`Symbol: ${symbol} Price: ${price}`);
}
export { fetchURL, printReport };
