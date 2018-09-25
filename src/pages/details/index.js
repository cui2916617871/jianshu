import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'

import {DetailWrapper,Header,Content} from './style'
class Details extends Component{
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
}
const mapState = (state) => ({
    title:state.getIn(['details','title']),
    content:state.getIn(['details','content']),
})
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetails(id))
    }
})
export default connect(mapState,mapDispatch)(Details)