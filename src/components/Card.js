import React from "react";

function Card({ article }) {
  return (
    <a href={article.url} target="_blank">
      <article>
        <div className="cards">
            <div className="card">
              <h2 className="card-title">{article.title}</h2>
              <img className="card-img" src={article.urlToImage} alt={article.title}/>
              <h4 className="card-desc">Autor: {article.author} Publicado: {article.publishedAt}</h4>
            </div>
          </div>
      </article>
    </a>
  );
}
export default Card
