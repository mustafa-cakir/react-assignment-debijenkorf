import React, { useCallback, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { getSearchSuggestions } from '../searchAPI';
import Icons from '../../../common/components/Icons';
import { cancelSearch, setIsShowDropdown, setKeyword } from '../searchSlice';
import { debounce } from '../../../common/utils';
import './Style.scss';

const SearchInput = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const { keyword } = useAppSelector(redux => redux.search);

    const debounceKeyUpHandler = useCallback(
        debounce((event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            if (value.length > 1) {
                dispatch(getSearchSuggestions(value));
            }
        }),
        [],
    );

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setKeyword(event.target.value));
    };

    const onFocusHandler = () => {
        dispatch(setIsShowDropdown(true));
    };

    const onBlurHandler = () => {
        dispatch(setIsShowDropdown(false));
    };

    const clearBtnClickHandler = () => {
        dispatch(cancelSearch());
        inputEl?.current?.focus();
    };

    const searchBtnClickHandler = () => {
        // if keyword is less than 2 letters, don't do anything.
        if (keyword.length < 2) return;
        // Otherwise navigate to result page with the query in the URL (beyond the scope of this assignment)
    };

    return (
        <div className="search-input">
            <input
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                type="text"
                value={keyword}
                onKeyUp={debounceKeyUpHandler}
                onChange={onChangeHandler}
                ref={inputEl}
                data-testid="input"
            />
            <button aria-label="Search" className="search-btn" onClick={searchBtnClickHandler}>
                <Icons name="search" />
            </button>
            {keyword && (
                <button
                    data-testid="clear-btn"
                    aria-label="Clear Search"
                    className="clear-btn"
                    onClick={clearBtnClickHandler}
                >
                    <Icons name="x" />
                </button>
            )}
        </div>
    );
};

export default SearchInput;
