import React from 'react'

class NotFound extends React.Component{
    componentWillMount(){
        document.title="404"
    }
    render(){
        return (
            <div>
                <p>没有找到数据</p>
            </div>
        );
    }
};
///如果要被其他组件引入的话，就要写导出格式。需要的页面里面再写导入格式
export default NotFound;
