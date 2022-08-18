import React, { useState, useEffect } from "react";
import Detail from "../components/Detail";
import Search from "../components/Search";

export default function Home() {
  const [toSearch, setToSearch] = useState(null);

  const handleSearch = (search) => {
    setToSearch(search);
  };

  useEffect(() => {}, [toSearch]);

  return (
    <>
      <Search handleSearch={handleSearch}></Search>
      <Detail toSearch={toSearch}></Detail>
    </>
  );
}
