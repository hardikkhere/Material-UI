import React, { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  Image,
  PersonAddAlt1,
  Videocam,
} from "@mui/icons-material";
import { Box, styled } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color="text.primary"
          width={400}
          height={280}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              //   src={}
              sx={{ width: 30, height: 30 }}
            />
            <Typography sx={{ fontWeight: 500 }} variant="span">
              Goku
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" mt={2} mb={3} gap={2}>
            <EmojiEmotionsIcon color="primary" />
            <Image color="secondary" />
            <Videocam color="success" />
            <PersonAddAlt1 color="error" />
          </Stack>

          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
