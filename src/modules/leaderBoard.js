const showList = (data) => {
  const socreHeading = document.getElementById('score-h2')
  const scoreBoard = document.getElementById('scores')
  const heading = document.createElement('h2');
  const headingBtn = document.createElement('button');

  heading.innerHTML = 'Recent Scores';
  headingBtn.textContent = 'Refresh';
  headingBtn.id = 'refresh-btn';

  socreHeading.appendChild(heading);
  heading.appendChild(headingBtn);

  data.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = 'li-items';
    listItem.textContent = `${item.user} : ${item.score}`;
    scoreBoard.appendChild(listItem);
  });
};

export default showList;