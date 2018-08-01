import React from 'react'
import { List, InputItem, WhiteSpace,Button,Icon,Radio,Checkbox,WingBlank,Card} from 'antd-mobile';
import Return from "../return/view";
import { createForm } from 'rc-form';
const CheckboxItem = Checkbox.CheckboxItem;

class Apply extends React.Component {
//     componentDidMount() {
//         // this.autoFocusInst.focus();
//     }
//     handleClick = () => {
//         this.customFocusInst.focus();
//     }
//     render() {
//         const { getFieldProps,getFileError ,getFileValue} = this.props.form;//表单里面有很多受控组件
//         {console.log(getFileError)}
//         {console.log(getFileValue)}
//         return (
//             <div>
//                 <List renderHeader={() => 'Customize to focus'}>
//                     <InputItem
//                         {...getFieldProps('autofocus')}
//                         clear
//                         placeholder="auto focus"
//                         ref={el => this.autoFocusInst = el}
//                         labelNumber={5}
//                         error="true"
//                     ><div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
//                         backgroundSize: 'cover', height: '22px', width: '22px' }} />
//                     </InputItem>
//                 </List>
//                 <WhiteSpace />
//                 <form>
//                     <label>
//                         Name:
//                         <input type="text" name="name" />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         );
//     }
// }
    componentWillMount() {
        this.requiredDecorator = this.props.form.getFieldDecorator('required', {
            rules: [{required: true}],
        });
    }
    onChange = (val) => {
        console.log(val);
    }
    submit = (e) => {
        e.preventDefault();
        const {  getFieldsError,validateFields,getFieldsValue } = this.props.form;
        console.log(getFieldsValue());
        // let {  name, organizationId, master, contactor, contact, deviceCount,desc, deviceTypeList } = getFieldsValue();
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }
    handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(e)
        // const {  getFieldsError,validateFields,getFieldsValue } = this.props.form;
        // console.log(getFieldsValue)
    }
    render() {
        let errors;
        const {value} =this.props;
        const data = [
            { value: 0, label: 'Ph.D.' },
            { value: 1, label: 'Bachelor' },
            { value: 2, label: 'College diploma' },
        ];
        const { getFieldError,getFieldDecorator} = this.props.form;
        const list="Java scriptJava";
        const RegExt =/\BJava\b/i;
        const localTime = new Date();
        localTime.setUTCHours(12);
        return (
            <div>
                <form onSubmit={this.submit}>
                    {
                        getFieldDecorator('name',{
                            rules:[
                                // {transform:(transformeValue) =>{ return validateTrim(transformeValue) } },
                                {required: true,message: '项目名称不能为空',},
                                {pattern:/^\S+$/,message:"格式错误，请勿包含空格"},
                                {max:1,message: '项目名称长度不能超过100',}]
                        })(
                            <InputItem size="large" prefix={<Icon type="cloud-o" />} placeholder="项目名称"/>
                        )
                    }
                    {this.requiredDecorator(
                    <List renderHeader={() => 'Customize to focus'}>
                        <InputItem
                            clear
                            placeholder="auto focus"
                            ref={el => this.autoFocusInst = el}
                            labelNumber={5}
                            //error="true"
                        ><div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                            backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                       <InputItem
                             clear
                             placeholder="auto focus"
                             ref={el => this.autoFocusInst = el}
                             labelNumber={5}
                             //error="true"
                         ><div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                             backgroundSize: 'cover', height: '22px', width: '22px' }} />
                         </InputItem>
                        {(errors = getFieldError('required')) ? <p style={{position:"absolute",top:"0px",left:"85px",color:"red"}}>不能为空</p> : null}
                     </List>
                    )}
                    <List renderHeader={() => 'CheckboxItem demo'}>
                        {data.map(i => (
                            <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                                {i.label}
                            </CheckboxItem>
                        ))}
                        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine/>
                    </List>
                    <div >
                        <Button onClick = {this.submit}> 提交申请</Button>
                        {/*<Button onfastclick/>*/}
                    </div>
                </form>
                {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*<div style={{textAlign:"center",marginTop:"30px"}}>*/}
                        {/*<Button style={{width:"35%"}} onClick = {this.handleSubmit}> 提交申请</Button>*/}
                    {/*</div>*/}
                {/*</form>*/}
                {console.log(list.search(RegExt))}
                {console.log(localTime.toTimeString())}
                {console.log(localTime.toLocaleString())}
                <section id="id1">
                    <article>这是一个视图</article>
                    <a href="#id2"></a>
                </section>
                <section id="id2">
                    <article>这是一个视图</article>
                    <a href="#id1"></a>
                </section>
                <icon class="fa fa-angle-left back"></icon>

                <div key={1}>
                    <Card classNam="ss">

                    </Card>
                </div>
            </div>
        );
    }
}
export default createForm()(Apply);