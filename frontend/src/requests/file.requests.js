import axios from "axios"

const endpoint = `${process.env.REACT_APP_SERVER_BASE}/files`;


const httpCreateFile = async(file, ownerId) => {
    let data = new FormData();
    data.append("file", file, file.name);
    data.append("owner", ownerId);
    return await axios.post(`${endpoint}/create`, data);
}

const httpUpdateFilePassword = async(password, fileId) => {
    return await axios.post(`${endpoint}/new-passwd`, { password, fileId });
}

const httpDeleteFile = async(fileId) => {
    return await axios.post(`${endpoint}/delete`, { fileId });
}

const httpGetFileById = async(id) => {
    return await axios.get(`${endpoint}/id`, {
        params: { id }
    });
}

const httpGetFilesByOwnerId = async(ownerId) => {
    return await axios.get(`${endpoint}/owner`, {
        params: { ownerId }
    });
}

export {
    httpCreateFile,
    httpUpdateFilePassword,
    httpDeleteFile,
    httpGetFileById,
    httpGetFilesByOwnerId,
};