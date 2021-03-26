//todo: target id
const quoteContainer = document.getElementById('quote-container'); // Quote Container
const quoteText = document.getElementById('quote'); // Quote
const authorText = document.getElementById('author');// author
const twitterbtn = document.getElementById('twitter'); //twitter button
const newQuoteBtn = document.getElementById('new-quote'); //new Quote Button


// //Todo:  for Loader
const loader = document.getElementById('loader')
//Show Loading
function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden =true;
}
//Hide Loading
function removeLoadingSpinner(){
    if (!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

//TODO: Get Quote From API

async function getQuote() {
    showLoadingSpinner();

    //TODO: Avoid CORS we use Proxy URL

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const proxyUrl = 'https://cors.bridged.cc/'
    const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'; // Api URL

    try {
        const response = await fetch(proxyUrl + apiURL); // https://cors.bridged.cc/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json
        console.log(response);
        const data = await response.json();
        // todo: If Author is blank we display Unknowns else show his name
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        // TODO: Reduce FontSize for Long Quotes
        if (data.quoteText.length > 120){
            quoteText.classList.add('long-quote');
        }
        else {
            quoteText.classList.remove('long-quote');
        }
        // variable         =   data from api's
        quoteText.innerText = data.quoteText;
        // console.log(data);
        //Stop Loader,show Quote
        removeLoadingSpinner();

    } catch (error) {
        getQuote();// use if any error then we call it again
        console.log('Whoops, No Quote', error);
    }

}

//TODO: For Tweet Quote

function tweetQuote() {
    const quote = quoteText.innerText;
    const author= authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    //New Tab
    window.open(twitterUrl,'_blank');

}
// Event Listener
newQuoteBtn.addEventListener('click',getQuote) // New Quote Button
twitterbtn.addEventListener('click',tweetQuote) // Twitter Button


// On Load
getQuote();
