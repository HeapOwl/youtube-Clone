import React from "react";

export default ({ video }) => {
  if (!video)
    return (
      <div>
        <h1 className="title">Search on Clonned YT!</h1>
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-image ">
          <figure className="image ">
            <iframe
              frameBorder="0"
              width="100%"
              height="480px"
              title="Video Player"
              src={videoSrc}
            />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image ">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">
                {" "}
                {video.snippet.title} - {video.snippet.channelTitle}
              </p>
              <p className="subtitle is-6">{video.snippet.channelTitle}</p>
            </div>
          </div>

          <div className="content">
            {video.snippet.description}

            <br />
            <time>
              <b>{video.snippet.publishedAt}</b>
            </time>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
