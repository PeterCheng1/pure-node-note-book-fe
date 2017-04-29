//网络请求
import axios from 'axios';
//url形式 localhost:7000/blog?id=111
export const blogAboutApi = ()=>{
    let api = '/blogDetail.action?id=about'
    return axios.get(api).then((res)=>{
            return res['data']
        })
};