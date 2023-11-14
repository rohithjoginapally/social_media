import usersApi from "../../../Network/Users/users";
import UseAPI from "../../../Hooks/UseAPI";

const getAllPosts = () => UseAPI(usersApi.getUserPosts);

const updatePost = (data, id) => usersApi.updatePost(data, id);

const deletePost = (id) => usersApi.deletePost(id);

const addPost = (data) => usersApi.addPost(data);

const getUserAlbums = () => UseAPI(usersApi.getUserAlbums);

const getUserPhotos = () => UseAPI(usersApi.getUserPhotos);

const getUserComments = () => UseAPI(usersApi.getUserComments);

export default {
  getAllPosts,
  updatePost,
  deletePost,
  addPost,
  getUserAlbums,
  getUserPhotos,
  getUserComments,
};
