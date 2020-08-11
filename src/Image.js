import React from "react";

function Image({ data: { className, src, paragraph, width = 400 } }) {
  return (
    <React.Fragment>
      <img className={className} alt={className} src={src} width={width} />
      <p>{paragraph}</p>
    </React.Fragment>
  );
}

export default Image;
