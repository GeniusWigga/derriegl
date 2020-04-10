import React from "react";
import { src } from "../../helpers/frontend";

const Image = ({ srcPath, size = "large", ...rest }) => {
  const _src = src(srcPath)[size];
  return (
    <picture>
      <source srcSet={_src.source} type="image/webp" />
      <img {..._src.img} {...rest} />
    </picture>
  );
};

export default Image;
