import axios from "axios";
import { baseAPI, token } from "../API/API";

export const editUser = (id, data) => {
  // console.log(data);

  return axios
    .put(
      `
        ${baseAPI}/user/editUser/${id}?${token}
        `,
      data
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const getUser = (id) => {
  console.log(data);

  return axios
    .get(
      `
        ${baseAPI}/user/getUser/${id}?${token}
        `
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
