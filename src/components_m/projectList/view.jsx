import { ListView,Icon } from 'antd-mobile';
import React,{Component} from 'react'
import Return from "../return/view";
import Organization from "../organization/view"
import QueueAnim from 'rc-queue-anim'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one';
var TweenOneGroup = TweenOne.TweenOneGroup;
const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '河北唐山项目',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    console.log(dataBlob)
    return dataBlob;
}

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
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
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                            lineHeight: '50px',
                            color: '#888',
                            fontSize: 18,
                            borderBottom: '1px solid #F6F6F6',
                        }}
                    >{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <div>
                <Return>我的项目</Return>
                <Organization/>
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
                    <ListView
                        ref={el => this.lv = el}
                        // dataSource={this.state.dataSource}
                        dataSource={this.state.dataSource}
                        //renderHeader={() => <span>header</span>}
                        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? <div><Icon type="loading"/><p>正在加载中...</p></div> : 'Loaded'}
                        </div>)}
                        renderRow={row}
                        renderSeparator={separator}
                        className="am-list"
                        pageSize={4}
                        useBodyScroll
                        onScroll={() => { console.log('scroll'); }}
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                        key={1}
                    />
                </QueueAnim>
            </div>
        );
    }
}
export default ProjectList