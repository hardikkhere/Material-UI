import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Goku from "../images/goku.png";
import Ninja from "../images/ninja.jpg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none ",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HARDIK
        </Typography>
        {/* <ComputerIcon sx={{ display: { xs: "block", sm: "none" } }} /> */}
        <Avatar sx={{ display: { xs: "block", sm: "none" } }} src={Ninja} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge badgeContent={1} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src={Goku}
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 50, height: 50 }} src={Goku} />
          <Typography variant="span">Goku</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
