
//异步加载的包装组件Bundle,Bundle的主要功能就是接收一个组件异步加载的方法(load)，并返回相应的react组件

import  { Component } from 'react';
export default class Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
        // {console.log(this.state)}//mod:null
        //{console.log(props)}
    }

    componentWillMount() {
        //首次渲染
        this.initAsync(this.props)
        //{console.log(this.props)}//当前的this.props是一个对象
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.initAsync(nextProps)
        }
        // {console.log(nextProps)}//得到的值都是加载APP
        // {console.log(this.props)}
    }

    initAsync(props) {
        //{console.log(props)}
        this.setState({
            mod: null
        });

        props.load(
            (mod) => {
                this.setState({
                    mod: mod.default ? mod.default : mod
                });
            });
    }

    render() {
        return this.state.mod ?   this.props.children( this.state.mod ) : null;
    }
}