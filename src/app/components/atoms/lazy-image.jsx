"use client";

import "./lazy-image.css";
import { useState, useRef } from "react";
import Image from "next/image";

export function LazyImage(props) {
  const { url, miniUrl, alt = "" } = props;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`ImgWrapper ${loaded ? "Loaded" : ""}`}
      style={{
        backgroundImage: `url(${miniUrl})`,
      }}
    >
      <Image
        src={url}
        ref={imgRef}
        alt={alt}
        fill
        className={`Img object-cover ${loaded ? "Loaded" : ""}`}
        sizes="100%"
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true);
        }}
      />
    </div>
  );
}
