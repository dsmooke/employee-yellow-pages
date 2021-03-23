import axios from "axios";

// results parameter allows you to fetch # number of generated users in one request
const URL =
  "https://randomuser.me/api/?results=20&nat=us&seed=foobar&exc=login,registered";

const exportedUsers = {
  getEmployeeList: function () {
    return axios.get(URL);
  },
};
export default exportedUsers;
