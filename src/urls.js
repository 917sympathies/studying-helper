const url = "https://localhost:7271";

const getUserWorkspacesUrl = `${url}/api/user/getWorkspaces`

const signInUrl = `${url}/api/user/signin`;
const signUpUrl = `${url}/api/user/signup`;

const addWorkspaceUrl = `${url}/api/workspace/add`;
const deleteWorkspaceUrl = `${url}/api/workspace/delete`
const changeNameWorkspaceUrl = `${url}/api/workspace/changename`;

const addTaskUrl = `${url}/api/workspace/addtask`;
const setTaskDeadlineUrl =`${url}/api/task/setDeadline`
const deleteTaskUrl = `${url}/api/task/delete`;
const changeTaskStateUrl = `${url}/api/task/changestate`;
const getAllTasksUrl = `${url}/api/task/getTasks`

export {url, getUserWorkspacesUrl, signInUrl, signUpUrl, addWorkspaceUrl, deleteWorkspaceUrl, changeNameWorkspaceUrl, addTaskUrl, setTaskDeadlineUrl, deleteTaskUrl, changeTaskStateUrl, getAllTasksUrl};