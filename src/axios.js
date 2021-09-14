import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-cloneapp-backend.herokuapp.com",
});

export default instance;
