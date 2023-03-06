import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
//import LightTitle from "../Typography/LightTitle";
import { Checkbox, Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const CustomMenu = styled(MenuItem)({
  height: "41px",
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "160%",
  letterSpacing: "0.015em",
  color: "#1A1824",
});

const LightTitle = styled(Typography)(({ color = "#9EA3AE", theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    maxWidth: "569px",
    letterSpacing: "0.015em",
    color,
  }));
export default function CustomizedDrop({
  title,
  label = "Action",
  height,
  items = [],
  hasCheckbox,
  onClick,
  ...rest
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent={"start"} gap={2}>
      {title && <LightTitle>{title}:</LightTitle>}
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        //   variant="outlined"
          disableElevation
          onClick={handleClick}
          endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
          sx={{
            // border: "1px solid #559A95",
            fontFamily: "Outfit",
            fontStyle: "normal",
            // fontWeight: height <= 24 ? 400 : 600,
            fontSize: "16px",
            lineHeight: "160%",
            height: `${height}px`,
            letterSpacing: "0.015em",
            color: open ? "#ffffff" : "#2B817B",
            textTransform: "none",
            backgroundColor: open ? " #559A95" : undefined,
          }}
        >
          {label}
          
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {Array.isArray(items) ? (
            items.map((item,index) => {   
              <CustomMenu
                onClick={() => {
                  onClick(item.id);
                }}
                style={{ color: item.color }}
                disableRipple
                {...rest}
                key={index}
              >
                {hasCheckbox && (
                  <Box>
                    <Checkbox />
                  </Box>
                )}

                {item.icon && (
                  <Box style={{ paddingRight: "10px" }}>
                    <i class={item.icon}></i>
                  </Box>
                )}
                {item.label}
              </CustomMenu>;
            })
          ) : (
            <>
              {Object.keys(items).map((item, index) => (
                <React.Fragment key={index}>
                  <Box style={{ padding: "5px 30px 5px 30px" }}>
                    <LightTitle>{item}</LightTitle>
                  </Box>
                  {items[item].map((item,i) => (
                    <CustomMenu
                      onClick={() => {
                        onClick(item.id);
                      }}
                      style={{ color: item.color }}
                      disableRipple
                      key={i}
                    >
                      {hasCheckbox && (
                        <Box>
                          <Checkbox />
                        </Box>
                      )}

                      {item.icon && (
                        <Box style={{ paddingRight: "10px" }}>
                          <i class={item.icon}></i>
                        </Box>
                      )}
                      {item.label}
                    </CustomMenu>
                  ))}
                </React.Fragment>
              ))}
            </>
          )}
        </StyledMenu>
      </div>
    </Box>
  );
}
