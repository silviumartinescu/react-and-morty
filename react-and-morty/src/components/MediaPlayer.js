import React, { memo } from "react";

const MediaPlayer = memo(() => (
  <iframe
    title="track"
    src="https://open.spotify.com/embed/track/1Y6Pxm8LFw1zJBc3ZW3Stt?utm_source=generator&theme=0"
    width="100%"
    height="80"
    frameBorder="1"
    allowFullScreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
));

export default MediaPlayer;
