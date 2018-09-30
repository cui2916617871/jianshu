import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {actionCreators} from './store'
import {LoginWrapper,LoginBox,Input,Button} from './style'
class Login extends Component{
    componentDidMount(){
    }
    render(){
        if(this.props.loginStatus){
            return <Redirect to='/'></Redirect>
        }else{
            return(
                <LoginWrapper>
                    <LoginBox>
                        {/* 
                        *   innerRef styled-components提供的ref属性
                        */}
                        <Input placeholder="账号" innerRef={(input) => {this.account = input}} />
                        <Input placeholder="密码" type="password"  innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                    
                </LoginWrapper>
            )
        }
    }
}

const mapState= (state) => ({
    loginStatus: state.getIn(['login','login'])
})


const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        console.log(accountElem.value,passwordElem.value)
    }
})

export default connect(mapState,mapDispatch)(Login)