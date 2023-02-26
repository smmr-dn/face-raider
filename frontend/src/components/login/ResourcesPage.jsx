import React, { useState } from "react";

//Need to know whether user is normal or the prof. If it's the prof they should be able to add things to this page
const ResourcesPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [canUpload, setCanUpload] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setCanUpload(true);
  };

  //fire API request to supabase
  const handleSubmission = (event) => {
    console.log(selectedFile);
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {canUpload ? (
        <button onClick={handleSubmission}>Upload File</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ResourcesPage;
