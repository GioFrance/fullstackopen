import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (phonebookObject) => {
  const request = axios.post(baseUrl, phonebookObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

// eslint-disable-next-line
export default {
  getAll: getAll,
  create: create,
  remove: remove,
};

// const exportDefault = {
//     getAll,
//     create,
// }

// export default exportDefault;
