import {fromJS} from 'immutable'
import * as constants from './constants'
// immutable 对象
const defaultState = fromJS({
    title:'全套写作技巧和套路',
    content:'<img src="https://upload-images.jianshu.io/upload_images/8901276-dbe71eefa1e3b6ec.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/900/format/webp"/><p>微信公众号、简书、今日头条等等写作平台的兴起，许多写作新手也想快速进入写作之门却不知道如何开始。很多新人会问，写作有没有妙招？答案是肯定，每一行每一业，都有自己的游戏规则，而真正掌握游戏规则的人，才有肉吃。接下来我会从写作是什么、写作的目的、以及如何写作三个方面一一为大家介绍写作这事的一些小妙招。</p>',

})            

export default (state = defaultState,action) => {
    if(action.type === constants.CHANGE_DETAIL){
        console.log(action)
        return state.merge({
            title:fromJS(action.title),
            content:fromJS(action.content)
        })
    }
    return state
}