const quoteContainer = document.getElementById("quote__container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new__quote")
const loader = document.getElementById("loader")

// Show loading
const loading = () => {
	loader.hidden = false
	quoteContainer.hidden = true
}

const complete = () => {
	if(!loader.hidden) {
		quoteContainer.hidden = false
		loader.hidden = true
	}
}

async function getQuotes() {
	loading()
	const apiUrl = "https://my-json-server.typicode.com/osariemenro/quote-generator/db"

	try {
		const response = await fetch(apiUrl)
		const data = await response.json()

		renderData(data)
		complete()
	} catch (error) {
		console.log(error)
	}
}

const renderData = (data) => {
	const random = Math.floor((data.quotes.length * Math.random()))
	const quotes = data.quotes[random]

	// if author is blank
	if(quotes.author === "") {
		authorText.textContent = "Unknown"
	}
	else {
		authorText.textContent = quotes.author
	}

	// reduce font size for characters greeter than 120
	if(quotes.quote.length > 30) {
		authorText.classList.add("long__quote")
	}
	else {
		authorText.classList.remove("long__quote")
	}

	quoteText.textContent = quotes.quote
}

// Tweet quote
const tweetQuote = () => {
	const quote = quoteText.textContent
	const author = authorText.textContent
	
	const twitterUrl = `https://www.twitter.com/intent/tweet/?text=${quote} - ${author}`
	window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener("click", getQuotes)
twitterBtn.addEventListener("click", tweetQuote)

getQuotes()