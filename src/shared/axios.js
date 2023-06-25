import axios from "axios";
import constants from "../constants/constants";

const instance = axios.create({
  baseURL: constants.BASE_URL,
});

export default instance;
