import { sortedAlphabet } from "./sortedAlphabet.js";

export function getItinerary(dogBreeds, user, userDate, userLetter) {
  dogBreeds.sort();
  const userCollectedBreedPhotos = new Set(user["breedPhotos"]);

  // start with user selected letter
  iterateDogBreeds(dogBreeds, userCollectedBreedPhotos, userLetter, userDate);

  // do rest in randomized fashion
  const alphabet = [...sortedAlphabet];
  while (alphabet.length !== 0) {
    const selectedLetter = randomLetter(alphabet);

    if (selectedLetter !== userLetter) {
      iterateDogBreeds(
        dogBreeds,
        userCollectedBreedPhotos,
        selectedLetter,
        userDate,
      );
    }
  }
}

function iterateDogBreeds(
  dogBreeds,
  userCollectedBreedPhotos,
  letter,
  userDate,
) {
  for (let i = 0; i < dogBreeds.length; i++) {
    if (dogBreeds[i].startsWith(letter)) {
      if (!userCollectedBreedPhotos.has(dogBreeds[i])) {
        console.log(
          `${dogBreeds[i]} - ${userDate.toLocaleString("default", {
            month: "long",
          })} ${userDate.getDate()}, ${userDate.getFullYear()}\n`,
        );
        userDate.setDate(userDate.getDate() + 1);
      }
    }
  }
}

function randomLetter(arr) {
  return arr.splice((Math.random() * arr.length) | 0, 1)[0];
}
