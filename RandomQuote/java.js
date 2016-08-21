function getQuote(){
  var quoteArr = new Array("quote 1","quote 2","quote 3","quote 4","quote 5");

  var random = quoteArr[Math.floor(Math.random() * quoteArr.length)];

  document.getElementById("quote").innerHTML=random;
}
