# Dog Breed Photography

This program helps you determine which (randomly selected) dog breed you need to photograph each day until you have photographed all dog breeds, without duplicated efforts. The [Dog API](https://dog.ceo/dog-api/documentation/) is used to fetch dog breeds, which are grouped with the naming convention <breed> <grouping> (ie. australian cattledog). The program also locally caches the fetched data from the API, along with profiles of different people and their existing photographed dog breed list. To interface with the program, run the program from main and enter input answers for the prompts that appear via the command line and let the program do the rest!

Some things to note about my implementation:

- For user input I opted to seperate them into username, date (year, month, and day), and the chosen alphabetic letter.
  In particular, the date is validated in two ways, the first being each of (year, month, and day) are checked for valid input values so that we don't run the risk of doing something like putting 0 for the day of a month. This ensures that we can actually form a valid date object in JavaScript. Secondly, after a date is selected/created by the user, it then gets checked against the current date time to ensure that the user selected/created date is in the present or future and not some time in the past.

- There were a few assumptions that I made about the possible user inputs. For the year, I assumed that only numbers would be entered and that a valid year would include exactly 4 digits. For the day, I also assumed that the input would only be numbers. Finally, for the user chosen starting letter, I assumed that no non-alphabetic characters would be inputted. These assumptions were mainly made to lessen the amount of input validation code needed, since that seemed like a low priority in the grand scheme of goals for this program.

- In terms of generating the itinerary/photograph schedule for each user, I decided that I would simply use some built in sorting methods instead of implementing something more complicated since the overall time complexity to help us both search and iterate through dog breeds in ascending alphabetical order for each letter or until dog breeds have been exhausted seems to be roughly in the O(s*n*logn) time. So to break it down, I used sort() on the original dog breeds list that was fetched (or from local cache) after flattening all necessary breed/groups. Then, I essentially iterated through each selected letter and walked along the sorted list while printing out breeds continuously if they started with the currently selected letter.

## Final snippet of the program in action!
![snippet](https://github.com/christopher-tse/dog-breed-photography/assets/50059518/eb53e407-edda-4b0b-8507-251046a3098a)


