import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSubmited = (e) => {
    e.preventDefault();
    props.handleSearch(search);
  };

  const changeState = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmited} className="searcher-container">
        <input
          className="searcher-input"
          placeholder="Noticias"
          id="standard-basic"
          label="Buscar Noticia"
          variant="standard"
          onChange={changeState}
        />
        <button className="btn btn-primary searcher-btn" type="submit" variant="contained">Search</button>
      </form>
    </>
  );
}

export default Search
