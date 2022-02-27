import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from "@material-ui/icons";

function ProfilePicture({
  size,
  image = "https://reedbarger.nyc3.digitaloceanspaces.com/reactbootcamp/avatar.png",
  isOwner
}) {
  const classes = useProfilePictureStyles({ isOwner, size });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}

    </section>
  );
}

export default ProfilePicture;
