
const quotes = [
  "The man who does not read books has no advantage over the one who cannot read them. - Mark Twain",
  "Teachers can open the door, but you must enter it yourself. - Chinese Proverb",
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
  "Education is the most powerful weapon you can use to change the world. - BB King",
  "The mind is not a vessel to be filled but a fire to be ignited. - Plutarch",
  "Don't let what you cannot do interfere with what you can do. - John Wooden",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "A person who never made a mistake never tried anything new. - Albert Einstein"
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", generateRandomQuote);
generateRandomQuote();
