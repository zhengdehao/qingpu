import http from "./http";
//请求首页轮播图
export const getBannerApi = params => http.get("home/banner", params);
//请求首页列表渲染
export const getHomeListApi = params => http.get("home/recommend", params);
