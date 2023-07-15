async function getQuote() {
  try {
    const urlQ = 'https://api.quotable.io/quotes/random?tags=famous-quotes';
    const response = await fetch(urlQ);
    const data = await response.json();
    return data[0].content;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to get quote');
  }
}
