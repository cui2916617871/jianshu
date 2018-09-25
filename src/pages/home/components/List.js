import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

import {ListItem,ListInfo,LoadMore} from '../style'

class List extends Component{
    render(){
        const {list,getMoreList,page} = this.props;
        return(
            <div>
                {
                    list.map((item,index) => (
                        <Link key={index} to={"/details/"+item.get('id')}>
                            <ListItem key={index}>
                                <img alt='' className="pic" src={item.get("imgUrl")}/>
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState=(state) => ({
    list:state.get("home").get("articleList"),
    page:state.get("home").get("articlePage")
})
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispatch)(List)