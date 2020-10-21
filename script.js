
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // SELECTORS 
let quoteBtn = document.getElementById('firstButton'); 

// EVENT LISTENERS 

quoteBtn.addEventListener('click',fetchQuote)

});


// Function

function fetchQuote(event) {
    let para = document.getElementById('paraQuote')
    fetch('https://api.kanye.rest')
  .then(response => response.json())
  .then(function(data) {
    if(data.quote.includes('shit')) {
      fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => para.innerText = data.quote)
    } else if(data.quote.includes('sex')) {
      fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => para.innerText = data.quote)
    } else if (data.quote.includes('fuck')) {
      fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => para.innerText = data.quote)
    } else if (data.quote.includes('fucking')) {
      fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => para.innerText = data.quote)
    } else if(data.quote.includes('porn')) {
      fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => para.innerText = data.quote)
    }
    else {
      return para.innerHTML = data.quote
    }
  });
  
}



