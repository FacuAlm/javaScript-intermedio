// 1. Learn About Functional Programming
const prepareTea = () => "greenTea";

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

// 2. Understand Functional Programming Terminology

const prepareGreenTea = () => "greenTea";

const prepareBlackTea = () => "blackTea";

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// 3. Understand the Hazards of Using Imperative Code

const Window = function (tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab");
  return this;
};

Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index);
  var tabsAfterIndex = this.tabs.splice(1, index + 2);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

  return this;
};

let workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]);
let socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]);
let videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]);

let finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// 4. Avoid Mutations and Side Effects Using Functional Programming

let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

// 5. Pass Arguments to Avoid External Dependence in a Function
let fixedValue2 = 4;

function incrementer(valor) {
  return valor + 1;
}

incrementer(fixedValue2);

// 6. Refactor Global Variables Out of Functions

const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arreglo, bookName) {
  let arregloNuevo = [...arreglo];
  arregloNuevo.push(bookName);
  return arregloNuevo;
}

function remove(arreglo, bookName) {
  let arregloNuevo = [...arreglo];
  const book_index = arregloNuevo.indexOf(bookName);
  if (book_index >= 0) {
    arregloNuevo.splice(book_index, 1);
    return arregloNuevo;
  }
}

// 7. Use the map Method to Extract Data from an Array

// The global variable
const watchList2 = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

const ratings = watchList.map((pelicula) => ({
  title: pelicula["Title"],
  rating: pelicula["imdbRating"],
}));

console.log(JSON.stringify(ratings));

//8. Implement map on a Prototype

Array.prototype.myMap = function (callback) {
  var newArray = [];

  this.forEach((item, index) => {
    newArray.push(callback(item, index, this));
  });

  return newArray;
};

var nuevoArreglo = s.myMap(function (item) {
  return item * 2;
});

//9. Use the filter Method to Extract Data from an Array

const filteredList = watchList
  .filter((pelicula) => {
    return pelicula["imdbRating"] >= 8.0;
  })
  .map((pelicula) => {
    return {
      title: pelicula["Title"],
      rating: pelicula["imdbRating"],
    };
  });

//10.Implement the filter Method on a Prototype

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  // Only change code below this line
  this.forEach((item) => {
    if (callback(item)) {
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};

//11.Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//12.Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//13.Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

var first = [1, 2, 3];
var second = [4, 5];

nonMutatingConcat(first, second);

//14.Add Elements to the End of an Array Using concat Instead of push

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5];

nonMutatingPush(first, second);

//15.Use the reduce Method to Analyze Data

// The global variable
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

function getRating(watchList) {
  const averageRating =
    watchList

      .filter((film) => film.Director === "Christopher Nolan")

      .map((film) => Number(film.imdbRating))

      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter((film) => film.Director === "Christopher Nolan").length;

  return averageRating;
}

console.log(getRating(watchList2));

//16.Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = (arr) => {
  return arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => num * num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//17.Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  return arr.sort();
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//18.Return a Sorted Array Without Changing the Original Array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => a - b);
}
console.log(nonMutatingSort(globalArray));

//19.Split a String into an Array Using the split Method

function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));

//20.Combine an Array into a String Using the join Method

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));

//21.Apply Functional Programming to Convert Strings to URL Slugs

const urlSlug = (title) => {
  return title.trim().toLowerCase().split(/\s+/).join("-");
};

console.log(urlSlug(" Winter Is  Coming"));

//22.Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
  return arr.every((currentValue) => currentValue > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));

//23.Use the some Method to Check that Any Elements in an Array Meet a Criteria

function checkPositive(arr) {
  return arr.some((currentValue) => currentValue > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));

//24.Introduction to Currying and Partial Application

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(add(10)(20)(30));
