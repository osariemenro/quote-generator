// Get Quote From API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e39ddc964msh60f9aee978e52c8p10d531jsn24622d8b22f5',
		'X-RapidAPI-Host': 'theysaidso.p.rapidapi.com'
	}
};

fetch('https://theysaidso.p.rapidapi.com/quote/random?language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));