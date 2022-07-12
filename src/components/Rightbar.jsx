import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Goku2 from "../images/Goku2.jpeg";
import Naruto1 from "../images/naruto1.png";
import P2 from "../images/P2.png";
import P3 from "../images/P3.jpeg";
import P4 from "../images/P4.jpg";

const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={500}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={Goku2} />
          <Avatar alt="Remy Sharp" src={Naruto1} />
          <Avatar alt="Remy Sharp" src={P2} />
          <Avatar alt="Remy Sharp" src={P3} />
          <Avatar alt="Remy Sharp" src={P4} />
          <Avatar alt="Remy Sharp" src={P4} />
          <Avatar alt="Remy Sharp" src={P4} />
          <Avatar alt="Remy Sharp" src={P4} />
          <Avatar alt="Remy Sharp" src={P4} />
        </AvatarGroup>

        <Typography mt={3} variant="h6" fontWeight={500}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Not Found"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="Not Found"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt="Not Found"
            />
          </ImageListItem>
        </ImageList>

        <Typography mt={3} variant="h6" fontWeight={500}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={Naruto1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={P2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={P3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
