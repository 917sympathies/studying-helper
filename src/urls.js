const url = "https://localhost:7271";

const getUserWorkspacesUrl = `${url}/api/user/getWorkspaces`

const signInUrl = `${url}/api/user/signin`;
const signUpUrl = `${url}/api/user/signup`;

const addWorkspaceUrl = `${url}/api/workspace/add`;
const deleteWorkspaceUrl = `${url}/api/workspace/delete`
const changeNameWorkspaceUrl = `${url}/api/workspace/changename`;

const addTaskUrl = `${url}/api/workspace/addtask`;
const deleteTaskUrl = `${url}/api/task/delete`;
const changeTaskStateUrl = `${url}/api/task/changestate`;

export {url, getUserWorkspacesUrl, signInUrl, signUpUrl, addWorkspaceUrl, deleteWorkspaceUrl, changeNameWorkspaceUrl, addTaskUrl, deleteTaskUrl, changeTaskStateUrl};