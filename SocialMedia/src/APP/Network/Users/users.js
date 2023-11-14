import NetworkAPI from "../api/server";

const usersEndPoint = "/users";
const usersPostsEndPoint = "/posts";
const usersAlbumsEndPoint = "/albums";
const usersPhotosEndPoint = "/photos";
const usersCommentsEndPoint = "/comments";
const getUsers = () => {
  return NetworkAPI.apiClient.get(usersEndPoint);
};
const getUserPosts = () => {
  return NetworkAPI.apiClient.get(usersPostsEndPoint);
};

const getUserAlbums = () => {
  return NetworkAPI.apiClient.get(usersAlbumsEndPoint);
};

const getUserPhotos = () => {
  return NetworkAPI.apiClient.get(usersPhotosEndPoint);
};

const getUserComments = () => {
  return NetworkAPI.apiClient.get(usersCommentsEndPoint);
};

const updatePost = (data, id) => {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded",
  };
  console.log("here");
  return NetworkAPI.apiClient.patch(
    usersPostsEndPoint + `/{${id}}`,
    data,
    headers
  );
};

const deletePost = (id) => {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded",
  };
  return NetworkAPI.apiClient.delete(usersPostsEndPoint + `/{${id}}`, headers);
};

const addPost = (data) => {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded",
  };
  return NetworkAPI.apiClient.post(usersPostsEndPoint, data, headers);
};

export default {
  getUsers,
  getUserPosts,
  updatePost,
  deletePost,
  addPost,
  getUserAlbums,
  getUserPhotos,
  getUserComments,
};
