import axios from 'axios';

const fetchTodos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return await axios
    .get(url)
    .then((response) => {
      const result = response.data;
      if (result && result.length !== 0) {
        return result.slice(0, 10);
      }
      return [];
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default fetchTodos;
