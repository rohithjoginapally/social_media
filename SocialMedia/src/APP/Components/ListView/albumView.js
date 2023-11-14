import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { postDetails, save, remove } from "../../Modules/Common/postDetails";
import PostController from "../../Modules/user-profile/Controller/profileController";
import PhotoView from "./photoView";
const Accordion = ({ id }) => {
  const [isActive, setIsActive] = useState(true);
  const [userId, SetUserId] = useState(0);
  const albums = PostController.getUserAlbums().data.filter(
    (user) => user.userId == id
  );
  return (
    <div>
      <ul>
        {albums.map((item) => (
          <div>
            {/* <li key={item.id} onClick={() => setIsActive(!isActive)}>
              {item.title}
            </li>
            {isActive && <PhotoView data={item.id}></PhotoView>} */}

            <li
              key={item.id}
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.title}
              <span class="badge badge-primary badge-pill">
                {isActive && <PhotoView data={item.id}></PhotoView>}
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
