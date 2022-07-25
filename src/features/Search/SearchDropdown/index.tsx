import React from 'react';
import { useAppSelector } from '../../../common/hooks';
import SuggestionItem from './SuggestionItem';
import './Style.scss';
import SearchDropdownLoading from './SearchDropdownLoading';

const SearchDropdown = () => {
    const { isShowDropdown, keyword, suggestions, isLoading, error } = useAppSelector(redux => redux.search);

    if (!isShowDropdown || keyword.length < 2 || error) return null;

    // Show the loading animation only on the first fetch
    if (suggestions.length === 0 && isLoading)
        return (
            <DropdownWrapper>
                <SearchDropdownLoading />
            </DropdownWrapper>
        );

    if (suggestions.length === 0) return null; // not loading, means nothing has been found

    return (
        <DropdownWrapper>
            <div data-testid="suggestion-items">
                {suggestions.map(suggestion => (
                    <SuggestionItem key={suggestion.searchterm} suggestion={suggestion} />
                ))}
            </div>
        </DropdownWrapper>
    );
};

const DropdownWrapper = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => (
    <div className="search-input-dropdown">{children}</div>
);

export default SearchDropdown;
