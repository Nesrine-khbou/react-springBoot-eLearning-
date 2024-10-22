import React from 'react';
import searchIcon from "../../assets/photos/icons/search-icon.PNG"



function SearchBar() {
    return (
        <div id="search">
            <input type="text" placeholder="Search for course .."/>
            <img src={searchIcon} alt="search-icon"/>
        </div>
    )
}

export default SearchBar;