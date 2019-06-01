/**
 * @author Mayank Dwivedi 
 * @description API for the Image sending to the APP
 */



// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';
require('es6-promise').polyfill(); 
require('isomorphic-fetch');   // this is fixing fetch Error which was coming 

// require syntax
// const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "20c0397c0a7a7f06c6f2f57ca40605ae91a83c71346b3e5251d94b7af0355e94",
  secret: "4b9ac8b3cc7a16e42f4c6cd7122ebab90b1bcb00cc4c0f2b43c02eed2b642494"
});



// function to get the images thumbnill START
unsplash.photos.listPhotos(2, 15, "latest")
  .then(toJson)
  .then(json => {
    console.log(json);
    
  });

  // function to get the images thumbnill STOP
