/******************************************
Author: Mary Grace A. Gusso
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Attempted Grade: Exceeds Expectations
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  This array holds objects that contain information about a given quote.
  Each object in the array contains a quote and source property and some contain 
  additional properties. These aditional properties could be: category, year, citation.
***/
var quotes = [
  { quote: "Never give up, for that is just the place and time that the tide will turn.",
    source: "Harriet Beecher Stowe"
  },
  { quote: "Be not afraid of growing slowly, be afraid of standing still.",
    source: "Chinese Proverb",
    category: "Philosophy"
  },
  { quote: "Everything that happens, happens of necessity.",
    source: "Arthur Schopenhauer"
  },
  { quote: "Every day, you have the power to choose our better history - by opening your hearts" +
           "and minds, by speaking up for what you know is right.",
    source: "Michelle Obama",
    year: "2014"
  },
  { quote: "She believed she could, so she did.",
    source: "R.S. Grey",
    citation: "Scoring Widler",
    category: "Literary quote"
  }
];
//console.log(quotes); //testing to see if the quotes object contains anything



/***
  This function calculates a random number between 0 and the length of the quotes
  array. The object that lives at that calculated index of the quote array is returned.
  Function output: A object from the quotes array.
***/
function getRandomQuote (){
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

//console.log(Object.keys(getRandomQuote())); //testing to see if a random quote is being returned


/***
  This fuction gets three different random numbers, each stored in their own variable.
  A string is constructed int he return statement. 
  Function output: a string representing a rgb value.
 ***/
function randomBackgroundColor(){
  //generate three separate random numbers
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ',' + g + ',' + b + ')';

}


/***
  This function captures a quote object into the local variable quoteInfo. Using that
  a string is constructed that will be used target the inner HTML of the 'quote-box'
  div in the index.html file. The string is built based on the properties the object
  has.
  The background of the page and the 'Show Another Quote' button are also updated.
***/
function printQuote() {
  var quoteInfo = getRandomQuote();
  var quoteHtmlString = "";

  //Create appropriate HTML string
  quoteHtmlString += '<p class = "quote">' + quoteInfo.quote + '</p>';
  quoteHtmlString += '<p class = "source">' + quoteInfo.source;

  //check for additional quote properties and finish building the inner html string
  if(quoteInfo.year){
    quoteHtmlString += '<span class = "year">' + quoteInfo.year + '</span>';
  }

  if(quoteInfo.citation){
    quoteHtmlString += '<span class = "citation">' + quoteInfo.citation + '</span>';
  }

  if(quoteInfo.category){
    quoteHtmlString += '<span class = "category">' + '<br>' + quoteInfo.category + '</span>';
  }

  //add the ending paragraph tag to the quoteHtmlString
  quoteHtmlString += '</p>';

  //testing to see if the string is being built correctly
  //console.log(quoteHtmlString);

  //Targeting the innerHTML of the 'quote-box' div and replacing it with the 
  //newly constructed HTML string 
  document.getElementById('quote-box').innerHTML = quoteHtmlString;

  //Targeting the documents' background color to change it to the randomly generated rgb color
  //console.log(randomBackgroundColor());
  var randomColor = randomBackgroundColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;

}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/

// display a new quote every 15 seconds
setInterval(printQuote, 15000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// Remember to delete the comments that came with this file, and replace them with your own code comments.