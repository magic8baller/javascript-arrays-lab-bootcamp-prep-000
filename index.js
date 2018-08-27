let kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}


destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
