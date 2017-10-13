////这个是简单的写法，不涉及到使用redux来管理数据。只用这一个文件就可以展示出跨域请求到的数据
import React,{Component} from 'react'
import { postCreateRoomForm } from './action'
import { connect } from 'react-redux';

class Weather extends Component {
    constructor(props){
        super(props)
        this.state={
            weather:null
        };
    }
    componentDidMount(){
        this.setState({weather:this.state.postCreateRoomForm});
    }
    render(){
        if(!this.state.weather){
            return(
                <div>暂无数据</div>
            );
        }
        const {city,cityid,temp}=this.state.weather;
        return(
            <div>
                {city}温度：{temp}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.weather)
    return{

    }
}

const mapDispatchToProps = (dispatch) => ({
    postCreateRoomForm:(city,cityid,temp)=>{
        dispatch( postCreateRoomForm(city,cityid,temp) )
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Weather)