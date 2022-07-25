import React, { useMemo } from 'react';
import { ISuggestion } from '../../../../app/types';
import './Style.scss';
import { useAppSelector } from '../../../../common/hooks';
import { Link } from 'react-router-dom';

type Prop = {
    suggestion: ISuggestion;
};

const SuggestionItem = ({ suggestion }: Prop) => {
    const { keyword } = useAppSelector(redux => redux.search);
    const { searchterm, nrResults } = suggestion;

    const hightlightedTerm = useMemo<JSX.Element | string>((): JSX.Element | string => {
        if (!keyword) return searchterm;
        const parts = searchterm.split(new RegExp(`(${keyword})`, 'gi'));
        return (
            <>
                {parts.map((part, index) => {
                    return (
                        <React.Fragment key={`${part}_${index}`}>
                            {part.toLowerCase() === keyword.toLowerCase() ? (
                                <span className="highlight" data-testid="highlight">
                                    {part}
                                </span>
                            ) : (
                                part
                            )}
                        </React.Fragment>
                    );
                })}
            </>
        );
    }, [keyword, searchterm]);

    return (
        <Link to="#" className="suggestion-item" title={searchterm}>
            {hightlightedTerm} ({nrResults})
        </Link>
    );
};

export default SuggestionItem;
