import http from "./http";
//请求首页轮播图
export const getBannerApi = params => http.get("home/banner", params);
//请求首页列表渲染
export const getHomeListApi = params => http.get("home/recommend", params);
//请求臻品页面
export const getGoodsListApi = params => http.post("/goods", params);

// 请求验证码
export const getCodeApi = params => http.post("users/getCode", params);

// 登录

export const loginIntoApi = params => http.post("users/register", params);