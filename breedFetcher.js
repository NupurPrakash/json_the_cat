
const request = require('request');
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    callback(data[0].description);
    if (error) {
      callback(error);
    }
  
    
   
  });
};
module.exports = fetchBreedDescription;
