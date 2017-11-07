
import { FETCH_START, FETCH_SUCCESS,FETCH_FAILURE} from './actionType'

export const fetchWeatherStart = () => {
    type:FETCH_START
};
export const fetchWeatherSuccess = (result) => {
    type:FETCH_SUCCESS,
    result
}
export const fetchWeatherFailure = (error) => {
    type:FETCH_FAILURE,
    error
}
//创建房间
export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        dispatch(fetchWeatherStart())

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                dispatch(fetchWeatherFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error));
        })
    };

}
