import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { postDetails, update, remove } from "../../Modules/Common/postDetails";
import PostController from "../../Modules/user-profile/Controller/profileController";
import TextField from "@mui/material/TextField";
import { Modal, Button, Form } from "react-bootstrap";

const Accordion = ({ input, name, userId }) => {
  const [isActive, setIsActive] = useState(false);
  const [indexValue, setIndexValue] = useState(0);
  const [userComments, setUserComments] = useState(["names"]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("none");
  const [message, setMessage] = useState("none");
  const [isUpdate, setIsUpdate] = useState(false);
  const handleOpen = (id, index) => {
    setIndexValue(index);
    comments = comments.filter((comment) => {
      return comment.postId == id;
    });
    setUserComments(comments);
    console.log(userComments);
    setIsActive(!isActive);
  };
  const handleClose = () => {
    setIsUpdate(false);
    setShow(!show);
  };

  const inputHandlerTitle = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setTitle(lowerCase);
  };
  const inputHandlerMessage = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setMessage(lowerCase);
  };

  const addComment = (type) => {
    if (type == "add") {
      const addData = PostController.addPost({
        postId: indexValue,
        id: 10,
        name: name,
        body: message,
      });
      addData
        .then((response) => alert(response.status))
        .catch((error) => alert(error));
    } else updatePost();
  };

  const handleModel = (id, type) => {
    if (type == "update") {
      setIsUpdate(true);
    } else setIsUpdate(false);
    console.log(id);
    setShow(!show);
  };

  const removeIndex = (index) => {
    console.log(index);
    remove(index);
    const update = PostController.deletePost(index);
    update
      .then((response) => alert(response.status))
      .catch((error) => alert(error));
    setIsActive(!isActive);
  };

  const updatePost = () => {
    const updateValue = {
      id: 100,
      title: title,
      body: message,
      userId: userId,
    };
    update(indexValue, updateValue);
    setShow(!show);
  };
  const filteredData = postDetails.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(input);
    }
  });
  let comments = PostController.getUserComments().data;
  return (
    <div>
      {filteredData.map((item, index) => (
        <ul class="list-group" onClick={() => handleOpen(item.id, index)}>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {item.title}
            <br />

            {isActive && index == indexValue && item.body}

            {isActive ? (
              <Badge
                bg="btn btn-dark"
                onClick={() => handleOpen(item.id, index)}
              >
                Close
              </Badge>
            ) : (
              <Badge
                bg="btn btn-dark"
                onClick={() => handleOpen(item.id, index)}
              >
                Open
              </Badge>
            )}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {isActive && index == indexValue && (
                <div className="accordion-content">
                  {userComments.map((comment, i) => {
                    return (
                      <div>
                        <div class="list-group">
                          <div class="d-flex w-100 justify-content-between">
                            <small>Comment By : {comment.name} </small>
                            <small> {i + 1} days ago</small>
                          </div>

                          <p class="mb-1">Message: {comment.body}</p>
                          <br />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {isActive && index == indexValue && (
                <div className="accordion-content">
                  <Badge
                    bg="warning"
                    onClick={() => handleModel(item.id, "update")}
                  >
                    Update
                  </Badge>
                  {"   "}
                  <Badge bg="danger" onClick={() => removeIndex(index)}>
                    Delete
                  </Badge>
                  {"   "}
                  <Badge
                    bg="primary"
                    onClick={() => handleModel(item.id, "post")}
                  >
                    Post Comment
                  </Badge>
                </div>
              )}
            </div>
          </li>
        </ul>
      ))}
      <Modal show={show} onHide={addComment}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <TextField
                id="outlined-basic"
                onChange={inputHandlerTitle}
                variant="outlined"
                fullWidth
                label="Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <TextField
                id="outlined-basic"
                onChange={inputHandlerMessage}
                variant="outlined"
                fullWidth
                label="Message"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          {isUpdate ? (
            <Button variant="primary" onClick={() => addComment("update")}>
              Update Post
            </Button>
          ) : (
            <Button variant="primary" onClick={() => addComment("add")}>
              Post
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Accordion;
