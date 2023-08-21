# Parker's Dog Breed Photography Challenge - BCPS Coding Assignment 2023

This is my submission for the BC Public Service - IT Services, Health Sector IM/IT, Ministry of Health Coding Assignment.

Although I'm not very experienced with JavaScript, I had a lot of fun learning a few new things while working on this coding assignment.
I followed the requirements for this assignment and implemented them to the best of my ability.
Some things to note about my implementation:

- For user input I opted to seperate them into username, date (year, month, and day), and the chosen alphabetic letter.
  In particular, the date is validated in two ways, the first being each of (year, month, and day) are checked for valid input values so that we don't run the risk of doing something like putting 0 for the day of a month. This ensures that we can actually form a valid date object in JavaScript. Secondly, after a date is selected/created by the user, it then gets checked against the current date time to ensure that the user selected/created date is in the present or future and not some time in the past.

- There were a few assumptions that I made about the possible user inputs. For the year, I assumed that only numbers would be entered and that a valid year would include exactly 4 digits. For the day, I also assumed that the input would only be numbers. Finally, for the user chosen starting letter, I assumed that no non-alphabetic characters would be inputted. These assumptions were mainly made to lessen the amount of input validation code needed, since that seemed like a low priority in the grand scheme of goals for Parker's project.

- In terms of generating the itinerary for each user, I decided that I would simply use some built in sorting methods instead of implementing something more complicated since the overall time complexity to help us both search and iterate through dog breeds in ascending alphabetical order for each letter or until dog breeds have been exhausted seems to be roughly in the O(s*n*logn) time. So to break it down, I used sort() on the original dog breeds list that was fetched (or from local cache) after flattening all necessary breed/groups. Then, I essentially iterated through each selected letter and walked along the sorted list while printing out breeds continuously if they started with the currently selected letter.

That covers most of the work that I did here. I did not have time to create some tests but I did do some sanity checks here and there before committing to anything. Everything looked good from my last commit so hopefully nothing breaks but please feel free to ping me if there are things that are broken or that I could improve on regardless of the deadline passing, I would love that!

Thanks for checking out my work, cheers!

## Some final pics of the assignment
