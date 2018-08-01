
import React from 'react';
import {withRouter } from 'react-router-dom'
import { Button} from 'antd-mobile';
class Contents  extends React.Component{
    componentWillMount(){
    }

    returnHandle=()=>{
        this.props.history.goBack();//返回上一页
    }
    render(){

        return(
            <div>
                <Button onClick= {this.returnHandle }>返回</Button>
            </div>
        )
    }
};

export default withRouter(Contents) ;

