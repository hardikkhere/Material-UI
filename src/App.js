import * as React from "react";
import Button from "@mui/material/Button";
import { IconButton, InputBase } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function App() {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
        size="small"
        color="success"
      >
        Hello World
      </Button>

      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <InputBase accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  );
}
export default App;
