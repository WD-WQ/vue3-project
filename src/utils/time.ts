//判断登录时间是什么时间段
export const getTime = ()=>{
  let message = ''
  //通过内置的构造函数
  const hours = new Date().getHours()
  if(hours <= 9)
{
  message = '早上'
}else if(hours <= 13)
{
  message = '中午'
}else if(hours <= 18){
  message = '下午'
}else{
  message = '晚上'
}
return message
}