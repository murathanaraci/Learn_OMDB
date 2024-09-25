

const ul = document.getElementById("dropdown-id");
const content = document.getElementById("content");

const buttonValues = [
  action={name:"Action",value:"28"},
  adventure={name:"Adventure",value:"12"},
  animated={name:"Animation",value:"16"},
  comedy  ={name:"Comedy",value:"35"} ,
  crime  ={name:"Crime",value:"80"} ,
  documentary={name:"Documentary",value:"99"},
  drama={name:"Drama",value:"18"},
  family ={name:"Family",value:"10751"},
  fantasy={name:"Fantasy",value:" 14"},
  history ={name:"History",value:"36"},
  horror ={name:"Horror",value:"27"},
  music ={name:"Music",value:"10402"},
  mystery  ={name:"Mystery",value:"9648"},
  romance ={name:"Romance",value:"10749"},
  sci_fi ={name:"Science Fiction",value:"878"} ,
  TV_movie ={name:"TV Movie",value:"10770"},
  thriller ={name:"Thriller",value:"53"},
  war ={name:"War",value:"10752"},
  western ={name:"Western",value:"37"},

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
  let li = `<li><a class="dropdown-item" id="${button_values.value}" href="#">${button_values.name}</a></li>`;
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

  console.log(button_values.value,buttonValues.name)