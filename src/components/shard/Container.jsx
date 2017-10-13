import React from 'react';
import Header from './Header';
import { Layout } from 'antd';
const { Content } = Layout ;

export default class Container extends React.Component{

    render(){
        return(
            <Layout>
                <Header/>
                <Content className="lee">
                    {this.props.children}
                    {console.log(this.props.children)}
                </Content>
            </Layout>
        );
    }
}