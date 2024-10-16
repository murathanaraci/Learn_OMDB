// Seçilen değeri almak için async fonksiyon
async function getSelectedValue() {
  var dropdown = document.getElementById("myDropdown");
  var selectedValue = dropdown.value;
  console.log("Seçilen değer: " + selectedValue);
  return selectedValue; // Fonksiyon sonucunda seçilen değeri geri döndür
 
}

// Dropdown ve content elementleri
const ul = document.getElementById("dropdown-id");
const content = document.getElementById("content");
const buttonValues = [
  { name: "Action", value: "28" },
  { name: "Adventure", value: "12" },
  { name: "Animation", value: "16" },
  { name: "Comedy", value: "35" },
  { name: "Crime", value: "80" },
  { name: "Documentary", value: "99" },
  { name: "Drama", value: "18" },
  { name: "Family", value: "10751" },
  { name: "Fantasy", value: "14" },
  { name: "History", value: "36" },
  { name: "Horror", value: "27" },
  { name: "Music", value: "10402" },
  { name: "Mystery", value: "9648" },
  { name: "Romance", value: "10749" },
  { name: "Science Fiction", value: "878" },
  { name: "TV Movie", value: "10770" },
  { name: "Thriller", value: "53" },
  { name: "War", value: "10752" },
  { name: "Western", value: "37" },
];

// Dropdown'a seçenekleri ekle
buttonValues.forEach(button_value => {
  let option = `<option value="${button_value.value}">${button_value.name}</option>`;
  document.getElementById("myDropdown").insertAdjacentHTML("beforeend", option);
});

const API_KEY = '4b95aa16f04966197e2929f3cd78426d';
const BASE_URL = 'https://api.themoviedb.org/3';

// Popüler filmleri getiren async fonksiyon
async function getPopularMovies(page = 1) {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await response.json();
  return data.results;
}

// İlk 400 filmi getir ve seçilen tür filmlerini filtrele
async function getTopChosenMovies() {
  let movies = [];
  let chosenMovies = [];

  // İlk 20 sayfayı çek (her sayfada 20 film var, toplamda 400 film)
  for (let i = 1; i <= 20; i++) {
    const pageMovies = await getPopularMovies(i);
    movies = movies.concat(pageMovies); // Filmleri birleştir
  }

  // Dropdown'dan seçilen değeri al
  const selectedValue = await getSelectedValue();

  // Seçilen türe göre filmleri filtrele
  chosenMovies = movies.filter(movie => movie.genre_ids.includes(parseInt(selectedValue)));

  // İlk 5 seçilen tür filmini al
  const top5ChosenMovies = chosenMovies.slice(0, 5);
// Sayfayı temizle
  document.getElementById("content").innerHTML="";
  // Sonuçları göster
  top5ChosenMovies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title} (${movie.release_date}) - Rating: ${movie.vote_average}`);
    createCard(movie); // Her bir film için kart oluştur
  });
}

// Film için kart oluşturma fonksiyonu
function createCard(movie) {
  let card = `<div class="card m-2" class="col" style="width: 18rem">
        <img
          src="${"https://image.tmdb.org/t/p/w500" + movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
        />
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
          ${movie.overview || "No description available."}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Release Date: ${movie.release_date}</li>
          <li class="list-group-item">Rating: ${movie.vote_average}</li>
          <li class="list-group-item">Popularity: ${movie.popularity}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">More Info</a>
        </div>
      </div>`;
  content.insertAdjacentHTML("beforeend", card);
  
 
}

