import axios from 'axios'

class MachineService {
    constructor(url) {
        this.url = url + '/machines';
    }

    async getAll() {
        const response = await axios.get(this.url)
        return response.data;
    }

    async create(reqBody) {
        const response = await axios.post(this.url, reqBody);
        return response.data;
    }

    async get(id) {
        const response = await axios.get(`${this.url}/${id}`);
        return response.data;
    }

    async updateStatus(id, reqBody) {
        const response = await axios.patch(`${this.url}/${id}`, reqBody);
        return response.data;
    }

    async remove(id) {
        const response = await axios.delete(`${this.url}/${id}`);
        return response.data;
    }
};

export default new MachineService(process.env.REACT_APP_API_URL);