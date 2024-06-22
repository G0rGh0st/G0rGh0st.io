const options = {method: 'GET', headers: {accept: 'application/json', 'x-api-key':"563825e2a73549959ea1857726e8f726"}};

fetch('https://api.opensea.io/api/v2/collections/collection_slug', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

