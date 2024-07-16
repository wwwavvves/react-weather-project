import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <input type="search" placeholder="Enter a city" className="search-input" />
            <input type="submit" value="Search" className="search-btn"/>
        </div>
    )
}