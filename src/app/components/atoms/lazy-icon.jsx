"use client";

import "./lazy-image.css";
import Image from "next/image";
import { useState } from "react";

export function LazyIcon(props) {
  const { title, src, alt, width, height, index = 0 } = props;

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (
        <div
          className="LoadingIcon"
          style={{
            width: loaded ? 0 : width,
            height: loaded ? 0 : height,
            display: loaded ? "hidden" : "block",
            animationDelay: ((index * 50) % 800) + "ms",
          }}
        ></div>
      )}
      <Image
        title={title}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: loaded ? width : 0,
          height: loaded ? height : 0,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s",
        }}
        onLoad={(e) => {
          setLoaded(true);
        }}
      />
    </>
  );
}
