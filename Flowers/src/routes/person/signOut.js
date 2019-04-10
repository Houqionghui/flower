

import React from 'react';
import {connect} from 'react-redux'
import {Icon,Button} from 'antd'
import {exitLogin} from '../../api/person';

class signOut extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className={'personSignout'}>
            <div className='signoutTop'>
                <div className='signoutIcon clearfix'>
                    <a href="javascript:;" onClick={ev=>{
                        this.props.history.go(-1);
                    }}><Icon type='left' className='arrowL'/></a>
                    <p>账户管理</p>
                    <a href="javascript:;"><Icon type='bars' className='arrowR'/></a>
                </div>
            </div>
            <div className={'group clearfix'}>
                <a href="javascript:;" className={'noborder'}>
                <div>
                    余额
                    <span className={'good-lnk fr'}><Icon type={'right'}/></span>
                </div>
            </a>
            </div>
            <div className="group">
                <a href="javascript:;">
                    <div>个人资料管理<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
                <a href="javascript:;" className="noborder">
                    <div>收货人地址管理<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
            </div>
            <div className="group">
                <a href="javascript:;">
                    <div>修改密码<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
                <a href="javascript:;" className="noborder">
                    <div>修改用户名<span className="good-lnk fr"><Icon type={'right'}/></span></div>
                </a>
            </div>
            <div className={'group clearfix'}>
                <a href="javascript:;" className={'noborder'}>
                    <div>
                        功能反馈
                        <span className={'good-lnk fr'}><Icon type={'right'}/></span>
                    </div>
                </a>
            </div>
            <div className={'btn'}>
                <Button type="danger" onClick={async (ev)=>{
                    await exitLogin();
                    this.props.history.push('/person');
                }}>退出登录</Button>
            </div>
        </section>
    }
}
export default connect()(signOut);