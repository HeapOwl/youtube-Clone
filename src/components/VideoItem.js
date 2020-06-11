import React from "react";

export default ({ video, onVideoSelect }) => {
  return (
    <article
      onClick={() => onVideoSelect(video)}
      className="media "
      style={{ cursor: "pointer" }}
    >
      <figure className="media-left">
        <p className="image is-128x128">
          <img
            src={video.snippet.thumbnails.medium.url}
            className="image is-98x98"
            alt="Failed"
          />
        </p>
      </figure>

      <div className="media-content">
        <div className="content">
          <b>{video.snippet.title}</b>
        </div>
      </div>
    </article>
  );
};
