import http from "./http";
//请求首页轮播图
export const getBannerApi = params => http.get("home/banner", params);
