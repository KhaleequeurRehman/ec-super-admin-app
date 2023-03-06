import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomerHeader } from "../../../../Customer/components/CustomerHeader";

export const UserListHeader = () => {
  return (
    <div>
      <Box>
        <CustomerHeader
          title={"User"}
          hasTextButtonTitle1={"Last Added"}
          hasTextButtonTitle2={"Any Status"}
          hasTextButtonTitle3={"All Main Courses"}
          hasFilterBtn={false}
        />
      </Box>
    </div>
  );
};
