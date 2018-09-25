import {fromJS} from 'immutable'
import * as constants from './constants'
// immutable 对象
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:true
})            


// 如果原始的写法，必须手动保证state不被修改，会纯在风险
//immutable 可以生产immutable对象；
export default (state = defaultState,action) => {
    if(action.type === constants.CHANGE_HOME_DATA){
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
    }
    if(action.type === constants.ADD_ARTICLE_LIST){
        console.log(action.nextPage)
        return state.merge({
                    articleList:state.get("articleList").concat(action.list),
                    articlePage:action.nextPage
                })
    }
    if(action.type === constants.TOGGLE_SCROLL_TOP){
        console.log(action.nextPage)
        return state.merge({
                    showScroll:action.show
                })
    }    
    return state
}