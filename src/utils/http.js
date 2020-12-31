import axios from "axios";
import { Toast } from "vant";

//创建实例
const instance = axios.create({
  baseURL: "http://42.192.155.18:3180/",
  timeout: 100000000
});
//定义http模块
const http = {
  get(url, obj) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params: obj })
        .then(res => {
          if (res.data.status == 0) {
            resolve(res.data);
          } else {
            Toast(res.data.msg);
          }
        })
    });
  },
  post(url, obj) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, obj)
        .then(res => {
          if (res.data.status === "0") {
            // console.log(res)
            resolve(res.data);
          } else {
            Toast(res.data.msg);
          }
        })
    });
  }
};

export default http;
