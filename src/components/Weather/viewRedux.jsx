////这个是简单的写法，不涉及到使用redux来管理数据。只用这一个文件就可以展示出跨域请求到的数据
import React,{Component} from 'react'
import { actions } from './index'
import { connect } from 'react-redux'
import * as Status from './status'
import {withRouter} from 'react-router-dom'

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};
class CitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(ev) {
        const cityCode = ev.target.value;
        this.props.onSelectCity(cityCode);//利用onSelectCity来派发动作
    }
    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity]);//第一个的时候
    }

    render() {
        let {status,city,temp1} =this.props;
        const Weather = ()=>{
            switch (status){
                case Status.LOADING:{
                    return(
                        <div>天气信息请求中...</div>
                    )
                }
                case Status.SUCCESS:{
                    return(
                        <div>
                            <p>此处应有数据</p>
                            <p>{city}{temp1}</p>
                        </div>
                    )
                }
                case Status.FAILURE:{
                    return(
                        <div>
                            <p>获取数据失败</p>
                        </div>
                    )
                }
                default:{
                    return(
                        <div>出错</div>
                    )

                }
            }
        }
            return (
                <div>
                    <select onChange={this.onChange}>
                        {
                            Object.keys(CITY_CODES).map(
                                cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
                            )
                        }
                    </select>
                    <Weather/>
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    const weather =state.weather;
    {console.log(weather)}
    const status=weather.status;
    if(status=='loading'){
        return{
            status:weather.status,
        }
    }else {
        return{
            status:weather.status,
            // city:weather.weatherinfo.city,
            // temp1:weather.weatherinfo.temp1
            city:weather.city,
            temp1:weather.temp1
        }
    }
}
//这个是action，提供了名为onSelectCity的函数类型prop
const mapDispatchToProps = (dispatch) => ({
    onSelectCity:(cityCode) => {
        dispatch(actions.fetchWeatherThunk(cityCode))
    }
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CitySelector));
