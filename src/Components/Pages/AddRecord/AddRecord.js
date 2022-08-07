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
  const [shortData, setshortData] = useState({
    type: "img",
    link: null,
    title: null,
    content: null,
    author: null,
    sensitive: false,
    tags: [],
  });

  const toggleSwitch = () => {
    setshortData((prevState) => {
      return {
        ...prevState,
        sensitive: !prevState.sensitive,
      };
    });
  };

  const valueChangeHandler = (event, type) => {
    switch (type) {
      case "type":
        setshortData({
          ...shortData,
          type: event.target.value,
        });
        break;
      case "title":
        setshortData({
          ...shortData,
          title: event.target.value.trim(),
        });
        break;
      case "content":
        setshortData({
          ...shortData,
          content: event.target.value.trim(),
        });
        break;
      case "link":
        setshortData({
          ...shortData,
          link: event.target.value.trim(),
        });
        break;
      case "tags":
        const tags = event.target.value.trim().split(" ");
        setshortData({
          ...shortData,
          tags: tags,
        });
        break;
      default:
        console.log("ee ka pass kiye ho be");
    }
  };

  return (
    <div className={Styles.cont}>
      <div className={Styles.content}>
        <p className={Styles.heading}>Create New Short</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Content Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={shortData.type}
            label="Content Type"
            onChange={(event) => valueChangeHandler(event, "type")}
          >
            <MenuItem value={"img"}>Image</MenuItem>
            <MenuItem value={"vid"}>Video</MenuItem>
          </Select>
        </FormControl>
        <p className={Styles.helper}>Select type for content (image/video)</p>
        <TextField
          id="outlined-basic"
          label="Link"
          required
          variant="outlined"
          onChange={(event) => valueChangeHandler(event, "link")}
          helperText={"Link for the image/video file"}
        />
        <TextField
          id="outlined-basic"
          label="Title"
          required
          variant="outlined"
          onChange={(event) => valueChangeHandler(event, "title")}
          helperText={`Title for the short (${
            shortData.title !== null
              ? shortData.title.trim().split(" ").length
              : 0
          } / 20 words)`}
        />
        <TextareaAutosize
          placeholder="Content *"
          required
          className={Styles.textarea}
          onChange={(event) => valueChangeHandler(event, "content")}
        />
        <p className={Styles.helper}>{`Content for the short (${
          shortData.content !== null
            ? shortData.content.trim().split(" ").length
            : 0
        } / 100 words)`}</p>
        <TextField
          id="outlined-basic"
          label="Tags"
          required
          variant="outlined"
          placeholder="India Festival Fun"
          onChange={(event) => valueChangeHandler(event, "tags")}
          helperText={`Tags for the short (${shortData.tags.length}/5)`}
        />
        <FormControlLabel
          labelPlacement="start"
          control={
            <Switch
              checked={shortData.sensitive}
              onChange={toggleSwitch}
              name="sens"
            />
          }
          label="Short contains sensitive content?"
        />
      </div>
      <div className={Styles.previewCont}>
        <p className={Styles.heading}>Preview Short</p>
        <div className={Styles.shortPrev}>
          <div
            style={{
              overflowY: "scroll",
              height: "430px",
              background: "#f7f8f3",
            }}
          >
            <Short prev={true} shortData={shortData} />
          </div>
          <button className={Styles.addBtn}>ADD SHORT</button>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
