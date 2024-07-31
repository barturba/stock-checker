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
  for (let [key, value] of Object.entries(output["Time Series (Daily)"])) {
    console.log(`${key} = ${JSON.stringify(value, 0, 2)}`);
  }
}
export { fetchURL, printReport };
