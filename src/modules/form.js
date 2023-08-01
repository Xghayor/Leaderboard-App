const createForm = () => {
  const formData = document.getElementById('form-container');
  const formLabel = document.createElement('h2');
  formLabel.innerHTML = 'Add your score';

  const listForm = document.createElement('form');
  listForm.action = '/submit';
  listForm.method = 'POST';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name1';
  nameInput.placeholder = 'Your name';
  nameInput.className = 'form-input';

  const scoreInput = document.createElement('input');
  scoreInput.type = 'text';
  scoreInput.name = 'scores';
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
};

export default createForm;