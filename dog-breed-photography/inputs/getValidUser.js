import { friends } from "../friend-collections.js";
import { select } from "@inquirer/prompts";

export function getValidUser() {
  let friendNames = [];
  friends.forEach((friend) => {
    friendNames.push({
      name: friend.name,
      value: friend,
    });
  });

  return select({
    message: "Who are you?",
    choices: friendNames,
  });
}
