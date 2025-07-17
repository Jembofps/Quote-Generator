const twitterBtn = document.getElementById("twitter");
const newQuotesBtn = document.getElementById("next-quote");
const quoteText = document.getElementById("text");
const authorText = document.getElementById("author");

let apiQuotes = [];

const newQuotes = () => {
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (authorText === null) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quotes.author;
  }
  if (quoteText > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quotes.text;
};

const getQuotes = async () => {
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
  } catch {
    //Catch Error
  }
  newQuotes();
};

const tweetQuotes = () => {
  const apiTweet = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(apiTweet, "_blank");
};
twitterBtn.addEventListener("click", tweetQuotes);
newQuotesBtn.addEventListener("click", newQuotes);
getQuotes();
