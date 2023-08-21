import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cacheFileName = "dog-cache.json";
const cacheFilePath = path.join(__dirname, cacheFileName);

export async function fetchDogs() {
  const cachedData = readCache();

  if (cachedData) {
    return cachedData;
  } else {
    try {
      const resp = await fetch("https://dog.ceo/api/breeds/list/all");
      const dogList = await resp.json();

      let dogBreeds = [];

      // create single flat list following naming structure <breed><grouping>
      const groupings = Object.keys(dogList.message);
      groupings.forEach((group) => {
        const groupBreeds = dogList.message[group];
        if (groupBreeds.length > 0) {
          groupBreeds.forEach((breed) => {
            dogBreeds.push(`${breed} ${group}`);
          });
        } else {
          dogBreeds.push(`${group}`);
        }
      });

      writeCache(dogBreeds);

      return dogBreeds;
    } catch (err) {
      console.log(
        `There was a problem fetching dog breed data from the DogAPI, please try again later`,
      );
      return;
    }
  }
}

function readCache() {
  try {
    const data = fs.readFileSync(cacheFilePath);
    return JSON.parse(data);
  } catch (err) {
    return;
  }
}

function writeCache(data) {
  try {
    fs.writeFileSync(cacheFilePath, JSON.stringify(data));
  } catch (err) {
    console.log(`There was a problem writing dog breed data to local cache`);
  }
  return;
}
