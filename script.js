let currentCategory = 'Any';

async function getJoke(category = 'Any') {
    currentCategory = category;
    updateTitle(category);
    
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();
        
        if (data.type === 'single') {
            document.getElementById('joke-text').textContent = data.joke;

        } else if (data.type === 'twopart') {
            document.getElementById('joke-text').textContent = `${data.setup}... ${data.delivery}`;

        }
    } catch (error) {
        document.getElementById('joke-text').textContent = 'Failed to load joke. Please try again.';

    }
}

function updateTitle(category) {
    const titleElement = document.getElementById('joke-title');
    if (category === 'Any') {
        titleElement.textContent = 'Joke Of The Day';

    } else if (category === 'Pun') {
        titleElement.textContent = 'A Random Pun';
        
    } else {
        titleElement.textContent = `A Random ${category} Joke`;
    }
}

window.onload = function() {
    getJoke('Any');
};