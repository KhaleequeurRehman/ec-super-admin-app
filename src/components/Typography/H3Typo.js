import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme, bold, color = "#1A1824" }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: bold ? 600 : 500,
  fontSize: "16px",
  letterSpacing: "0.015em",
  color: color,
}));

const H3Typo = ({ color, bold, children }) => {
  return (
    <Title color={color} bold={bold}>
      {children}
    </Title>
  );
};

export default H3Typo;
