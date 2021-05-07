import React from "react";

const Results = (props) => {
  let button = "copy";

  return (
    <div className=" md:flex md:justify-between md:items-center bg-white max-w-xs md:max-w-7xl mx-auto p-2 mb-20 w-full rounded-md ">
      <label
        htmlFor={props.name}
        className="rounded-md text-black p-2 w-full my-1"
      >
        {props.name}
      </label>

      <span className="md:flex items-center">
        <input
          type="text"
          placeholder="Unknown error"
          className="  text-primary-cyan p-2  my-1 w-full md:w-auto"
        />
        <button className="md:ml-2 p-2 w-full  md:px-8 bg-primary-cyan text-white rounded hover:opacity-50">
          {button}
        </button>
      </span>
    </div>
  );
};

export default Results;
