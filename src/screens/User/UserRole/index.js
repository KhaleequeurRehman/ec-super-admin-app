import { Typography } from '@mui/material'
import React from 'react'
import Box from "@mui/material/Box";
import { ModulePermission } from './components/ModulePermission/ModulePermission';
import { H1Typo } from '../../../components/Typography';
import UserRoleDataGrid from './components/UserRoleDataGrid/UserRoleDataGrid';

export const UserRole = () => {
  return (
    <div>
      <Box mb="24px">
        <H1Typo>Add Role</H1Typo>
      </Box>

      <Box><ModulePermission hasRoleField={true} hasSubmitBn={true} /></Box>

      <Box mt="24px"><UserRoleDataGrid /></Box>

    </div>
  )
}
