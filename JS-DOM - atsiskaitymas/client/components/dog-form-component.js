class DogFormComponent {
  htmlElement;
  onSubmit;
  titleInput;
  yearInput;
  damagedInput;
  formNameElement;
  submitButton;

  constructor({ onSubmit }) {
    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'shadow p-3';
    this.htmlElement.innerHTML = `
      <h2 class="h5 text-center">Create Dog</h2>
      <div class="mb-3">
        <label for="breed" class="form-label">Breed</label>
        <input type="text" class="form-control" id="breed" name="breed">
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input type="number" class="form-control" id="age" name="age">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="chipped" name="chipped">
        <label class="form-check-label" for="chipped">Is chipped</label>
      </div>
      <button type="submit" class="btn btn-success w-100">Create dog</button>`;
    this.onSubmit = onSubmit;
    this.titleInput = this.htmlElement.querySelector('[name=breed]');
    this.yearInput = this.htmlElement.querySelector('[name=age]');
    this.damagedInput = this.htmlElement.querySelector('[name=chipped]');
    this.formNameElement = this.htmlElement.querySelector('h2');
    this.submitButton = this.htmlElement.querySelector('button');

    this.htmlElement.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = {
      breed: formData.get('breed'),
      age: formData.get('age'),
      chipped: Boolean(formData.get('chipped')),
    }

    //   inversion of control
    this.onSubmit(values);

    event.target.reset();
  }

  enableEditing = ({ breed, age, chipped }) => {
    this.titleInput.value = breed;
    this.yearInput.value = age;
    this.damagedInput.checked = chipped;
    this.formNameElement.innerText = 'Update Dog';
    this.submitButton.innerText = 'Update Dog';
    this.submitButton.className = 'btn btn-warning w-100';
  }

  disableEditing = () => {
    this.htmlElement.reset();
    this.formNameElement.innerText = 'Create Dog';
    this.submitButton.innerText = 'Update Dog';
    this.submitButton.className = 'btn btn-success w-100';
  }
}

export default DogFormComponent;
