"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);
const harry = {
  name: "Harry Potter",
  species: "human",
  gender: "male",
  house: "Gryffindor",
  dateOfBirth: "31-07-1980",
  yearOfBirth: 1980,
  ancestry: "half-blood",
  eyeColour: "green",
  hairColour: "black",
  wand: "holly,phoenix feather,11",
  patronus: "stag",
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: "Daniel Radcliffe",
  alive: true,
  image: "http://hp-api.herokuapp.com/images/harry.jpg",
};

// Hermione Granger
const hermione = {
  name: "Hermione Granger",
  species: "human",
  gender: "female",
  house: "Gryffindor",
  dateOfBirth: "19-09-1979",
  yearOfBirth: 1979,
  ancestry: "muggleborn",
  eyeColour: "brown",
  hairColour: "brown",
  wand: "vine,dragon heartstring",
  patronus: "otter",
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: "Emma Watson",
  alive: true,
  image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
};

// Ron Weasley
const ron = {
  name: "Ron Weasley",
  species: "human",
  gender: "male",
  house: "Gryffindor",
  dateOfBirth: "01-03-1980",
  yearOfBirth: 1980,
  ancestry: "pure-blood",
  eyeColour: "blue",
  hairColour: "red",
  wand: "willow,unicorn tail-hair,14",
  patronus: "Jack Russell terrier",
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: "Rupert Grint",
  alive: true,
  image: "http://hp-api.herokuapp.com/images/ron.jpg",
};

function initApp() {
  showCharacter(harry);
}

function showCharacter(character) {
  console.log(harry);
}
