import React from "react";
import { Container, Box, Button, Typography, OutlinedInput,} from "@mui/material";
import addIcon from '../Assets/add.png';
import searchIcon from '../Assets/search.png';
import arrowDown from '../Assets/arrowDown.png';
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material";
import "../../style.css";
import CustomizedDrop from "../../../../components/Input/DropDown";


function Header({addButtonTitle="New Cuisine",menu = [],title='All Cuisines',getSearchValue}) {
  const CustomButton = styled(Button)(({ theme }) => ({
    padding: "10px 16px",
    // width: "133px",
    height: "40px",
    background: "#2B817B",
    borderRadius: "4px",
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "14px",
    "&:hover": { backgroundColor: "#2B817B", color: "white" },
  }));
  const CustomText = styled(Typography)(({ theme }) => ({
    color: "#1A1824",
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "0.01em",
    fontFamily: "Outfit",
  }));
  const CustomSearch = styled(OutlinedInput)(({ theme }) => ({
    padding: "10px 16px",
    width: "350px",
    height: "40px",
    background: "#F6F6F6",
    border: "1px solid #E1E1E6",
    borderRadius: "4px"
  }));
  return (
    <>
      <Container className="flexBox" maxWidth="xl" sx={{}}>
        <Box>
          <CustomText>{title}</CustomText>
        </Box>
        <Box>
          {window.location.pathname == '/Food_Menu' ? null :<CustomButton> 
            <img src={addIcon} alt="add icon" />
            {addButtonTitle}</CustomButton> }
        </Box>
      </Container>
      <Container sx={{marginTop:3,marginBottom:3}} className="flexBox" maxWidth="xl">
        <Box>
          <CustomSearch endAdornment={
            <InputAdornment position="end">
              <img src={searchIcon} alt="search icon" />
            </InputAdornment>
          
          } 
          onChange={(e)=>getSearchValue(e.target.value)}
          />
        </Box>
        <Box display="flex" gap={2}>
          {
           menu.map((item,index)=>(
            <CustomizedDrop
            key={index}
            label={item.title}

                      // items={[
                      //   {
                      //     label: "View Details",
                      //     icon: "fa fa-eye",
                      //     id: "view-details",
                      //   },
                      //   {
                      //     label: "Pause Subscription",
                      //     icon: "fa fa-eye",
                      //     color: "#6A82CF",
                      //     id: "pause-subscription",
                      //   },
                      //   {
                      //     label: "Change Address",
                      //     icon: "fa fa-eye",
                      //     id: "change-address",
                      //   },
                      //   {
                      //     label: "View Receipt",
                      //     icon: "fa fa-eye",
                      //     id: "view-receipt",
                      //   },
                      //   {
                      //     label: "Cancel Subscription",
                      //     icon: "fa fa-eye",
                      //     color: "#E75C62",
                      //     id: "cancel-subscription",
                      //   },
                      //   { label: "Help", icon: "fa fa-eye", id: "help" },
                      // ]}
                      onClick={(e) => {
                        console.log(e);
                      }}
                    />
            ))
          }
          
        </Box>
      </Container>
    </>
  );
}

export default Header;
