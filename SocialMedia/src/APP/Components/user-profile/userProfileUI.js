import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import postControllers from "../../Modules/user-profile/Controller/profileController";
import Accordion from "../Accordian/accordian";
import TextField from "@mui/material/TextField";
import { save } from "../../Modules/Common/postDetails";
import AlbumView from "../ListView/albumView";
import { Offline, Online } from "react-detect-offline";

import "./userProfile.css";
function ProfileUI(props) {
  const location = useLocation();
  const [showPosts, setShowPosts] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const state = location.state;

  const userPosts = postControllers
    .getAllPosts()
    .data.filter((post) => post.userId === state.profileDetails.id);
  save(userPosts);

  return (
    <div>
      <Online>
        {" "}
        <div>
          <div class="container mt-4">
            <div class="row d-flex justify-content-center">
              <div class="col-md-7">
                <div class="card p-3 py-4">
                  <div class="text-center">
                    {" "}
                    <img
                      src="https://i.imgur.com/bDLhJiP.jpg"
                      width="100"
                      class="rounded-circle"
                    />{" "}
                  </div>
                  <div class="text-center mt-3">
                    {" "}
                    <span class="bg-secondary p-1 px-4 rounded text-white">
                      {state.profileDetails.username}
                    </span>
                    <h5 class="mt-2 mb-0">{state.profileDetails.name}</h5>{" "}
                    <h5 class="mt-2 mb-0">{state.profileDetails.email}</h5>{" "}
                    <h5 class="mt-2 mb-0">{state.profileDetails.phone}</h5>{" "}
                    <br />
                    <div class="buttons">
                      {" "}
                      <button
                        class="btn btn-outline-primary px-4"
                        onClick={() => {
                          if (showAlbums) {
                            setShowAlbums(!showAlbums);
                            setShowPosts(!showPosts);
                          } else {
                            setShowPosts(!showPosts);
                          }
                        }}
                      >
                        View Posts
                      </button>{" "}
                      <button
                        class="btn btn-primary px-4 ms-3"
                        onClick={() => {
                          if (showPosts) {
                            setShowPosts(!showPosts);
                            setShowAlbums(!showAlbums);
                          } else {
                            setShowAlbums(!showAlbums);
                          }
                        }}
                      >
                        View Albums
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showPosts && (
            <div class="container mt-4">
              <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                  <ul class="list-group">
                    <li class="list-group-item ">
                      <div className="search">
                        <TextField
                          id="outlined-basic"
                          onChange={inputHandler}
                          variant="outlined"
                          fullWidth
                          label="Search"
                        />
                      </div>
                    </li>
                    <li class="list-group-item">
                      <Accordion
                        input={inputText}
                        name={state.profileDetails.name}
                        userId={state.profileDetails.id}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {showAlbums && (
            <div class="container mt-4">
              <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                  <ul class="list-group">
                    <li class="list-group-item ">
                      <AlbumView id={state.profileDetails.id}></AlbumView>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </Online>
      <Offline>
        <h1>No Internet</h1>
      </Offline>
    </div>
  );
}

export default ProfileUI;
