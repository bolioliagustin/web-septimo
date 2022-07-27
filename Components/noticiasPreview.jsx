import React from "react";

export default function NoticiasPreview({ value }) {
  const ApiUrl = "https://secret-springs-41816.herokuapp.com";
  return (
    <>
    <div className="noticiaspreview">
      <div>
        <img
        className="card-img-top"
          src={value.attributes.image.data.attributes.url}
          alt="Card image cap"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title bold">{value.attributes.title}</h5>
        <p class="card-text extralight">
          {value.attributes.articleDescription}
        </p>
      </div>
      <div class="card-button">
        <a href="" class="btn btn_primary">
          Mas informacion
        </a>
      </div>
      <div class="card-footer text-muted">{value.attributes.nameAuthor} - {value.attributes.creationDateArticle}</div>
      </div>
    </>
  );
}
