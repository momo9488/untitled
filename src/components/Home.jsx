import React, { Component } from 'react';
import 'antd/dist/antd.css';
export class Home extends Component {
    // pro= ()=> {
    //     return {
    //         promise : new Promise(function (resolve,reject) {
    //             console.log("Promise")
    //         })
    //     }
    // }
    timeout = (ms) => {
        new Promise((resolve,reject) => {
            setTimeout(resolve,ms,'done');
        });
    }

    render() {
        return (
            <div>
                <p>sss</p>
                {/*{this.pro}*/}
                {this.timeout(100).then((value) => {
                  console.log(value);
                })}

            }
            </div>
        );
    }
}

