import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center items-center gap-2 m-4">
      <div className="flex items-center grow border rounded-md px-2 gap-0.5 ">
        <img src="search.png" alt=""  />
        <input
          type="text"
          className=" w-full p-2 border-none outline-none"
          placeholder="Search contacts..."
        />
      </div>

      <img src="add.png" alt="" />
    </div>
  );
};

export default Search;
