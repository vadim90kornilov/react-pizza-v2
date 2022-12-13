import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="576" cy="246" r="20" />
    <circle cx="569" cy="232" r="48" />
    <circle cx="586" cy="234" r="10" />
    <circle cx="143" cy="136" r="125" />
    <rect x="8" y="278" rx="10" ry="10" width="280" height="30" />
    <rect x="5" y="321" rx="10" ry="10" width="280" height="88" />
    <rect x="7" y="427" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="421" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
