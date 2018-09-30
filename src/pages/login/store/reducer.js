import {fromJS} from 'immutable'
import * as constants from './constants'
// immutable 对象
const defaultState = fromJS({
    login:false
})            


// 如果原始的写法，必须手动保证state不被修改，会纯在风险
//immutable 可以生产immutable对象；
export default (state = defaultState,action) => {
    if(action.type === constants.CHANGE_LOGIN){
        return state.set('login',action.value)
    }
    if(action.type === constants.LOGOUT){
        return state.set('login',action.value)
    }   
    return state
}