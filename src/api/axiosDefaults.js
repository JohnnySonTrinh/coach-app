import axios from "axios";

axios.defaults.baseURL =
  "https://coach-platform-api-b2a0c10b1c34.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
