import axios from "axios";
//创建实例
const instance = axios.create({
  baseURL: "http://42.192.155.18:3180/",
  timeout: 10000
});
//定义http模块
const http = {
  get(url, obj) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params: obj })
        .then(res => {
          if (res.data.status == "0") {
            resolve(res.data);
          } else {
            console.log(res.msg);
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
            resolve(res.data);
          } else {
            console.log(res.msg);
          }
        })
    });
  }
};

export default http;
