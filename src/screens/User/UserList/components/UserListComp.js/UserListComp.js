import React from 'react'
import Box from "@mui/material/Box";
import { UserListHeader } from './UserListHeader';
import UserListGrid from './UserListGrid';

export const UserListComp = ({setShowUserDetail,selectedUser,setSelectedUser}) => {
  return (
    <div>
        {/* <Box>
            <UserListHeader/>
        </Box> */}
        <Box>
            <UserListGrid setShowUserDetail={setShowUserDetail} setSelectedUser={setSelectedUser} 
            selectedUser={selectedUser} />
        </Box>
    </div>
  )
}
