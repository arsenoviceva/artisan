import React from "react";

export const TopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use "auto" for instant scroll
    });
  };
  return (
    <div className="top-arrow" onClick={scrollToTop}>
      <img
        src="/images/Arrow_top_svg.svg"
        alt="top-arrow"
        className="top-arrow-icon"
      />
      <p className="p-0 m-0 text-red fw-bold"> TOP </p>
    </div>
  );
};
