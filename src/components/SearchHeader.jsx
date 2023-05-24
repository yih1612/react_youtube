import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };
  return (
    <header>
      <Link to="/">Youtube</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button>Search</button>
      </form>
    </header>
  );
}
