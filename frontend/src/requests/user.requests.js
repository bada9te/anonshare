import axios from "axios"

const endpoint = `${process.env.REACT_APP_SERVER_BASE}/users`;


const httpCreateUser = async(user) => {
    return await axios.post(`${endpoint}/create`, { user });
}

const httpgetUserById = async(id) => {
    return await axios.get(`${endpoint}/id`, {
        params: { id }
    });
}

export {
    httpCreateUser,
    httpgetUserById,
};