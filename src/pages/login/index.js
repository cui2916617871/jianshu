import React,{Component} from 'react'
import {connect} from 'react-redux'

import {LoginWrapper,LoginBox,Input,Button} from './style'
class Login extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号"/>
                    <Input placeholder="密码"/>
                    <Button>登录</Button>
                </LoginBox>
                
            </LoginWrapper>
        )
    }
}

export default Login