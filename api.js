const API_KEY = '4b95aa16f04966197e2929f3cd78426d';
const BASE_URL = 'https://api.themoviedb.org/3';
const ACTION_GENRE_ID = 28; // Aksiyon türü için sabit ID (TheMovieDB'den alınabilir)

// Popüler filmleri getiren fonksiyon (sayfalı olarak)
async function getPopularMovies(page = 1) {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await response.json();
    return data.results;
}

// İlk 100 filmi getir ve aksiyon filmlerini filtrele
async function getTopActionMovies() {
    let movies = [];
    let actionMovies = [];

    // İlk 5 sayfayı çek (her sayfada 20 film var, toplamda 100 film)
    for (let i = 1; i <= 5; i++) {
        const pageMovies = await getPopularMovies(i);
        movies = movies.concat(pageMovies);
    }

    // Aksiyon filmlerini filtrele
    actionMovies = movies.filter(movie => movie.genre_ids.includes(ACTION_GENRE_ID));

    // İlk 5 aksiyon filmini al
    const top5ActionMovies = actionMovies.slice(0, 5);

    // Sonuçları göster
    top5ActionMovies.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title} (${movie.release_date}) - Rating: ${movie.vote_average} ${movie.image}`);
    });
}

// İşlemi başlat
getTopActionMovies();
