const quotes = [
{
    quote : "quotetest",
    autohor : "11",
},

{
    quote : "quotetest2",
    autohor : "22",
},

{
    quote : "quotetest3",
    autohor : "33",
}

]

const quote = document.querySelector("#quotes span:first-child");
const authoer = document.querySelector("#quotes span:last-child");

const TodayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodayQuote.quote;
authoer.innerText = TodayQuote.authoer;