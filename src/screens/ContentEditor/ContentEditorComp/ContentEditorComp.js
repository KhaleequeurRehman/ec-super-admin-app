import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { ContentEditorHeader } from "./ContentEditorHeader";
import ContentEditorDataGrid from "./ContentEditorDataGrid";
import { UploadNewMedia } from "../UploadNewMedia/UploadNewMedia";
import { UpdateMedia } from "../UpdateMedia/UpdateMedia";

export const ContentEditorComp = () => {

  const [showUploadMedia, setShowUploadMedia] = useState(false);
  const [showUpdateMedia, setShowUpdateMedia] = useState(false);
  const [selectMediaItem, setSelectMediaItem] = useState("");

  console.log('selectMediaItem ',selectMediaItem)

  return (
    <div>
      {showUploadMedia ? (
        
        <Box>
          <UploadNewMedia/>
        </Box> 
        
      ) 
      :
      showUpdateMedia ? (
        <Box>
        <UpdateMedia selectMediaItem={selectMediaItem}/>
      </Box> 
      
      ) 
      :
      (
        <Box>
          <ContentEditorHeader setShowUploadMedia={setShowUploadMedia} 
          setShowUpdateMedia={setShowUpdateMedia} setSelectMediaItem={setSelectMediaItem} />
        </Box>
      )
      }
    </div>
  );
};
