async function getQuote() {
  try {
    const urlQ = 'https://api.quotable.io/quotes/random?tags=famous-quotes';
    const response = await fetch(urlQ);
    const data = await response.json();
    const quote = data[0].content;

    const words = quote.split(' ');

    if (words.length > 17) {
      return getQuote();
    }

    return quote;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to get quote');
  }
}
