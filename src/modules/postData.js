const postData = async (formElement) => {
  formElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userValue = document.getElementById('user').value;
    const scoreValue = document.getElementById('score').value;

    const postData = {
      user: userValue,
      score: Number(scoreValue),
    };

    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/otB5YQjI0ZtLl6vqujtY/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log('Response from the server:', data);
      formElement.reset();
    } catch (error) {
      console.error('Error while making the request:', error);
    }
  });
};

export default postData;