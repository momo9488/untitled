import { FETCH_START, FETCH_SUCCESS,FETCH_FAILURE} from './actionType'
//使用thunk异步加载,新的action动作
//要求这个是函数类型的，所以没有返回值的时候就提示说不要把clss当作函数
export const fetchWeatherStart = () => {
    return {
        type:FETCH_START
    }
};
export const fetchWeatherSuccess = (result) => {
    return{
        type:FETCH_SUCCESS,
        result
    }
}
export const fetchWeatherFailure = (error) => {
    return{
        type:FETCH_FAILURE,
        error
    }
}
//这个是thunk中间件的写法
//responseJson是一个返回值的参数，里面包含服务器返回给我们的数组名weatheinfo
export const fetchWeatherThunk = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        dispatch(fetchWeatherStart());//是通过dispatch来派发action
        // dispatch({type:FETCH_START})
// 所以就是在这里是
          fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) =>
                dispatch(fetchWeatherSuccess(responseJson.weatherinfo))
                // dispatch({type: FETCH_SUCCESS,result:responseJson.weatherinfo})
            )
            }).catch((error)=>{
              dispatch(fetchWeatherFailure(error))
              // dispatch({type:FETCH_FAILURE,result:error})
          })
}}
//这是promise中间件的写法，只要在store中把thunk改成promise就可以了
//返回的数据中必须包含一个promise对象和一个types字段，且字段里面必须长度为3，分别对应
export const fetchWeatherPromise=(cityCode)=> {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    return{
        promise: fetch(apiUrl,{
            method: 'GET',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
            }
        }),
        types: [FETCH_START, FETCH_SUCCESS, FETCH_FAILURE]
    }
}

//此是对多次请求，对前面的动作的中止行为
let nextSeqId =0;
export const fetchWeatherThunkStort = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        const seqId =++nextSeqId;
        const dispatchIfValid =(action) => {
            if(seqId == nextSeqId){
                return dispatch(action);
            }
        }
        dispatchIfValid(fetchWeatherStart());//是通过dispatch来派发action
        // dispatch({type:FETCH_START})
// 所以就是在这里是
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) =>
                    dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo))
                // dispatch({type: FETCH_SUCCESS,result:responseJson.weatherinfo})
            )
        }).catch((error) => {
            dispatchIfValid(fetchWeatherFailure(error))
            // dispatch({type:FETCH_FAILURE,result:error})
        })
    }
}