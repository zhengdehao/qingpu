import http from "./http";
//请求首页轮播图
export const getBannerApi = params => http.get("home/banner", params);
//请求首页列表渲染
export const getHomeListApi = params => http.get("home/recommend", params);
//请求人文假日详情页数据
export const postHolidayApi = params => http.post("home/detail", params);
//请求人文知旅详情页数据
export const postTourApi = params => http.post("home/detail", params);