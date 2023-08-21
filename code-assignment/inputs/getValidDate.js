import { getDaysInMonth } from "../getDaysInMonth.js";
import { months } from "../months.js";
import { input, select } from "@inquirer/prompts";

export async function getValidDate() {
  var userDate;
  const dateToday = new Date();
  dateToday.setHours(0, 0, 0, 0);

  while (true) {
    const year = await getYear();
    const month = await getMonth();
    const day = await getDay(month);

    userDate = new Date(year, month, day);

    if (userDate < dateToday) {
      console.log(
        "Invalid date chosen.\nDate must be in the present or future.\nPlease try again.",
      );
      continue;
    }

    break;
  }

  return userDate;
}

// assume user input will be numerical and not contain alphabetical/special characters
// assume a valid year input is 4 digits
async function getYear() {
  var year;

  while (true) {
    year = await input({
      name: "year",
      message: "What year will you start the challenge?",
    });

    year = Number(year);
    if (!IsNumeric(year) || !/^\d{4}$/.test(year)) {
      console.log(
        "Invalid year input.\nA valid year is 4 digits long and must be in the present or future only.\nPlease try again.",
      );
      continue;
    }

    break;
  }

  return year;
}

function getMonth() {
  let monthNames = [];
  months.forEach((month) => {
    monthNames.push({
      name: month.name,
      value: month.index,
    });
  });

  return select({
    name: "month",
    message: "What month will you start the challenge?",
    choices: monthNames,
  });
}

// assume user input will be numerical and not contain alphabetical/special characters
async function getDay(month) {
  var day;
  while (true) {
    day = await input({
      name: "day",
      message: "What day of the month will start the challenge?",
    });

    day = Number(day);
    if (!IsNumeric(day) || day < 1 || day > getDaysInMonth(month)) {
      console.log(
        `Invalid day input.\nA valid day for the selected month is between 1 and ${getDaysInMonth(
          month,
        )}.\nPlease try again.`,
      );
      continue;
    }

    break;
  }

  return day;
}

// checks if the input is a valid positive integer
function IsNumeric(input) {
  return Number.isInteger(input) && input >= 0;
}
