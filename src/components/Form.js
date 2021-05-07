import React, { useState } from "react";

const Form = (props) => {
  const [url, setUrl] = useState("");
  console.log(url);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addUrl(url);
    setUrl("");
  }

  return (
    <div className="btnn md:mt-8">
      <form
        onSubmit={handleSubmit}
        className="md:flex md:justify-center md:items-center max-w-xs md:max-w-7xl mx-auto p-6 bg-primary-d-violet w-full rounded-md bg-shorten-mobile bg-no-repeat bg-right-top"
      >
        <input
          type="text"
          value={url}
          id="url-input"
          placeholder="Shorten a link here..."
          className="rounded-md w-full md:w-3/4 md:mr-8 pl-4 p-2.5"
          onChange={handleChange}
          required
        />
        <button
          className="
                mt-4
                md:mt-0
                py-3
                px-10
                md:p-2
                rounded-md
                w-full
                md:w-max
                bg-primary-cyan
                text-white
                font-bold
                text-lg"
        >
          Shorten it!
        </button>
      </form>
    </div>
  );
};

export default Form;
