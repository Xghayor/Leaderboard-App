import postData from './postData';

const createForm = () => {
  const formData = document.getElementById('form-container');
  const formLabel = document.createElement('h2');
  formLabel.innerHTML = 'Add your score';

  const listForm = document.createElement('form');
  listForm.id = 'game-form';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'user';
  nameInput.id = 'user';
  nameInput.placeholder = 'Your name';
  nameInput.className = 'form-input';

  const scoreInput = document.createElement('input');
  scoreInput.type = 'text';
  scoreInput.name = 'score';
  scoreInput.id = 'score';
  scoreInput.placeholder = 'Your score';
  scoreInput.className = 'form-input';

  const formBtn = document.createElement('button');
  formBtn.type = 'submit';
  formBtn.textContent = 'Submit';

  listForm.appendChild(nameInput);
  listForm.appendChild(scoreInput);
  listForm.appendChild(formBtn);

  formData.appendChild(formLabel);
  formData.appendChild(listForm);

  postData(listForm);
};

export default createForm;
