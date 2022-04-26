// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchMyIP } = require('./iss_promised');
// const {fetchISSflyOverTimes} = require('./iss_promised')
const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSflyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });