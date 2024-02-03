"use client";

import { useState, useRef } from "react";
import "./lazy-image.css";
const { default: Image } = require("next/image");

export function LazyImage(props) {
  const { url, miniUrl, width = 354, height = 150, alt = "" } = props;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`ImgWrapper ${loaded ? "Loaded" : ""}`}
      style={{
        backgroundImage: `url(${miniUrl})`,
        width,
        height,
      }}
    >
      <Image
        src={url}
        ref={imgRef}
        alt={alt}
        className={`Img object-cover ${loaded ? "Loaded" : ""}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true);
        }}
      />
    </div>
  );
}
