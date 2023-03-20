import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (phonebookObject) => {
  return axios.post(baseUrl, phonebookObject);
};

// eslint-disable-next-line
export default {
  getAll: getAll,
  create: create,
};

// const exportDefault = {
//     getAll,
//     create,
// }

// export default exportDefault;
