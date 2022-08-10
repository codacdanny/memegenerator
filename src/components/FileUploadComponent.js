import React from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import { useState } from "react";
import CustomizeMeme from "./CustomizeMeme";

const FileUploadComponent = ({ children }) => {
  const [image, setImage] = useState();

  let dropzoneWidth = window.innerWidth - 30;

  const fileParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const onFileChange = ({ meta, file }, status) => {
    console.log(meta, file, status);
    if (status === "done") {
      console.log(meta, file, status);
      setImage(meta.previewUrl);
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
    const textToDisplay =
      window.innerWidth >= 768
        ? "Upload/Drag and drop Your Image"
        : "Upload your Image";

    const textMsg = files.length > 0 ? "Upload Again" : textToDisplay;
    // "Upload/Drag and drop Your Image";
    return (
      <label className="btn centerBtn">
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

  return image ? (
    <CustomizeMeme image={image} />
  ) : (
    <div>
      <Dropzone
        onSubmit={onSubmit}
        onChangeStatus={onFileChange}
        InputComponent={selectFileInput}
        getUploadParams={fileParams}
        getFilesFromEvent={getFilesFromEvent}
        accept="image/*"
        maxFiles={1}
        inputContent="Drop A File"
        styles={{
          dropzone: { width: dropzoneWidth, height: 400 },
          dropzoneActive: { borderColor: "green" },
        }}
      />
    </div>
  );
};

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
