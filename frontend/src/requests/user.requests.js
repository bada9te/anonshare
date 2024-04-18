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

const httploginUser = async(user) => {
    return await axios.post(`${endpoint}/login`, { user });
}

const httpGetNewToken = async(refreshToken) => {
    return await axios.post(`${endpoint}/refresh`, { refreshToken })
}

const httpLogoutUser = async(refreshToken) => {
    return await axios.post(`${endpoint}/logout`, { refreshToken })
}


export {
    httpCreateUser,
    httpgetUserById,
    httploginUser,
    httpGetNewToken,
    httpLogoutUser
};