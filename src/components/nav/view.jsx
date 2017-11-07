import React from 'react'
import ModalGallery from './ModalGallery'
import './style.less'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const navExample = () => (
    <Router>
        <div>
            <div id="trangle">sa</div>
            <ul>
                <li className="para">11</li>
                <li className="para">11</li>
                <li className="para">11</li>
            </ul>
            <div className="city">city</div>
            <div className="box">
                <div className="div1"></div>
                <div className="div2"></div>
                <div className="div3"></div>
            </div>
            <ul>
                <li><Link to="/1">11</Link></li>
                <li><Link to="/2">22</Link></li>
                <li><Link to="/3">33</Link></li>
            </ul>
            <Route path="/:id" component={child}/>
            {/*<ModalGallery/>*/}
        </div>
    </Router>
)
//{}里面的每个都是一个对象
const child= ({match,history})=>(
    <div>
        {console.log(history)}
        <h3>ID:{match.params.id}</h3>
    </div>
);

export default navExample