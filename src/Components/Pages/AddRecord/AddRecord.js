import React, { useState } from "react";

import Styles from "./AddRecord.module.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddRecord = (props) => {
  const [type, settype] = useState("img");

  const handleChange = (event) => {
    settype(event.target.value);
  };

  return (
    <div className={Styles.cont}>
      <div className={Styles.content}>
        <p className={Styles.heading}>Create New Short</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Content Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={type}
            label="Content Type"
            onChange={handleChange}
          >
            <MenuItem value={"img"}>Image</MenuItem>
            <MenuItem value={"vid"}>Video</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Link"
          required
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Title"
          required
          variant="outlined"
        />
        <TextareaAutosize
          placeholder="Content *"
          required
          className={Styles.textarea}
        />
      </div>
      <div className={Styles.previewCont}>
        <p className={Styles.heading}>Preview Short</p>
      </div>
    </div>
  );
};

export default AddRecord;
