import React, { useState } from "react";
import {
  SearchBar,
  VideoList,
  VideoDetail,
  Navbar,
  Footer,
} from "./components";

import youtube from "./api/youtube";

require("dotenv").config();
export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key: process.env.REACT_APP_YT_API,
        q: searchTerm,
      },
    });
    setVideos(videos);
    if (videos[0].id.kind === "youtube#video") {
      setSelectedVideo(videos[0]);
    } else setSelectedVideo(videos[1]);
  }
};
