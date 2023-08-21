import { fetchDogs } from "./api/fetchDogs.js";
import { getItinerary } from "./getItinerary.js";
import { getValidAlphabetLetter } from "./inputs/getValidAlphabetLetter.js";
import { getValidDate } from "./inputs/getValidDate.js";
import { getValidUser } from "./inputs/getValidUser.js";

async function main() {
  const dogBreeds = await fetchDogs();

  if (!dogBreeds) {
    console.log("Could not generate dog breed list, please try again later");
    return;
  }

  // Get inputs from user...
  const user = await getValidUser();
  const userDate = await getValidDate();
  const userLetter = await getValidAlphabetLetter();

  console.log(
    `\nHere is the list of breeds you need to take photos of (Breed - Date):
     \n---------------------------------------------------------------------\n`,
  );

  getItinerary(dogBreeds, user, userDate, userLetter);

  console.log(
    `---------------------------------------------------------------------\n`,
  );

  main();
}

main();
