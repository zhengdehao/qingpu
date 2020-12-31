import http from "./http";
//请求首页轮播图
export const getBannerApi = params => http.get("home/banner", params);
//请求首页列表渲染
export const getHomeListApi = params => http.get("home/recommend", params);
//请求人文假日详情页数据
export const postHolidayApi = params => http.post("home/detail", params);
//请求人文知旅详情页数据
export const postTourApi = params => http.post("home/detail", params);
//获得在地艺文体验详情页数据
export const postExpDetailApi = params => http.post("home/detail", params);
//获得溯心详情页数据
export const postSuxinDetailApi = params => http.post("home/detail", params);
//请求臻品页面
export const getGoodsListApi = params => http.post("/goods", params);
// 请求验证码
export const getCodeApi = params => http.post("users/getCode", params);
// 登录
export const loginIntoApi = params => http.post("users/register", params);
//请求发现页面数据
export const getFindListApi = params => http.get("finds",params);
//请求个人信息
export const getUserInfoApi = params => http.post("users/getInfo", params);
//获得首页详情
export const getHomeDetail = params => http.post("home/detail", params);

// 获得收获地址
export const getAddressListApi = params => http.post("address/get", params);

// 修改个人信息
export const updateUserInfoApi = params => http.post("users/update", params);

//新增收获地址
export const setAddressApi = params => http.post("address/set", params);

//修改收货地址
export const updateAddressApi = params => http.post("address/update", params);

//获取热卖臻品
export const getHotGoodsApi = params => http.get("goods/hot", params);