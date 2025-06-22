 
/* eslint-disable prefer-const */
//创建用户相关小仓库
import {defineStore} from 'pinia'
import type { loginForm,loginResponseData } from '../../api/user/type'
import { reqLogin } from '../../api/user'
import type { UserState } from './types/type'
import { GET_TOKEN, SET_TOKEN } from '../../utils/token'

const useUserstore = defineStore('User',{
  //存储数据
  state:():UserState=>{
    return {
      token:GET_TOKEN('TOKEN')
    }
  },
  //存储异步逻辑的地方
  actions:{
    //用户登录的方法
    async userLogin(user:loginForm){
      let result:loginResponseData = await reqLogin(user)
      console.log(result)
      if(result.code === 200)
      {
        SET_TOKEN(result.data.token as string)
        // localStorage.setItem('TOKEN',result.data.token as string)
        //返回成功promise
        return 'ok'
      }
      else{
        //返回失败promise
        return Promise.reject(new Error(result.data.message))
      }
    }
  },
  getters:{
    
  }
})

export default useUserstore