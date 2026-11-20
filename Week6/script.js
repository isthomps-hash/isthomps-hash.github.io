
// Interaction 1: Greeting button
const greetingButton = document.getElementById("greeting-button");
const greetingMessage = document.getElementById("greeting-message");

function showGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingMessage.textContent = "Good morning, gamer!";
    } else if (hour < 18) {
        greetingMessage.textContent = "Good afternoon, gamer!";
    } else {
        greetingMessage.textContent = "Good evening, gamer!";
    }
}

greetingButton.addEventListener("click", showGreeting);


// Interaction 2: Switch between light and dark themes
const themeButton = document.getElementById("theme-button");

function switchTheme() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Switch to Light";
    } else {
        themeButton.textContent = "Switch to Dark";
    }
}

themeButton.addEventListener("click", switchTheme);


// Interaction 3: Hover over a game card
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.backgroundColor = "#e8edff";
    });

    card.addEventListener("mouseleave", function() {
        card.style.backgroundColor = "";
    });
});


// Interaction 4: Search and filter games
const gameSearch = document.getElementById("game-search");
const searchMessage = document.getElementById("search-message");

function searchGames() {
    const searchText = gameSearch.value.toLowerCase();
    let visibleGames = 0;

    gameCards.forEach(function(card) {
        const gameName = card.querySelector("h3").textContent.toLowerCase();

        if (gameName.includes(searchText)) {
            card.style.display = "";
            visibleGames++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleGames === 0) {
        searchMessage.textContent = "No games found. Try another name!";
    } else {
        searchMessage.textContent = "Games found: " + visibleGames;
    }
}

gameSearch.addEventListener("input", searchGames);


// Interaction 5: Add or remove favorite games
const favoriteButtons = document.querySelectorAll(".favorite-button");

function toggleFavorite(event) {
    const button = event.currentTarget;
    button.classList.toggle("is-favorite");

    if (button.classList.contains("is-favorite")) {
        button.textContent = "★ Added to Favorites";
    } else {
        button.textContent = "Add to Favorites";
    }
}

favoriteButtons.forEach(function(button) {
    button.addEventListener("click", toggleFavorite);
});