import React, { useState } from 'react'
// import dataimage from "../../../public/assets/images/bydefault.png"
export default function Image({alt, src, classes}) {

    const [imageSRC, setImageSRC]  =  useState(src);
    const imageLoader = () => { 
      setImageSRC(dataimage);
    }
    return (
        <img
          className={`card-img-top img-fluid mr-2 ${classes}`}
          onError={imageLoader}
          src={imageSRC }
          alt={alt}
        />
    )
}
