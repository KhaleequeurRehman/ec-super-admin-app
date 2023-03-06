import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ color = "#1A1824", theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  letterSpacing: "0.015em",
  color: color,
}));

const H1Typo = ({ color, children, ...rest }) => {
  return (
    <Title color={color} {...rest}>
      {children}
    </Title>
  );
};

export default H1Typo;
