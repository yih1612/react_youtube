import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`videos/${text}`);
  };
  return (
    <nav>
      <Link to="/">Youtube</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Search</button>
      </form>
    </nav>
  );
}
