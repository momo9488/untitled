import React,{Component} from 'react';
import {spring,TransitionMotion} from 'react-motion'

export default class ReactMotion extends Component {
    constructor(props) {
        super(props);
        this.state={
            items: [{key: 'a', size: 10,data:'1'}, {key: 'b', size: 20,data:'2'}, {key: 'c', size: 30,data:'3'}]
        };
}
    componentDidMount() {
        this.setState({
            items: [{key: 'a', size: 10}, {key: 'b', size: 20}], // remove c.
        });
    }
    willLeave() {
        // triggered when c's gone. Keeping c until its width/height reach 0.
        return {width: spring(0), height: spring(0)};
    }

    render() {
        return (
            <TransitionMotion
                willLeave={this.willLeave}
                styles={this.state.items.map(item => ({
                    key: item.key,
                    style: {width: item.size, height: item.size},
                    data:item.data,
                }))}>
                {interpolatedStyles =>
                    // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
                    <div>
                        {interpolatedStyles.map(config => {
                            return <div key={config.key} style={{...config.style, border: '1px solid'}} >{config.data}</div>
                        })}
                    </div>
                }
            </TransitionMotion>
        );
    }
}