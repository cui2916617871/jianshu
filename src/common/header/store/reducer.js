import * as constants from './constants'
import {fromJS} from 'immutable'

// immutable 对象
const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})            


// 如果原始的写法，必须手动保证state不被修改，会纯在风险
//immutable 可以生产immutable对象；
export default (state = defaultState,action) => {
    if(action.type === constants.SEARCH_FOCUS){
        // immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        return state.set('focused',true)
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false)
    }
    if(action.type === constants.CHANGE_LIST){
        // return state.set('list',action.data).set('totalPage',action.totalPage)
        return state.merge({
            list:action.data,
            totalPage:action.totalPage
        })

    }
    if(action.type === constants.MOUSE_ENTER){
        return state.set('mouseIn',true)
    }
    if(action.type === constants.MOUSE_LEAVE){
        return state.set('mouseIn',false)
    }
    if(action.type === constants.CHANGE_PAGE){
        return state.set('page',action.page)
    }        
    return state
}