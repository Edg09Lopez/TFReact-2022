import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Spinner from "./Spinner";

function Detail(props) {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("es");
  const [pageSize, setPageSize] = useState("10");

  const { toSearch } = props;
  useEffect(() => {
    let prevSearch;
    setSearch(toSearch);
    prevSearch !== search && search ? setNews([]) : (prevSearch = search);
    prevSearch = search;
  }, [toSearch]);

  useEffect(() => {
    setLoading(true);
    search &&
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=0c4a982640634bac9fbf09682c9aba17`
        )
        .then((response) => {
          setNews([...news, ...response.data.articles]);
          setTotalNews(response.data.totalResults);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
  }, [search, page]);

  const loadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <>
      {news && news.length > 0 ? (
        <>
          <h2>
            Encontramos {" "}
            {page * pageSize > totalNews ? totalNews : page * pageSize} of{" "}
            {totalNews} {" "} sobre {search}
          </h2>
          <section className="news-container">
            {news.map((article) => {
              return <Card article={article}></Card>;
            })}
          </section>

          {news.length === totalNews ? null : (
            <button className="btn btn-dark" onClick={loadMore}>Cargar Mas {" "} </button>
          )}
        </>
      ) : search ? (
        loading ? (
          <Spinner> </Spinner>
        ) : (
          <h2>No hay articulos relacionados con el tema</h2>
        )
      ) : null}
    </>
  );
}

export default Detail
