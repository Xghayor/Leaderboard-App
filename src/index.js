import './style.css';
import showList from './modules/leaderBoard';
import createForm from './modules/form';

const data = [{
  name: 'Ali',
  score: 200,
}];

document.addEventListener('DOMContentLoaded', () => {
  showList(data);
  createForm();
});