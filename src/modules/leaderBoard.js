const showList = (data) => {
  const scoreContainer = document.getElementById('score-container');
  const heading = document.createElement('h2');
  const headingBtn = document.createElement('button');

  heading.innerHTML = 'Recent Scores';
  headingBtn.textContent = 'Refresh';

  scoreContainer.appendChild(heading);
  heading.appendChild(headingBtn);

  data.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = 'li-items';
    listItem.textContent = `${item.name} : ${item.score}`;
    scoreContainer.appendChild(listItem);
  });
};

export default showList;