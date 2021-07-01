const request = require('request');
const breedToFetchEntry = process.argv.slice(2, 3)[0];
const breedToFetchLower = breedToFetchEntry.toLowerCase();

// API:  e.g ?q=sib to search for Siberian - https://api.thecatapi.com/v1/breeds/search?q=sib
// https://api.thecatapi.com/v1/breeds/search?q=sib

const queryURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const urlToFetch = queryURL + breedToFetchLower;
const testBadQuery = 'https://api.thecatpi.com/v1/breeds/search?q='
// console.log(urlToFetch);

console.log(`Meow! I'm working on it. Results are coming up RIGHT MEOW.`);
request(queryURL, (error, response, body) => {
  if (error) {
    console.log("An error has occured. HISSSSS!")
    console.log(response);
    console.log(error);
    return error;
  } else {
    // console.log('parsedBodyObject:', parsedBodyObject); // Print the JSON returned from the API request.    
    const parsedBodyObject = JSON.parse(body);
    if (parsedBodyObject.length === 0) {
      console.log("Sorry, I couldn't find an entry for your search. Meow Meow.");
      return;
    }
    const breedName = parsedBodyObject[0].name;
    const description = parsedBodyObject[0].description;
    console.log(`Here's the description of ${breedName}: ${description}`);
  }
});


/*
parsedBodyObject: [
  {
    weight: { imperial: '8 - 16', metric: '4 - 7' },
    id: 'sibe',
    name: 'Siberian',
    cfa_url: 'http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/siberian',
    vcahospitals_url: 'https://vcahospitals.com/know-your-pet/cat-breeds/siberian',
    temperament: 'Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate',
    origin: 'Russia',
    country_codes: 'RU',
    country_code: 'RU',
    description: 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ',
    life_span: '12 - 15',
    indoor: 0,
    lap: 1,
    alt_names: 'Moscow Semi-longhair, HairSiberian Forest Cat',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 2,
    health_issues: 2,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 4,
    stranger_friendly: 3,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 1,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Siberian_(cat)',
    hypoallergenic: 1,
    reference_image_id: '3bkZAjRh1'
  }
]
*/