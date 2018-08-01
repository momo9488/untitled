import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import { Drawer, List, NavBar, Icon,Popover ,Switch,WingBlank,WhiteSpace,Carousel,Accordion,Card,Flex,Steps,InputItem } from 'antd-mobile';
import initReactFastclick from 'react-fastclick';
import { createForm } from 'rc-form';
import "./style.less"//这里设置了font-face
//一开始也没有加这个，但是没关系，加了这个后，再删除，不知道为什么
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const locale = {
    prevText: 'Prev',
    nextText: 'Next',
};
const Step = Steps.Step;
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
///使用split拆分数组
const list="A,B,C,D";
const alist=list.split(',')
class MobileFirst extends React.Component {
    state = {
        docked: false,
        data: ['', '', ''],
        imgHeight: 176,
        type:'money',
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    onSelect =(value)=>{
        console.log(value.key)
    }
    onChange =(checked)=> {
        console.log(`switch to ${checked}`);
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);

        // initReactFastclick();
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        const sidebar = (<List style={{marginBottom:50}}>
            {[0, 1, 2, 3].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                       multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                                   thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);
        return (
        <div style={{ height: '100%' }}>
            <NavBar icon={<Icon type="left" />} onLeftClick={this.onOpenChange} style={{position:"fixed",width: "100%",top:"0px",zIndex:"20"}}
                rightContent={
                    <Popover mask
                             overlayClassName="fortest"
                             overlayStyle={{ color: 'currentColor' }}
                             //visible={this.state.visible}
                             overlay={[
                                 (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                                 (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                                 (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                     <span style={{ marginRight: 5 }}>Help</span>
                                 </Item>),
                             ]}
                             align={{
                                 overflow: { adjustY: 0, adjustX: 0 },
                                 offset: [-10, 0],
                             }}
                             onVisibleChange={this.handleVisibleChange}
                             onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover>
                }>
                标题栏
            </NavBar>
            <WingBlank>
                <div className="sub-title">Normal</div>
                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(ii => (
                        <a
                            key={ii}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    console.log(ii)
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Link to="mobile/second">link</Link>
            </WingBlank>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="Title 1">
                        <List className="my-list">
                            <List.Item>content 1</List.Item>
                            <List.Item>content 2</List.Item>
                            <List.Item>content 3</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                    <Accordion.Panel header="Title 3" className="pad">
                        text text text text text text text text text text text text text text text
                    </Accordion.Panel>
                </Accordion>
            </div>
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="This is title"
                        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
            <Flex>
                <Flex.Item><PlaceHolder /></Flex.Item>
                <Flex.Item><PlaceHolder /></Flex.Item>
                <Flex.Item><PlaceHolder /></Flex.Item>
            </Flex>
            <div className="sub-title">Small size</div>
            <WhiteSpace />
            <Steps size="small" current={1}>
                <Step title="Finished" description="This is description" />
                <Step title="In Progress" description="This is description" />
            </Steps>
            <List>
                <InputItem
                    {...getFieldProps('money3')}
                    value="123"
                    placeholder="start from left"
                >光标在左</InputItem>
                <InputItem
                    type={type}
                    placeholder="start from right"
                    clear
                    onChange={(v) => { console.log('onChange', v); }}
                    onBlur={(v) => { console.log('onBlur', v); }}
                >光标在右</InputItem>
                <InputItem
                    {...getFieldProps('money2', {
                        normalize: (v, prev) => {
                            if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                                if (v === '.') {
                                    return '0.';
                                }
                                return prev;
                            }
                            return v;
                        },
                    })}
                    type={type}
                    placeholder="money format"
                    ref={el => this.customFocusInst = el}
                    clear
                >数字键盘</InputItem>
                <List.Item>
                    <div
                        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                        onClick={() => this.customFocusInst.focus()}
                    >
                        click to focus
                    </div>
                </List.Item>
            </List>
            <icon className="fa fa-bars" style={{marginRight:"5px",fontSize:"20px"}}>eee</icon>
        </div>);
    }
}

const MobileFirst2 =createForm()(MobileFirst);
export default MobileFirst2
