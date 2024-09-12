const API_KEY = "4b95aa16f04966197e2929f3cd78426d";

const ul = document.getElementById("dropdown-id");
const content = document.getElementById("content");

const buttonValues = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];


  let card1 = `<div class="card m-2" class="col" style="width: 18rem">
        <img
          src="${"https://picsum.photos/id/23/200/300"}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${"TİTLE"}</h5>
          <p class="card-text">
          ${"CONTENT"}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${"BİLGİ1"}</li>
          <li class="list-group-item">${"BİLGİ2"}</li>
          <li class="list-group-item">${"BİLGİ3"}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">${"LİNK1"}</a>
          <a href="#" class="card-link">${"Lİnk2"}</a>
        </div>
      </div>`;
  content.insertAdjacentHTML("beforeend", card1);


for (let i = 0; i < buttonValues.length; i++) {
  var button_values = buttonValues[i];
  let li = `<li><a class="dropdown-item" id="${button_values}" href="#">${button_values}</a></li>`;
  ul.insertAdjacentHTML("beforeend", li);
}
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjk1YWExNmYwNDk2NjE5N2UyOTI5ZjNjZDc4NDI2ZCIsIm5iZiI6MTcyNjA2NzAxOS4wODYxMDMsInN1YiI6IjY2YmFiMjE5NDBiNzZjNzAyMjFhZWE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._zc1plly9CGZcJLVidYVLQ1F6dNzeONbjK99cUbngL0",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=true",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
