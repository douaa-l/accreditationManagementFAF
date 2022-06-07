import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import { Button } from "@material-ui/core";
import { AvatarInput } from "../Styles/OrganismesStyle";



export default function FileReader(props) {
  const [url, setUrl] = useState(props.img);



  const handleFiles = (files) => {
    console.log(files.base64);
    setUrl(files.base64);
    
  };

  useEffect(()=> props.newImage(url),[url]);

  return (
    <div >
      <>
        <AvatarInput>
          <img src={url} alt="logo" />
        </AvatarInput>

        <ReactFileReader
          fileTypes={[".png", ".jpg"]}
          base64={true}
          handleFiles={handleFiles}
        >
          <FiCamera style={{ width: 30, height: 30 }} as={Button} />
        </ReactFileReader>
      </>
    </div>
  );
}
