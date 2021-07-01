const { fetchBreedDescription } = require('./breedFetcher.js');
const breedToFetchEntry = process.argv.slice(2, 3)[0];
const breedToFetchLower = breedToFetchEntry.toLowerCase();

console.log(`Meow! I'm working on it. Results are coming up RIGHT MEOW.`);

fetchBreedDescription(breedToFetchLower, (error, descriptionArray) => {
  const answerArray = descriptionArray;
  // answerArray = [parsedBodyObject, searchFailure, breedName, description];
  if (error) {
    console.log("An error has occured. HISSSSS!");
    console.log(error);
  } else {
    if (answerArray[1] === true) {
      console.log("Sorry, I couldn't find an entry for your search. Meow Meow.");
      return;
    } else {
      console.log(`Here's the description of ${answerArray[2]}: ${answerArray[3]}`);
    }
  }
});
