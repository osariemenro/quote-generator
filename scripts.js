const quoteContainer = document.getElementById("quote__container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new__quote")

async function getQuotes() {
	const apiUrl = "https://my-json-server.typicode.com/osariemenro/quote-generator/db"

	try {
		const response = await fetch(apiUrl)
		const data = await response.json()

		renderData(data)
	} catch (error) {
		console.log(error)
	}
}

const renderData = (data) => {
	const random = Math.floor((data.quotes.length * Math.random()))
	const quotes = data.quotes[random]

	quoteText.textContent = quotes.quote

	if(quotes.author === "") {
		authorText.textContent = "Unknown"
	}
	else {
		authorText.textContent = quotes.author
	}
}

getQuotes()