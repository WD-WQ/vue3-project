/* eslint-disable @typescript-eslint/no-explicit-any */
//统一管理用户相关接口

import request from "../../utils/request"
import type {loginForm,loginResponseData,userRespnseData} from './type'
//统一管理接口
enum API{
  LOGIN_URL="/user/login",
  USERINFO_URL="/user/info"
}
//暴露请求函数
//登录请求方法
export const reqLogin = (data:loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL,data)
//获取用户信息方法
export const reqUserInfo = () => request.get<any,userRespnseData>(API.USERINFO_URL)
