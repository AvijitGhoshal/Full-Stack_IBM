// Fetch movies from localStorage
const movies = JSON.parse(localStorage.getItem("movies")) || [];
const movieList = document.getElementById("movieList");
const noMoviesMsg = document.getElementById("noMoviesMsg");

if (movies.length === 0) {
    noMoviesMsg.style.display = "block";
} else {
    displayMovies(movies);
}

// Display movies
function displayMovies(movies) {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.length > 100 ? movie.description.slice(0, 100) + "..." : movie.description} 
                <a href="#" onclick="showFullDescription(${index})">Read More</a></td>
            <td>${movie.releaseYear}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" alt="${movie.name}" style="width: 50px; height: 50px;"></td>
            <td><button onclick="deleteMovie(${index})">Delete</button></td>
        `;

        movieList.appendChild(row);
    });
}

// Delete movie
function deleteMovie(index) {
    const updatedMovies = movies.filter((_, i) => i !== index);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    displayMovies(updatedMovies);
}

// Show full description on "Read More"
function showFullDescription(index) {
    alert(movies[index].description);
}

// Search movies by name or genre
document.getElementById("searchBar").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.name.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
});

// Back to home
document.getElementById("backToHomeBtn").addEventListener("click", function () {
    window.location.href = "index.html";
});
