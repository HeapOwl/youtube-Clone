import React, { useState } from "react";

import { SearchBar, VideoList, VideoDetail } from "./components";
import NavBar from "./components/Navbar";
import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <NavBar />
      <div className="container">
        <SearchBar onSubmit={handleSubmit} />

        <div className="columns ">
          <div className="column is-two-thirds">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with <i className="fa fa-heart has-text-danger"></i> by
            <strong> Prateek Rai </strong>
          </p>
          <a
            className="has-text-danger"
            href="https://www.instagram.com/prateek.py/"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          &nbsp;
          <a href="https://github.com/HeapOwl" className="has-text-success">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
      </footer>
    </>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 7,
        key: REACT_APP_YT_API,
        q: searchTerm,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};
