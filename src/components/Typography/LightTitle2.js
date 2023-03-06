import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme, bold, color = "#1A1824", lineHeight }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  letterSpacing: "0.015em",
  color: color,
  lineHeight: lineHeight ? lineHeight : "24px" 
}));

const LightTitle2 = ({ color, bold, children }) => {
  return (
    <Title color={color} bold={bold}>
      {children}
    </Title>
  );
};

export default LightTitle2;
