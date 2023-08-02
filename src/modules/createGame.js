const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        name: 'champions',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default createGame;
