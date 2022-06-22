import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { ListItemSecondaryAction } from "@material-ui/core";
function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(term);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            href="/"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
            alt="google_img"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hidebuttons />

          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/all">Image</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage_optionRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/Tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage_results ">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.Link} className="searchPage_resultsLink">
                {/* {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src(
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="items"
                      className="searchPage_resultImage"
                    />
                  )} */}
                {item.displayLink}
              </a>
              <a href={item.Link} className="searchPage_resulttitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultdec">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
