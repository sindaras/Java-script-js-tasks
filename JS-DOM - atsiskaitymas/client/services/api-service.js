const serverAddress = 'http://localhost:3000';

const getDogs= async () => {
  const response = await fetch(`${serverAddress}/dogs`);
  const dogs = await response.json();

  return dogs;
}

const deleteDog = async (id) => {
  const response = await fetch(`${serverAddress}/dogs/${id}`, {
    method: 'DELETE'
  });
  const dogs = await response.json();

  return dogs;
}

const createDog = async (dogProps) => {
  const response = await fetch(`${serverAddress}/dogs`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(dogProps)
  });
  const dogs = await response.json();

  return dogs;
}

const updateDog = async (id, dogProps) => {
  const response = await fetch(`${serverAddress}/dogs/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(dogProps)
  });
  const dogs = await response.json();

  return dogs;
}

const ApiService = {
  getDogs,
  deleteDog,
  createDog,
  updateDog,
};

export default ApiService;
