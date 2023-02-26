import React, { useState, useEffect } from "react";

const ResourcesPage = ({ courseId }) => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseFiles = async () => {
      const requestUrl = `http://localhost:5000/getCourseFiles?course_id=${courseId}`;
      try {
        const response = await fetch(requestUrl, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch course files");
        }
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCourseFiles();
  }, [courseId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 style={{ marginBottom: "-10px" }}>Resources</h1>
      {files === null ? (
        <></>
      ) : (
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          {files.map((item, number) => {
            return (
              <li key={number}>
                <a
                  href={item.link}
                  style={{ fontSize: "25px", textAlign: "left" }}
                >
                  {item.file_name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ResourcesPage;
