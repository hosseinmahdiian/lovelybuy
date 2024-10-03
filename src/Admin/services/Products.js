import axios from "axios";
import { baseAPI, token } from "../auth/API";

// console.log(`${baseAPI}/admin/getProduct?${token}`);
export const GetProducts = async () => {
  const rsult = await axios.get(`${baseAPI}/admin/getProduct?${token}`);
  return rsult;
};

export const PostProduct = (data) => {
  return axios
    .post(
      `${baseAPI}/admin/addProduct?${token}
      `,
      data
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const PutProduct = (id, data) => {
  return axios
    .put(
      `
      ${baseAPI}/admin/editProduct/${id}?${token}
      `,
      data
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const DeleteProduct = (id) => {
  return axios
    .delete(
      `
      ${baseAPI}/admin/deleteProduct/${id}?${token}
      `
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export const PostImage = (data, setData) => {
  return axios
    .post(
      `${baseAPI}/admin/upload 
      `,
      data
    )
    .then((res) => {
      setData((item) => ({
        ...item,
        image: res.data.path,
      }));
      console.log(res);
    })
    .catch((e) => console.log(e));
};

export const PostGallery = (data, setData) => {
  return axios
    .post(
      `${baseAPI}/admin/multiUpload
      `,
      data
    )
    .then((res) => {
      console.log(res);
      let temp;
      const unUniq = res.data.data;

      // console.log(unUniq);
      // unUniq.map((i) => ({ url: i }));
      setData((item) => ({
        ...item,
        gallery: unUniq.map((i) => ({ url: i })),
      }));
      console.log(res.data.data);
    })
    .catch((e) => console.log(e));
};
