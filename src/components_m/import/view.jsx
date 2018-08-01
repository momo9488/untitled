import React,{Component} from 'react'
import "./style.less"
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';
import Animate from 'rc-queue-anim'
const ScrollOverPack = ScrollAnim.OverPack;

class Impo extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'queue-demo',
    };

    constructor(props) {
        super(props);
        this.openIndex = null;
        this.position = {};
        this.state = {
            dataArray: [
                {
                    img: 'https://zos.alipayobjects.com/rmsportal/riaksOILvYdFRfa.png',
                    text: 'Senior Product Designer',
                    key: 0,
                },
                {
                    img: 'https://zos.alipayobjects.com/rmsportal/EMQSSlFQtGYEnWx.png',
                    text: 'Senior Product Designer',
                    key: 1,
                },
                {
                    img: 'https://zos.alipayobjects.com/rmsportal/OCuGZXfRioLyhKF.png',
                    text: 'Senior Product Designer',
                    key: 2,
                },
                {
                    img: 'https://zos.alipayobjects.com/rmsportal/agzYYwzggpOjqge.png',
                    text: 'Senior Product Designer',
                    key: 3,
                },
            ],
            animation: [],
            style: [],
        };
    }

    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener('touchend', this.onTouchEnd);
            window.addEventListener('mouseup', this.onTouchEnd);
        } else {
            ///这个是兼容ie8以下浏览器的写法
            window.attachEvent('ontouchend', this.onTouchEnd);
            window.attachEvent('onmouseup', this.onTouchEnd);
        }
    }

    componentWillUnmount() {
        if (window.addEventListener) {
            window.removeEventListener('touchend', this.onTouchEnd);
            window.removeEventListener('mouseup', this.onTouchEnd);
        } else {
            window.detachEvent('onresize', this.onTouchEnd);
            window.detachEvent('onmouseup', this.onTouchEnd);
        }
    }

    onDelete = () => {
        const dataArray = this.state.dataArray;
        const deleteData = dataArray.filter(item => item.key === this.openIndex)[0];
        const i = dataArray.indexOf(deleteData);
        dataArray.splice(i, 1);//删除掉这个元素
        delete this.state.style[this.openIndex];
        this.openIndex = null;
        this.setState({ dataArray });//在重新设置数据，重新渲染
    };

    onTouchStart = (e, i) => {
        if (this.openIndex || this.openIndex === 0) {
            const animation = this.state.animation;
            animation[this.openIndex] = { x: 0, ease: 'easeOutBack' };
            this.setState({ animation }, () => {
                delete this.state.style[this.openIndex];
            });
            this.openIndex = null;
            return;
        }
        this.index = i;
        this.mouseXY = {
            startX: e.touches === undefined ? e.clientX : e.touches[0].clientX,
        };
    };

    onTouchEnd = () => {
        if (!this.mouseXY) {
            return;
        }
        const animation = this.state.animation;
        if (this.position[this.index] <= -60) {
            this.openIndex = this.index;
            animation[this.index] = { x: -60, ease: 'easeOutBack' };
        } else {
            animation[this.index] = { x: 0, ease: 'easeOutBack' };
        }

        delete this.mouseXY;
        delete this.position[this.index];
        this.index = null;
        this.setState({ animation });
    };

    onTouchMove = (e) => {
        if (!this.mouseXY) {
            return;
        }
        const currentX = e.touches === undefined ? e.clientX : e.touches[0].clientX;
        let x = currentX - this.mouseXY.startX;
        x = x > 10 ? 10 + (x - 10) * 0.2 : x;
        x = x < -60 ? -60 + (x + 60) * 0.2 : x;
        this.position[this.index] = x;
        const style = this.state.style;
        style[this.index] = { transform: `translateX(${x}px)` };
        const animation = [];
        this.setState({ style, animation });
    };

    render() {
        const liChildren = this.state.dataArray.map((item) => {
            const { img, text, key } = item;
            return (<li
                key={key}
                onMouseMove={this.onTouchMove}
                onTouchMove={this.onTouchMove}
            >
                <div className={`${this.props.className}-delete`}>
                    <a onClick={(e) => { this.onDelete(e); }}>删除（TweenOne是鼠标移动的设置）</a>
                </div>
                <TweenOne
                    className={`${this.props.className}-content`}
                    onTouchStart={e => {this.onTouchStart(e, key);console.log(e.touches)}}
                    onMouseDown={e => this.onTouchStart(e, key)}
                    onTouchEnd={()=>{this.onTouchEnd;console.log(this.mouseXY)}}
                    onMouseUp={()=>{this.onTouchEnd;console.log(this.mouseXY)}}
                    animation={()=>{this.state.animation[key];}}
                    // animation={{ path: { x: 50, y: 50, rotate: 50 } }}
                    style={this.state.style[key]}
                >
                    <div className={`${this.props.className}-img`}>
                        <img src={img} width="44" height="44" onDragStart={e => e.preventDefault()} />
                    </div>
                    <p>{text}</p>
                </TweenOne>
            </li>);
        });
        return (<div>
            <div className={`${this.props.className}-wrapper`}>
                <div className={this.props.className}>
                    <div className={`${this.props.className}-header`}>
                        <i />
                        <span>QueueAnim是依次进入</span>
                    </div>
                    <QueueAnim
                        component="ul"
                        animConfig={[
                            { opacity: [1, 0], translateY: [0, 30] },
                            { height: 0 },
                        ]}
                        ease={['easeOutQuart', 'easeInOutQuart']}
                        duration={[550, 450]}
                        interval={150}
                    >
                        {liChildren}
                    </QueueAnim>
                </div>
            </div>
            <ScrollOverPack hideProps={{ tweenOne: { reverse: true }}}>
                <QueueAnim key='queueAnim'>
                    <div key='a'>依次进入</div>
                    <div key='b'>依次进入</div>
                    <div key='b'>依次进入</div>
                </QueueAnim>
                <TweenOne key='tweenOne' vars={{ x:100 }} >单元素动画</TweenOne>
                <Animate key='rc-animate' transitionName="fade"
                         transitionAppear>
                    rc-animate示例
                </Animate>
            </ScrollOverPack>
        </div>);
    }
}
export default Impo