document.getElementById("movieForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from form
    const movieName = document.getElementById("movieName").value;
    const movieDescription = document.getElementById("movieDescription").value;
    const releaseYear = document.getElementById("releaseYear").value;
    const rating = document.getElementById("rating").value;
    const genre = document.getElementById("genre").value;
    const moviePoster = document.getElementById("moviePoster").value;

    // Validation: Check if all fields are filled
    if (!movieName || !movieDescription || !releaseYear || !rating || !genre || !moviePoster) {
        alert("Please fill all fields!");
        return;
    }

    // Movie object
    const movie = {
        name: movieName,
        description: movieDescription,
        releaseYear: releaseYear,
        rating: rating,
        genre: genre,
        poster: moviePoster
    };

    // Get movies from localStorage or initialize to an empty array
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    // Add the new movie
    movies.push(movie);

    // Save back to localStorage
    localStorage.setItem("movies", JSON.stringify(movies));

    // Confirmation and clear form
    alert("Movie added successfully!");
    document.getElementById("movieForm").reset();
});

document.getElementById("viewMoviesBtn").addEventListener("click", function () {
    window.location.href = "movie.html";
});
