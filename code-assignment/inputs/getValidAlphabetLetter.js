import { input } from "@inquirer/prompts";

// assume user input does not contain non-alphabetical characters such as numbers or special characters
export async function getValidAlphabetLetter() {
  var letter;
  while (true) {
    letter = await input({
      name: "letter",
      message:
        "What letter of dog breeds would you like to start the challenge on?",
    });

    letter = letter.toString();

    if (letter.length !== 1 || !letter.match(/[a-z]/i)) {
      console.log(
        "Invalid letter input.\nA valid letter input contains a single alphabetic letter.\nPlease try again.",
      );
      continue;
    }

    break;
  }

  return letter.toLowerCase();
}
