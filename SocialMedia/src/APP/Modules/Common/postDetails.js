export var postDetails = [];
export function save(deatils) {
  postDetails = [...deatils];
  console.log(postDetails);
}
export function remove(index) {
  postDetails.splice(index, 1);
}

export function add(data) {
  postDetails.push(data);
}

export function update(index, data) {
  postDetails[index] = data;
  console.log(postDetails);
}
