import React from "react";

export default ({ video }) => {
  if (!video)
    return (
      <div>
        <section class="hero is-primary is-medium is-success is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Search to Watch</h1>
              <h2 class="subtitle">on YT clone</h2>
            </div>
          </div>
        </section>
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
