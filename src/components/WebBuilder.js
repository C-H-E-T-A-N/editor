import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import websitePlugin from "grapesjs-preset-webpage";
import basicBlockPlugin from "grapesjs-blocks-basic";
import formPlugin from "grapesjs-plugin-forms";
import navbarPlugin from "grapesjs-navbar";
import typedPlugin from "grapesjs-typed";
import textEditor from "grapesjs-plugin-ckeditor";
import imageEditor from "grapesjs-tui-image-editor";
import toolTip from "grapesjs-tooltip";
import customCode from "grapesjs-custom-code";

function WebBuilder() {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "100%",
      plugins: [
        websitePlugin,
        basicBlockPlugin,
        formPlugin,
        navbarPlugin,
        typedPlugin,
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
  }, []);

  return <div id="gjs"></div>;
}
export default WebBuilder;
