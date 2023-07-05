import { useEffect, useRef, useContext, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import websitePlugin from "grapesjs-preset-webpage";
import basicBlockPlugin from "grapesjs-blocks-basic";
import formPlugin from "grapesjs-plugin-forms";
import navbarPlugin from "grapesjs-navbar";
import textEditor from "grapesjs-plugin-ckeditor";
import imageEditor from "grapesjs-tui-image-editor";
import toolTip from "grapesjs-tooltip";
import customCode from "grapesjs-custom-code";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../Styles/WebBuilder.css';
function WebBuilder(props) {
  const [addtitle, setAddTitle] = useState("");
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);
  const editorRef = useRef(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "100%",
      plugins: [
        websitePlugin,
        basicBlockPlugin,
        formPlugin,
        navbarPlugin,
        textEditor,
        imageEditor,
        toolTip,
        customCode,
      ],
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: "",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
      pluginsOpts: {
        "grapesjs-preset-webpage": {
          blocksBasicOpts: {
            blocks: [
              "column1",
              "column2",
              "column3",
              "column3-7",
              "text",
              "link",
              "image",
              "video",
            ],
            flexGrid: 1,
          },
          blocks: ["link-block", "quote", "text-basic"],
        },
      },
    });
    editorRef.current = editor;
    return () => {
      editor.destroy();
    };
  }, []);

  const handleModify = async () => {
    if (addtitle || props.title) {
      if (editorRef.current) {
        const html = editorRef.current.getHtml();
        const css = editorRef.current.getCss();

        if (user) {
          // User is authenticated, send a POST request to save the data
          try {
            const response = await fetch(
              `http://127.0.0.1:8000/webpages/modify/${props.id}/`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  title: addtitle ? addtitle : props.title,
                  html_content: html,
                  css_content: css,
                }),
              }
            );

            const responseData = await response.json();
            if (responseData.detail === "Page modified") {
              // Page saved successfully
              alert("Page saved successfully");
              navigate("/Dashboard");
            } else {
              // Error saving the page
              console.error("Failed to save the page.");
            }
          } catch (error) {
            console.error("An error occurred while saving the page.", error);
          }
        } else {
          // User is not authenticated, show an alert to login
          alert("Please login to save the page.");
        }
      }
    } else {
      alert("Please Enter Title");
    }
  };

  const handleClick = () => {
    if (editorRef.current) {
      editorRef.current.setComponents(props.html_content);
      editorRef.current.setStyle(props.css_content);
    }
  };

  return (
    <div>
      <div className="container input-group my-2">
        <span className="input-group-text" id="basic-addon1">
          Title
        </span>
        <input
          type="text"
          id="input"
          name="title"
          className="form-control"
          placeholder="Title"
          aria-label="title"
          aria-describedby="basic-addon1"
          defaultValue={props.title}
          onChange={(e) => setAddTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleModify}>
          Modify
        </button>
        <button className="btn btn-primary" onClick={handleClick}>
          Click to Import Page
        </button>
      </div>
      <div id="gjs"></div>
    </div>
  );
}
export default WebBuilder;
