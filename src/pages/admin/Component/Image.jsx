import React, { useState } from 'react'
export default function Image({alt, src, classes}) {

    const [imageSRC, setImageSRC]  =  useState(src);
    const imageLoader = () => { 
      setImageSRC("/About/bydefalult.png");
    }
    return (
        <img
          className={`card-img-top img-fluid mr-2 ${classes}`}
          onError={imageLoader}
          src={imageSRC || "/About/bydefalult.png"}
          alt={alt}
        />
    )
}
