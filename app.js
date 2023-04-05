const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

fetch('https://api.goprogram.ai/inspiration')
	.then(response => response.json())
	.then(data => {
		quote.textContent = data.quote
		author.textContent = data.author
	})
	.catch(error => console.error(error))
