import { styled, Typography } from "@mui/material";
const LightTitleTypo = styled(Typography)(({ color = "#9EA3AE", theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  maxWidth: "569px",
  letterSpacing: "0.015em",
  color,
}));

const LightTitle = ({ color, children, ...rest }) => {
  return <LightTitleTypo color={color} {...rest}>{children}</LightTitleTypo>;
};
export default LightTitle;
