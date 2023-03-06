import React from "react";
import {useState} from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { UserListComp } from "./components/UserListComp.js/UserListComp";
import { UserListDetailUser } from "./components/UserListDetailUser/UserListDetailUser";

export const UserList = () => {
  const [showUserDetail, setShowUserDetail] = useState(false);

  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div>
      {showUserDetail ? (
        <Box><UserListDetailUser setShowUserDetail={setShowUserDetail} selectedUser={selectedUser} /></Box>
      ) : (
        
        <Box>
          <UserListComp setShowUserDetail={setShowUserDetail} setSelectedUser={setSelectedUser} 
          selectedUser={selectedUser}
          />
        </Box>
      )}
    </div>
  );
};
