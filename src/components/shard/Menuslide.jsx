import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Menuslide extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <Menu
                style={{ width: 240 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="/home"><Link to="/App"><Icon type="home"></Icon>首页</Link></Menu.Item>
                <SubMenu key ='ui' title= { <div><Icon type="laptop" /><span>物业管理</span></div>}>
                    <Menu.Item key="/App/project" ><Link to="/App"><Icon type="exception" />项目管理</Link></Menu.Item>
                    <Menu.Item key="/ui/about" ><Link to="/App"><Icon type="heart" />关于</Link></Menu.Item>
                    <Menu.Item key="/ui/weather"><Link to="/ui/weather" ><Icon type="heart" />天气查询</Link></Menu.Item>
                    <Menu.Item key="/ui/articles"><Link to={{pathname:"/ui/articles"}} ><Icon type="heart" />前端库排行</Link></Menu.Item>
                    <Menu.Item key="/ui/address"><Link to={{pathname:"/ui/address"}} ><Icon type="heart" />地址选择</Link></Menu.Item>
                </SubMenu>
                <SubMenu key ='other' title= { <div><Icon type="laptop" /><span>其他</span></div>}>
                    <Menu.Item key="/other/other1"><Link to="/other/other1">404</Link></Menu.Item>
                </SubMenu>
            </Menu>

        );
    }
}