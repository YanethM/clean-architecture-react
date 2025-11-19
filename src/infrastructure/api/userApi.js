import axios from "axios";

const API_BASE_URL = "https://cuidarte-security.vercel.app/api/v1";

export const userApi = {
    // https://cuidarte-security.vercel.app/api/v1/users/patients
    getUsers: async ()=>{
        const response = await axios.get(`${API_BASE_URL}/users/patients`);
        return response.data;
    }
};
