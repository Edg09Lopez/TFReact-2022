import React, { useState, useEffect, Component } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)

  const onSubmited = (e) => {
    e.preventDefault();
    props.handleSearch(search);
  };

  const changeState = (e) => {
    setSearch(e.target.value);
  };

  const addNewCustomer = async (name) => {
    await search.addCustomer(name);
    props.funcParam();
  }

  useEffect(() => {
    if (search.length <= 2) {
        setIsDisabled(true);
    }
    else {
        setIsDisabled(false);
    }
  }, [search]);

  
  return (
    <>
      <form onSubmit={onSubmited} className="searcher-container">
        <input
          className="searcher-input"
          placeholder="Noticias"
          id="standard-basic"
          label="Buscar Noticia"
          variant="standard"
          autoFocus defaultValue=""
          onChange={changeState}
        />
        <button className="btn btn-primary searcher-btn"
          disabled = {isDisabled}
          onClick = {() => addNewCustomer(search)}
          type="submit" 
          variant="contained">Search
        </button>
      </form>
    </>
  );
}

export default Search
