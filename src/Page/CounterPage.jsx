import React from 'react'
import {view as Count,stateKey,reducer} from '../components/Count/index'
const page=() =>{
    return (
        <div>
            <div>Counter</div>
            <Count value={0}/>
        </div>
    )
}
const initState = () => Promise.resolve(100);
export {page,reducer,initState,stateKey}