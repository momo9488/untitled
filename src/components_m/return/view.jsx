import React,{Component} from 'react'
import {NavBar,Popover,Icon} from 'antd-mobile'
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const Item = Popover.Item;
class Return extends Component{
    render(){
        return(
            <div>
                <NavBar icon={<Icon type="left" />} onLeftClick={this.change} style={{position:"fixed",width: "100%",top:"0px",zIndex:"20"}}
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
                    {this.props.children}
                    {console.log(this.props)}
                </NavBar>
            </div>
        )
    }
}
export default Return