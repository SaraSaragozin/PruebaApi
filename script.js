const charactersContainer = document.getElementById('characters-container');

fetch('https://api.disneyapi.dev/character')
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
            
            const nameElement = document.createElement('h2');
            nameElement.textContent = character.name;

            const moviesElement = document.createElement('p');
            moviesElement.textContent = `Movies: ${character.movies.join(', ')}`;

            characterDiv.appendChild(nameElement);
            characterDiv.appendChild(moviesElement);

            charactersContainer.appendChild(characterDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching characters:', error);
    });
