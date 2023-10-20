import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6">Test for Ecommerce Pocemon API</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
