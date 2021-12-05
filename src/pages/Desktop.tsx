import React, { useState, useEffect } from "react";

const Desktop = () => {
  const [state, setState] = useState<Blob | MediaSource>();
  const [url, setUrl] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.files[0]);
  };
  useEffect(() => {
    if (state) {
      console.log(state);
      
      const url = URL.createObjectURL(state);
      console.log(url);
      
      setUrl(url);
    }
  }, [state]);
  return (
    <div>
      <input onChange={handleChange} type="file" />
      <img src={url} />
    </div>
  );
};

export default Desktop;
