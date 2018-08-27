let kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}


destructivelyPrependKitten(name) {
  kittens.shift(name);
  return kittens;
}
