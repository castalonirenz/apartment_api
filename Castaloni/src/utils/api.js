import axios from 'axios'

export const url = "http://192.169.0.103:8001/api/v1/"
export const ApiRequest = (method, data) => {
    

    
       return axios({
            method: method,
            url: data.url,
            params:{
                role:data.body.role
            }
            
        })
        .then(response => {
            // 
            return response.data
        })
        .catch(error => {
            
        })

        // 
        // 
        // return axios.get(data.url, {
        //     params:{
        //         role: data.body.role
        //     }
        // })
        // .then(response => {
        //     
        // })

}