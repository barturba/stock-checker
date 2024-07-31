async function fetchURL(url) {
  try {
    console.log(`fetching ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(`response: ${JSON.stringify(response)}`);
    const contentType = response.headers.get("content-type");
    console.log(`contentType: ${JSON.stringify(contentType)}`);
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error(error.message);
  }
}
export { fetchURL };
