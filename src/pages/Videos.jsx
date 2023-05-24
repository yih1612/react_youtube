import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return (
    <>
      <h2>{keyword ? `Videos 🔍 ${keyword}` : `Videos 🔥`}</h2>
    </>
  );
}
