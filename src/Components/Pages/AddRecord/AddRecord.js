import React, { useState } from "react";

import Styles from "./AddRecord.module.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Short from "../../Short/Short";

const AddRecord = (props) => {
  const [type, settype] = useState("img");
  const [sensitive, setsensitive] = useState(false);

  const handleChange = (event) => {
    settype(event.target.value);
  };

  const toggleSwitch = () => {
    setsensitive((prevState) => !prevState);
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
        <TextField
          id="outlined-basic"
          label="Tags"
          required
          variant="outlined"
          placeholder="India Festival Fun"
        />
        <FormControlLabel
          labelPlacement="start"
          control={
            <Switch checked={sensitive} onChange={toggleSwitch} name="sens" />
          }
          label="Short contains sensitive content?"
        />
      </div>
      <div className={Styles.previewCont}>
        <p className={Styles.heading}>Preview Short</p>
        <div className={Styles.shortPrev}>
          <div style={{overflowY: "scroll", height: "430px"}}>
            <Short />
          </div>
          <button className={Styles.addBtn}>ADD SHORT</button>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
