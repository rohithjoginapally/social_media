import usersApi from "../../../Network/Users/users";
import UseAPI from "../../../Hooks/UseAPI";

const getAllUsers = () => UseAPI(usersApi.getUsers);

export default {
  getAllUsers,
};
