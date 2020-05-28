import axios from 'axios'


export const ApiRequest = (method, data) => {
    


       return axios({
            method: method,
            url: data.url,
            params:{
                role:data.body.role
            }
            
        })
        .then(response => {
            // console.log(response, "--> whut")
            return response.data
        })
        .catch(error => {
            console.log(error, "--> error")
        })

        // console.log(data.url, "---> URL")
        // console.log(data.body, "---> PARAMS")
        // return axios.get(data.url, {
        //     params:{
        //         role: data.body.role
        //     }
        // })
        // .then(response => {
        //     console.log(response, "--> WHERE IS THIS MOTHER FUCKER")
        // })

}