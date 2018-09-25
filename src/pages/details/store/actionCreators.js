import axios from 'axios'
import * as contants from './constants'

const changeDetails = (title,content) => ({
    type:contants.CHANGE_DETAIL,
    title,
    content
})

export const getDetails =(id) => {
    return (dispatch) => {
        axios.get("/api/detail.json?id="+id).then((res) => {
            const result = res.data.data
            console.log(result)
            dispatch(changeDetails(result.title,result.content))
        })
    }
    
}