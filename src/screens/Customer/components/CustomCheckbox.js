import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

// a wrapper class for material ui checkbox
// Since you are just using the mui checkbox, simply pass all the props through to restore functionality.
function CustomCheckbox(props) {
  const {handleCheckCheckbox, checkboxVal} = props


  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    // <Checkbox
    //   icon={<CircleUnchecked />}
    //   checkedIcon={<CircleCheckedFilled />}
    //   {...props}
    // />

    <Checkbox
    value={checkboxVal && checkboxVal}
    onChange={handleCheckCheckbox && handleCheckCheckbox}
    // onChange={() => handleCheckCheckbox()}
    {...label}
      sx={{
        color: "#E1E1E6",
        "&.Mui-checked": {
          color: "#2B817B",
        },
      }}
      {...props}
    />
  );
}

export default CustomCheckbox;
