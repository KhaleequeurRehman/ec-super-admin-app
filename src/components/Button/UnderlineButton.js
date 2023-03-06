import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  textDecorationLine: "underline",
  color: "#2B817B",
  textTransform:"none"
}));

const UnderlineButton = ({ children }) => {
  return (
    <CustomButton variant="text">
      {children}
    </CustomButton>
  );
};

export default UnderlineButton;
