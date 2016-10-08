//overwrite the default Promise library with bluebird
const Promise = require('bluebird')

//promisify request so we can get rid of the callbacks and use promises
const request = Promise.promisify(require('request'));
Promise.promisifyAll(request);

//return the promisified call to request
module.exports.randomJokes = (num) => {
  return request('http://api.icndb.com/jokes/random/' + num)

}