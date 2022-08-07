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
import Validator from "../../Validator/Validator";

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

  const [contentErr, setcontentErr] = useState(false);

  const [touchState, setTouchState] = useState({
    link: false,
    title: false,
    content: false,
    tag: false,
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
        const tags = event.target.value
          .trim()
          .split(" ")
          .filter((word) => word !== "");
        setshortData({
          ...shortData,
          tags: tags,
        });
        break;
      default:
        console.log("ee ka pass kiye ho be");
    }
  };

  const touchHandler = (type) => {
    switch (type) {
      case "tags":
        setTouchState({
          ...touchState,
          tag: true,
        });
        break;
      case "title":
        setTouchState({
          ...touchState,
          title: true,
        });
        break;
      case "content":
        setTouchState({
          ...touchState,
          content: true,
        });
        break;
      case "link":
        setTouchState({
          ...touchState,
          link: true,
        });
        break;
      default:
        console.log("galat number, yahan devi prasad nhi hai");
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
          onBlur={() => touchHandler("link")}
          error={
            !Validator(shortData.link, "isRequired").isValid &&
            touchState.link === true
              ? true
              : false
          }
          helperText={
            !Validator(shortData.link, "isRequired").isValid &&
            touchState.link === true
              ? Validator(shortData.link, "isRequired").errorMsg
              : "Link for the image/video file"
          }
        />
        <TextField
          id="outlined-basic"
          label="Title"
          required
          variant="outlined"
          onChange={(event) => valueChangeHandler(event, "title")}
          onBlur={() => touchHandler("title")}
          error={
            !Validator(shortData.title, "isRequired|maxWords 20").isValid &&
            touchState.title === true
              ? true
              : false
          }
          helperText={
            !Validator(shortData.title, "isRequired|maxWords 20").isValid &&
            touchState.title === true
              ? Validator(shortData.title, "isRequired|maxWords 20").errorMsg
              : `Title for the short (${
                  shortData.title !== null
                    ? shortData.title
                        .trim()
                        .split(" ")
                        .filter((word) => word !== "").length
                    : 0
                } / 20 words)`
          }
        />
        <TextareaAutosize
          placeholder="Content *"
          required
          className={[
            Styles.textarea,
            !Validator(shortData.content, "isRequired|maxWords 100").isValid &&
            touchState.content === true
              ? Styles.error
              : "",
          ].join(" ")}
          onChange={(event) => valueChangeHandler(event, "content")}
          onBlur={() => touchHandler("content")}
        />
        <p
          className={[
            Styles.helper,
            !Validator(shortData.content, "isRequired|maxWords 100").isValid &&
            touchState.content === true
              ? Styles.errorHelper
              : "",
          ].join(" ")}
        >
          {!Validator(shortData.content, "isRequired|maxWords 100").isValid &&
          touchState.content === true
            ? Validator(shortData.content, "isRequired|maxWords 100").errorMsg
            : `Content for the short (${
                shortData.content !== null
                  ? shortData.content
                      ?.trim()
                      .split(/\s+/)
                      .filter((word) => word !== "").length
                  : 0
              } / 100 words)`}
        </p>
        <TextField
          id="outlined-basic"
          label="Tags"
          variant="outlined"
          placeholder="India Festival Fun"
          onChange={(event) => valueChangeHandler(event, "tags")}
          onBlur={() => touchHandler("tags")}
          error={
            !Validator(shortData.tags.join(" "), "maxWords 5").isValid &&
            touchState.tag === true
              ? true
              : false
          }
          helperText={
            !Validator(shortData.tags.join(" "), "maxWords 5").isValid &&
            touchState.tag === true
              ? Validator(shortData.tags.join(" "), "maxWords 5").errorMsg
              : `Tags for the short (${shortData.tags.length}/5)`
          }
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
