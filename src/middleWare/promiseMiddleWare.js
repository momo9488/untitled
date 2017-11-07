//这个针对的是异步action对象
function isPromise(obj){
    return obj && typeof obj.then === 'function';

}

export default function promiseMiddleware( {dispatch} ) {
      return function (next){
          return function(action){
              console.log(action)
              const { types,promise,...rest } = action;
             if( !isPromise(promise) || !(action.types && action.types.length === 3)){
                  return next(action)
              }
            ///代表action的必须是三种的类型
               const [pending, done, fail] = types;
                console.log(types)
               dispatch({...rest,type:pending});

               action.promise.then( response => {
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