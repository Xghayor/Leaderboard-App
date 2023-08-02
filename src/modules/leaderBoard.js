const showList = (data) => {
  const scoreContainer = document.getElementById('score-container');
  const heading = document.createElement('h2');
  const headingBtn = document.createElement('button');

  heading.innerHTML = 'Recent Scores';
  headingBtn.textContent = 'Refresh';
  headingBtn.id = 'refresh-btn';

  scoreContainer.appendChild(heading);
  heading.appendChild(headingBtn);

  data.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = 'li-items';
    listItem.textContent = `${item.user} : ${item.score}`;
    scoreContainer.appendChild(listItem);
  });
};

export default showList;