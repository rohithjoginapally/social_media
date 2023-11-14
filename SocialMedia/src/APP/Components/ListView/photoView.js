import PostController from "../../Modules/user-profile/Controller/profileController";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
function PhotoView(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const photos = PostController.getUserPhotos().data.filter(
    (photo) => photo.albumId == props.data
  );
  console.log(photos);
  return (
    <div role="presentation" onClick={handleOpen}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit">
          View Photos
        </Link>
      </Breadcrumbs>
      {open && (
        <ImageList sx={{ width: 400, height: 400 }} cols={3} rowHeight={164}>
          {photos.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
}

export default PhotoView;
