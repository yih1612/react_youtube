import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-xl  mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="ml-1 mt-1 text-3xl font-youtube font-bold tracking-tighter">
          Youtube
        </h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 px-5 py-2 bg-black text-gray-50 outline-none rounded-l-full"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button className="px-6 bg-zinc-800 rounded-r-full hover:brightness-105">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
