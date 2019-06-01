'use strict';

var _unsplashJs = require('unsplash-js');

var _unsplashJs2 = _interopRequireDefault(_unsplashJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill(); /**
                                    * @author Mayank Dwivedi 
                                    * @description API for the Image sending to the APP
                                    */

// ES Modules syntax

require('isomorphic-fetch');

// require syntax
// const Unsplash = require('unsplash-js').default;

var unsplash = new _unsplashJs2.default({
  applicationId: "20c0397c0a7a7f06c6f2f57ca40605ae91a83c71346b3e5251d94b7af0355e94",
  secret: "4b9ac8b3cc7a16e42f4c6cd7122ebab90b1bcb00cc4c0f2b43c02eed2b642494"
});

unsplash.photos.listPhotos(2, 15, "latest").then(_unsplashJs.toJson).then(function (json) {
  console.log(json);
});