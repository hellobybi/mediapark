import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.search.value.trim();
    navigate(`/search?title=*${value}`);
  };

  const handleButton = (e) => {
    e.preventDefault();
    const value = e.currentTarget.form.search.value.trim();
    navigate(`/search?title=*${value}`);
  };

  const handleData = (value) => {
  };

  return (
    <div className="w-full lg:w-[45%]">
      <form
        onSubmit={handleSearch}
        className="flex justify-between p-[3px] items-center rounded-[12px] border-[1px] border-gray-200"
      >
        <input
          type="text"
          placeholder="Искать товары"
          name="search"
          onChange={(e) => handleData(e.target.value)}
          className="w-[100%] h-[36px] pl-4 rounded-md ml-[10px] outline-none"
        />
        <button
          onClick={handleButton}
          className="text-center bg-red-600 flex justify-center items-center rounded-[12px] py-[7px] px-[25px]"
        >
          <CiSearch className="text-white text-[30px]" />
        </button>
      </form>
    </div>
  );
};

export default Search;
