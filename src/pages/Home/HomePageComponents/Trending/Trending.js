import React from "react";
import TrendingCSS from "../Trending/Trending.module.css";
import { Link } from "react-router-dom";
function Trending() {
  return (
    <div>
      <h2 className={TrendingCSS["mid-heading"]}>TRENDING</h2>
      {/* <div className={TrendingCSS["cards-row"]}>
        <div className={`${TrendingCSS["col-one"]} ${TrendingCSS["col"]}`}>
          <Link to="/videolisting">
            <img
              src="http://images6.fanpop.com/image/photos/36400000/Bitten-TV-Series-image-bitten-tv-series-36449038-1166-1600.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className={`${TrendingCSS["col-two"]} ${TrendingCSS["col"]}`}>
          <Link to="/videolisting">
            <img
              src="https://wallpapercave.com/dwp1x/wp8807401.jpg"
              alt=""
              srcSet=""
            />
          </Link>
        </div>
        <div className={`${TrendingCSS["col-three"]} ${TrendingCSS["col"]}`}>
          <Link to="/videolisting">
            <img
              src="https://www.filmiforest.com/img/movies/524/pushpa-telugu-movie-photo-5.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className={`${TrendingCSS["col-four"]} ${TrendingCSS["col"]}`}>
          <img src="https://pbs.twimg.com/media/Dz7Sv2JVsAAU2De.jpg" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export { Trending };
