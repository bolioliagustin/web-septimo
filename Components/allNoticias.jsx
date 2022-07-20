import React from "react";
import NoticiasPreview from "./noticiasPreview";

function AllNoticias({ value }) {
  function renderNoticiasPreview() {
    return value.map((value) => {
      return <NoticiasPreview value={value} key={value.id} />;
    });
  }

  return (
    <>
      <div className="container-lg center mb-4">
        <div className="cards-noticias ">{renderNoticiasPreview()}</div>
      </div>
    </>
  );
}

export default AllNoticias;
