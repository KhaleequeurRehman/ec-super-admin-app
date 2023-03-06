import React from "react";
import {
  H1Typo,
  H3Typo,
  LightTitle,
  LightTitle2,
} from "../../../../../components/Typography";
import { Typography } from "@mui/material";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material";
import { CheckboxAndTitle } from "./CheckboxAndTitle";

const CardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "52px",
  padding: "16px",
  border: "1px solid #E1E1E6",
  borderRadius: "4px",
}));


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const SendNotificationType = ({formik}) => {
  const [selectedValue, setSelectedValue] = React.useState(false);


  const checkboxOnChangeHandler = (e) => {
    if(e?.target?.checked){
    formik.setFieldValue('to',e.target.value)
    }else{
      formik.setFieldValue('to','')
    }
  }

  const checkBoxData = [
    {
      title: "All Customer",
      value: "Customer",
      // onChange:formik.handleChange,
      onChange:checkboxOnChangeHandler,
      // name:"to"
    },
    {
      title: "All Caterer",
      value: "Caterer",
      // onChange:formik.handleChange,
      onChange:checkboxOnChangeHandler,
      // name:"to"
    },
    {
      title: "All Driver",
      value: "Driver",
      // onChange:formik.handleChange,
      onChange:checkboxOnChangeHandler,
      // name:"to"
    },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <div>
      <H3Typo color="#9EA3AE">Notification Type:</H3Typo>

      <Box width="100%" mt="28px">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
              <Box pl="10px">
                {/* <Radio {...controlProps("c")} color="success" /> */}
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      {...controlProps("a")}
                      size="small"
                      color="success"
                    />
                  }
                  label="Broadcast"
                  sx={{
                    ".MuiFormControlLabel-label": {
                      // Change color here
                      fontWeight: 400,
                      fontSize: "16px",
                      letterSpacing: "0.015em",
                      color: "#1A1824",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  ml: "34px",
                }}
              >
                <Box>
                  {/* <Radio {...controlProps("c")} color="success" /> */}
                  <FormControlLabel
                    value="2"
                    control={
                      <Radio
                        {...controlProps("b")}
                        size="small"
                        color="success"
                      />
                    }
                    label="Specific Notification"
                    sx={{
                      ".MuiFormControlLabel-label": {
                        // Change color here
                        fontWeight: 400,
                        fontSize: "16px",
                        letterSpacing: "0.015em",
                        color: "#1A1824",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>

      <Box mt="32px">
        {checkBoxData.map((item, index) => {
          return <Box key={index} mb="16px"><CheckboxAndTitle title={item.title} value={item.value} name={item.name} onChange={item?.onChange} /></Box>;
        })}
      </Box>
    </div>
  );
};
