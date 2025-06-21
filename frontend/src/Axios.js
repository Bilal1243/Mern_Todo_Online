import axios from 'axios'

const Backend = axios.create({
  baseURL: 'http://localhost:3000/api/todo'
});

export default Backend