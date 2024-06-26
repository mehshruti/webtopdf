import React from 'react';
import "../pratial/styles/viewPage.css";
import { Button } from '@headlessui/react';

const ViewPage = () => {
  return (
    <div className='viewPage-container'>
      <div className="messageBox">
        <div className="fileUploadWrapper">
          <label >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
              <circle
                strokeWidth="20"
                stroke="#6c6c6c"
                fill="none"
                r="158.5"
                cy="168.5"
                cx="168.5"
              ></circle>
              <path
                strokeLinecap="round"
                strokeWidth="25"
                stroke="#6c6c6c"
                d="M167.759 79V259"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="25"
                stroke="#6c6c6c"
                d="M79 167.138H259"
              ></path>
            </svg>
            {/* <span className="tooltip">Add an image</span> */}
          </label>
          <input type="file" id="file" name="file" />
        </div>
        <input
          required=""
          placeholder="Write here..."
          type="text"
          id="messageInput"
        />
        <Button id="sendButton">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
            <path
              fill="none"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="33.67"
              stroke="#6c6c6c"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ViewPage;
