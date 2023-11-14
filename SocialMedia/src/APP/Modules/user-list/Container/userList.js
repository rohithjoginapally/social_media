import Usercontroller from "../Controller/userController";
import React, { useState, useEffect } from "react";
import ProfileCard from "../../../Components/user-list/profileCardUI";
function UserList(props) {
  const getUsers = Usercontroller.getAllUsers();
  console.log(getUsers.data);
  return (
    <div>
      {getUsers.data.map((user) => {
        return (
          <ProfileCard
            name={user.name}
            username={user.username}
            email={user.email}
            followers="12k"
            website={user.website}
            phone={user.phone}
            company={user.company}
            address={user.address}
            id={user.id}
          ></ProfileCard>
        );
      })}
    </div>
  );
}

export default UserList;
