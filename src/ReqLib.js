const axios = require("axios");
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const ProtectedHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response);
    if (error.response.status === 422) {
      return Promise.reject({
        ack: 0,
        message: "Repeated or invalid credentials!",
      });
    }
    return Promise.reject({ ack: 0, message: error.response.statusText });
  }
);
export const login = async (reqOBJ) => {
  try {
    await axios.get("sanctum/csrf-cookie");
    const res = await axios.post("api/login", reqOBJ, { headers: headers });
    return res;
  } catch (err) {
    return err;
  }
};
export const register = async (reqOBJ) => {
  try {
    const res = await axios.post("api/register", reqOBJ, headers);
    return res;
  } catch (err) {
    return err;
  }
};
