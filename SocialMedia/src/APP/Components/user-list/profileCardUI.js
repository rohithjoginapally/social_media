import React, { useState } from "react";
import "./profileCard.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import avatar from "../../assets/Images/image-rita.png";
import { Link } from "react-router-dom";

function ProfileCard(props) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const data1 = {
    profileDetails: props,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className="card-container"
      onMouseEnter={() => {
        handleClickOpen();
      }}
      onMouseLeave={() => {
        handleClose();
      }}
    >
      <header>
        <img src={avatar} alt={props.name} />
      </header>

      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">{props.followers}</h1>
          <h2 className="smaller-text">Followers</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">{props.phone}</h1>
          <h2 className="smaller-text">Phone</h2>
        </div>
        <div className="photos">
          <h1 className="bold-text">{props.website}</h1>
          <h2 className="smaller-text">Website</h2>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"User Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <h1 className="bold-text">
                {"Name : "}
                {props.username} <br />
                {"Email : "}
                <span className="normal-text">{props.email}</span>
              </h1>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Link to="/profile" state={data1}>
            View{" "}
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileCard;
