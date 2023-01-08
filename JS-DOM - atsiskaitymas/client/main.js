import AlertComponent from "./components/alert-component.js";
import DogFormComponent from "./components/dog-form-component.js";
import DogsTableComponent from "./components/dogs-table-component.js";
import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./components/flex-container-component.js";
import ApiService from "./services/api-service.js";

let dogsTableComponent;
let dogFormComponent;
let alertComponent;

let dogs;
let editedRowId = null;

const handleDogDelete = async (id) => {
  try {
    await ApiService.deleteDog(id);
    dogs = await ApiService.getDogs();
    dogsTableComponent.renderDogs(dogs, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleDogCreate = async (dogProps) => {
  try {
    await ApiService.createDog(dogProps);
    dogs = await ApiService.getDogs();
    dogsTableComponent.renderDogs(dogs, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleDogUpdate = async (dogProps) => {
  try {
    await ApiService.updateDog(editedRowId, dogProps);
    dogs = await ApiService.getDogs();
    editedRowId = null;
    dogFormComponent.disableEditing();
    dogsTableComponent.renderDogs(dogs, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleDogEdit = (dogProps) => {
  if (editedRowId === dogProps.id) editedRowId = null;
  else editedRowId = dogProps.id;

  dogsTableComponent.renderDogs(dogs, editedRowId);
  if (editedRowId === null) {
    dogFormComponent.disableEditing();
    dogFormComponent.onSubmit = handleDogCreate;
  } else {
    dogFormComponent.enableEditing(dogProps);
    dogFormComponent.onSubmit = handleDogUpdate;
  }
}

(async function initialize() {
  const rootHtmlElement = document.querySelector('#root');
  const containerComponent = new ContainerComponent();
  alertComponent = new AlertComponent();
  containerComponent.addComponents(alertComponent);
  rootHtmlElement.append(containerComponent.htmlElement);
  try {
    dogs = await ApiService.getDogs();
    dogsTableComponent = new DogsTableComponent({
      dogs,
      onDelete: handleDogDelete,
      onEdit: handleDogEdit,
    });
    dogFormComponent = new DogFormComponent({
      onSubmit: handleDogCreate,
    });
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(dogsTableComponent, dogFormComponent);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
