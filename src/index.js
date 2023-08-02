import './style.css';
import showList from './modules/leaderBoard';
import createForm from './modules/form';
import getData from './modules/getData';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await getData();
    const resultArray = data.result;
    showList(resultArray);
    createForm();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', () => {
    window.location.reload();
  });
});
