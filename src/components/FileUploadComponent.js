import React, { createContext, useContext } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import { useState } from "react";
import CustomizeMeme from "./CustomizeMeme";

const customImageContext = createContext();

const FileUploadComponent = ({ children }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const fileParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const onFileChange = ({ meta, file }, status) => {
    console.log(meta, file, status);
    if (status === "done") {
      console.log(meta, file, status);
      setImage(meta.previewUrl);
      // navigate("/customize");
    }
  };
  const onSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
    // console.log(image);
  };
  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };
  const selectFileInput = ({ onFiles, files, getFilesFromEvent }) => {
    const textMsg =
      files.length > 0 ? "Upload Again" : "Upload/Drag and drop Your Image";
    return (
      <label className="btn btn-danger mt-4">
        {textMsg}
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            getFilesFromEvent(e).then((chosenFiles) => {
              onFiles(chosenFiles);
            });
          }}
        />
      </label>
    );
  };

  const check = () => {
    console.log(image);
  };
  return image ? (
    <CustomizeMeme image={image} />
  ) : (
    <div>
      <Dropzone
        onSubmit={(onSubmit, check)}
        onChangeStatus={onFileChange}
        InputComponent={selectFileInput}
        getUploadParams={fileParams}
        getFilesFromEvent={getFilesFromEvent}
        accept="image/*"
        maxFiles={1}
        inputContent="Drop A File"
        styles={{
          dropzone: { width: 600, height: 400 },
          dropzoneActive: { borderColor: "green" },
        }}
      />
      {/* <customImageContext.Provider
        value={{
          image,
        }}
      >
        {children}
      </customImageContext.Provider> */}
    </div>
  );
};
// export function useMeme() {
//   return useContext(customImageContext);
// }

export default FileUploadComponent;

// import React from "react";

// import { useState, useEffect, useRef } from "react";

// const CreateMeme = () => {
//   const [topText, setTopText] = useState("");
//   const [bottomText, setBottomText] = useState("");
//   const canvas = useRef(null);
//   return (
//     <div>
//       <canvas ref={canvas} width={400} height={256 + 80} />

//       <input
//         type="text"
//         value={topText}
//         onChange={(e) => setTopText(e.target.value)}
//       />
//       <input
//         type="text"
//         value={bottomText}
//         onChange={(e) => setBottomText(e.target.value)}
//       />
//     </div>
//   );
// };

// export default CreateMeme;
