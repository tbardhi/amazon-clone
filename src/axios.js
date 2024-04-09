import axios from "axios";

const instance = axios.create({
  // baseURL: "https://us-central1-clone-react-dfee2.cloudfunctions.net/api",
  baseURL: "http://localhost:5001/clone-react-dfee2/us-central1/api", // API cloud function URL
});

export default instance;
