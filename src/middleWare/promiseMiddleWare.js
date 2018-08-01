
function isPromise(obj){
    return obj && typeof obj.then === 'function';

}
//这个是中间件的接口
export default function promiseMiddleware( {dispatch,getState} ) {
      return function (next){
          return function(action){
              //执行传入的action
              //每个中间件代表着一种功能，所以实现的方法就是在这里编写的
              console.log(getState())//获得当前的状态
              const { types,promise,...rest } = action;
             if( !isPromise(promise) || !(action.types && action.types.length === 3)){//就是这个action必须满足返回的数据是有promise对象，还有types字段长度是3
                  return next(action)//否则的话就执行下一个action
              }
            ///代表action的必须是三种的类型
               const [pending, done, fail] = types;
                console.log(types)
               dispatch({...rest,type:pending});

               action.promise.then( response => {
                   console.log(response.status)
                   switch( response.status){
                       case 200 : {
                              response.json().then( 
                                    result => { 
                                        dispatch({...rest,result,type:done})} ,
                                    error =>  dispatch({...rest,error,type:fail}))
                            break;
                       }
                       case 500 :{
                            dispatch({ type: fail,error:{ statusText :"服务端发生错误"}})
                            break;
                       }
                       case 401 :{
                           console.log(response);
                           break;
                       }
                       default:{
                            dispatch({ type: fail,error:{ statusText :"发生未知错误"}})
                       }
                   } 
               })
          }
      }
}