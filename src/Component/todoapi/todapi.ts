import axios from "axios";
const todoapi = axios.create({
  baseURL: "http://localhost:4000/todo/",
});
export default todoapi;