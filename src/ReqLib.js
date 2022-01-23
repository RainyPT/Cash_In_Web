import Cookies from "js-cookie";
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
    Authorization: "Bearer " + Cookies.get("userToken"),
  };
};
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 422) {
      return Promise.reject({
        ack: 0,
        message: "Repeated or invalid credentials!",
      });
    }
    if (error.response.status === 401) {
      if (Cookies.get("userToken")) {
        Cookies.remove("userToken");
        localStorage.removeItem();
      }
      window.location.replace("/login");
      return Promise.reject({
        ack: 0,
        message: "Not Authorized!",
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
export const listExpenses = async () => {
  try {
    const res = await axios.get("api/expenses", {
      headers: ProtectedHeaders(),
    });
    console.log(res);
  } catch (err) {
    return err;
  }
};
export const forgotPassword = async (reqOBJ) => {
  try {
    const res = await axios.post("api/forgotPassword", reqOBJ, {
      headers: headers,
    });
    return res;
  } catch (err) {
    return err;
  }
};
export const saveExpense = async (reqOBJ) => {
  try {
    const res = await axios.post("api/expenses", reqOBJ, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};
export const searchExpense = async (name) => {
  try {
    const res = await axios.get("api/expenses/search/" + name, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const editExpense = async (id, reqOBJ) => {
  try {
    const res = await axios.put("api/expenses/" + id, reqOBJ, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getExpensesByDate = async (datebegin, dateend) => {
  try {
    const res = await axios.get(
      "api/show-expenses/date?date_begin=" + datebegin + "&date_end=" + dateend,
      {
        headers: ProtectedHeaders(),
      }
    );
    return res;
  } catch (err) {
    return err;
  }
};
export const getExpensesFromCategoryByDate = async (datebegin, dateend, id) => {
  try {
    const res = await axios.get(
      "api/show-expenses/category?date_begin=" +
        datebegin +
        "&date_end=" +
        dateend +
        "&category_name=" +
        id,
      {
        headers: ProtectedHeaders(),
      }
    );
    return res;
  } catch (err) {
    return err;
  }
};
export const editCategory = async (id, reqOBJ) => {
  try {
    const res = await axios.put("api/categories/" + id, reqOBJ, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteCategory = async (id) => {
  try {
    const res = await axios.delete("api/categories/" + id, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteExpense = async (id) => {
  try {
    const res = await axios.delete("api/expenses/" + id, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const createCategory = async (reqOBJ) => {
  try {
    const res = await axios.post("api/categories", reqOBJ, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getUserExpenses = async () => {
  try {
    const res = await axios.get("api/expenses", {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};
export const getUserCategories = async () => {
  try {
    const res = await axios.get("api/categories", {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};
export const getAuthedUser = async () => {
  try {
    const res = await axios.get("api/user", {
      headers: ProtectedHeaders(),
    });
    console.log(res);
  } catch (err) {
    return err;
  }
};
export const changeUserPassword = async (reqobj) => {
  try {
    const res = await axios.post("api/change-password", reqobj, {
      headers: ProtectedHeaders(),
    });
    return res;
  } catch (err) {
    return err;
  }
};
