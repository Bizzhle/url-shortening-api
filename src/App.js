import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import Home from "./components/Home";

function App(props) {
  const [data, setData] = useState("");
  const [originalUrl, setOriginalUrl] = useState([]);
  const [shortenUrl, setShortenUrl] = useLocalStorageState([]);

  // // const Shorten_API = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

  console.log(data);

  function addUrl(url) {
    const newUrl = { url };
    setOriginalUrl([...originalUrl, newUrl]);
  }

  useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          console.log(response.result.short_link);
          localStorage.setItem(originalUrl, response.result.short_link);
          setShortenUrl([...shortenUrl, originalUrl]);
        }
      })
      .catch((e) => console.log(e));
  }, [originalUrl]);

  return (
    <div className="font-poppins">
      <Home addUrl={addUrl} originalUrl={originalUrl} />
    </div>
  );
}

export default App;
