import './searchHistory.css';
import React from "react";
import search from "../assets/search.png";
import deleteButton from "../assets/delete.png";

const SearchHistory = (props) => {
    const {searchList, onDeleteHistory, onSubmit} = props;

    const historyList = searchList && searchList.map((searchData, value) => {
        const num = value + 1;
        return (
            <div className={"searchData"}>
                <p> {num}: {searchData.city}, {searchData.country}
                <div className={'date'}>
                    {searchData.time}
                    <button onClick={(e) => onSubmit(e, searchData.city, searchData.country)}><img className={'button'} src={search}/></button>
                    <button onClick={() => onDeleteHistory(value)}><img className={'button'} src={deleteButton}/></button>
                </div>
                </p>
            </div>

        )
    });

    return (
        <div className="searchHistory">
            {historyList}
        </div>
    );
};

export default SearchHistory;
