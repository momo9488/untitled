import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
export default class Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me']};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')///prompt()用于显示可提示用户进行输入的对话框
        ]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();//slice() 方法可从已有的数组中返回选定的元素,这里没有选取。不对数组进行处理
        newItems.splice(i, 1);//对数组进行直接的处理。可添加也可删除的方法
        this.setState({items: newItems});
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName="example"//代表这个Transition Group 相关的css 类都要以example为前缀
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}>/*通常对于首次装载没有必要有动画,这值默认是false*/
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}