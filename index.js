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
var moreKittens = ["Broom"]
function appendKitten(name){
  kittens.concat(moreKittens)
  return kittens;
}