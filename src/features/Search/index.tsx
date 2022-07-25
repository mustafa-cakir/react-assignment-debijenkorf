import React from 'react';
import SearchInput from './SearchInput';
import SearchDropdown from './SearchDropdown';
import './Style.scss';

const Search = () => {
    return (
        <div className="search-input-container">
            <SearchInput />
            <SearchDropdown />
        </div>
    );
};

export default Search;
