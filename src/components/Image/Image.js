import React from "react";
import { src } from "../../helpers/frontend";

const Image = ({ dataSrc, srcPath, size = "large", ...rest }) => {
  const _src = src(srcPath)[size];

  if (dataSrc) {
    return <img data-src={_src.img.src} {...rest} />;
  }

  return (
    <picture>
      <source srcSet={_src.source} type="image/webp" />
      <img {..._src.img} {...rest} />
    </picture>
  );
};

export default Image;
