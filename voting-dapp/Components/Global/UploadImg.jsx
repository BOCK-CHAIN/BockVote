import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const UploadImg = ({ setLoader, notifySuccess, notifyError, setImage }) => {
  const uploadToIPFS = async (file) => {
    if (file) {
      try {
        setLoader(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: `01afd480c681abd38507`,
            pinata_secret_api_key: `c1e9afea74931785b2ff1796ec92091705af53b229dbb8d77ee8e6d1a7cd8a9a`,
            "Content-Type": "multipart/form-data",
          },
        });

        const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        setImage(url);
        setLoader(false);
        notifySuccess("Cover Image Uploade Successfully");
      } catch (error) {
        setLoader(false);
        notifyError("Unable to upload image to Pinata");
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToIPFS(acceptedFile[0]);
  }, []);

  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({ onDrop, maxSize: 500000000000 });
  return (
    <div {...getRootProps()} class="messageBox">
      <div class="fileUploadWrapper">
        <label for="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 337 337"
          >
            <circle
              stroke-width="20"
              stroke="#6c6c6c"
              fill="none"
              r="158.5"
              cy="168.5"
              cx="168.5"
            ></circle>
            <path
              stroke-linecap="round"
              stroke-width="25"
              stroke="#6c6c6c"
              d="M167.759 79V259"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="25"
              stroke="#6c6c6c"
              d="M79 167.138H259"
            ></path>
          </svg>
          <span class="tooltip">Upload Profile image</span>
        </label>
        <input {...getInputProps()} type="file" id="file" name="file" />
      </div>
    </div>
  );
};

export default UploadImg;
