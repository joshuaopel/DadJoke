document.addEventListener('DOMContentLoaded', function() {
    var jokeDisplayField = document.getElementById('jokeDisplayField');
    var generateJokeButton = document.getElementById('generateJokeButton');
    
    var dadJokes = [
        "Why don't scientists trust atoms? Because they make up everything.",
        "Why did the bicycle fall over? Because it was two tired.",
        "What do you call cheese that isn't yours? Nacho cheese.",
        // add as many jokes as you want
    ];
    
    generateJokeButton.addEventListener('click', function() {
        var randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];
        jokeDisplayField.textContent = randomJoke;
    });
});
