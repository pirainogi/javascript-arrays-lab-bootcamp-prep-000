var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name){
  return [kittens... "Broom"]
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name){
  kittens.splice(0, 0, "Arnold")
  return kittens; 
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten(){
  kittens.slice(2);
  return kittens;
}