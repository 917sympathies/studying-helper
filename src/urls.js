const url = "https://localhost:7271";

const getUserWorkspacesUrl = (id) => `${url}/api/user/${id}/workspace`;

const signInUrl = `${url}/api/user/signin`;
const signUpUrl = `${url}/api/user/signup`;

const addWorkspaceUrl = (userId) => 
`${url}/api/user/${userId}/workspace`;

const deleteWorkspaceUrl = (userId, id) => 
`${url}/api/user/${userId}/workspace/${id}`

const changeNameWorkspaceUrl = (userId, id) => 
`${url}/api/user/${userId}/workspace/${id}/name`;

const addTaskUrl = (userId, wsId) => 
`${url}/api/user/${userId}/workspace/${wsId}/task`;

const setTaskDeadlineUrl = (userId, wsId, id) => 
`${url}/api/user/${userId}/workspace/${wsId}/task/${id}/deadline`;

const deleteTaskUrl = (userId, wsId, id) => 
`${url}/api/user/${userId}/workspace/${wsId}/task/${id}`;

const changeTaskStateUrl = (userId, wsId) => 
`${url}/api/user/${userId}/workspace/${wsId}/task/state`;

const getAllTasksUrl = (userId) => 
`${url}/api/user/${userId}/task`;

export {url, getUserWorkspacesUrl, signInUrl, signUpUrl, addWorkspaceUrl, deleteWorkspaceUrl, changeNameWorkspaceUrl, addTaskUrl, setTaskDeadlineUrl, deleteTaskUrl, changeTaskStateUrl, getAllTasksUrl};