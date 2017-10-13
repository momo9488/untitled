////这个是简单的写法，不涉及到使用redux来管理数据。只用这一个文件就可以展示出跨域请求到的数据
import React,{Component} from 'react'
class Weather extends Component {
    constructor(props){
        super(props)
        this.state={
            weather:null
        };
    }
    componentDidMount(){
        const apiUrl='/data/sk/101010100.html'
        fetch(apiUrl).then((response) => {
            if(response.status!==200){
                throw new Error('Fail');
            }
            {console.log(response)}
            response.json().then((response)=> {
                this.setState({weather:response.weatherinfo});
            }).catch((error)=>{
                this.setState({weather:null});
            });
        }).catch((error)=>{
            this.setState({weather:null});
        })
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
export default Weather