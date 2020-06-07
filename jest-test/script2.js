const fetch = require('node-fetch');

// Promises
const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      return {
        count: data.count,
        results: data.results
      }
    })
}

// Async approach
const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json()
  // console.log(data)
  return {
    count: data.count,
    results: data.results
  }
}

module.exports = {
  getPeople,
  getPeoplePromise
}

getPeoplePromise(fetch)