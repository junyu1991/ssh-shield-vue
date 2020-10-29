import axios from 'axios'

export default class HttpUtil {
    constructor(baseUrl) {
        this.axiosObject = axios.create({
            baseURL: baseUrl || ""
        })
    }

    async postRequest(url, data) {
        let response = this.axiosObject.post(url, data)
        return response;
    }

    async getRequest(url, data) {
        let response = this.axiosObject.get(url,{params: data});
        return response;
    }
}