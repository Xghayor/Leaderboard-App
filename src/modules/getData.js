const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/otB5YQjI0ZtLl6vqujtY/scores';

const getData = async () => fetch(apiUrl)
  .then((response) => response.json());

export default getData;
