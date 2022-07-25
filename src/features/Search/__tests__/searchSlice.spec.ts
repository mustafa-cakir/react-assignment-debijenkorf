import { ISearchState, ISuggestion } from '../../../app/types';
import searchReducer, { cancelSearch, setIsShowDropdown, setKeyword } from '../searchSlice';

describe('SearchSlide reducer', () => {
    const initialState: ISearchState = {
        suggestions: [],
        isLoading: true,
        error: null,
        isShowDropdown: false,
        keyword: '',
    };

    it('should handle initial state', () => {
        expect(searchReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle add keyword properly', () => {
        const actual = searchReducer(initialState, setKeyword('some keyword'));
        expect(actual.keyword).toBe('some keyword');
    });

    it('should handle cancel keyword properly', () => {
        const actual = searchReducer({ ...initialState, keyword: 'some keyword' }, cancelSearch());
        expect(actual.keyword).toBe('');
    });

    it('should handle set show dropdown to true properly', () => {
        const actual = searchReducer(initialState, setIsShowDropdown(true));
        expect(actual.isShowDropdown).toBeTruthy();
    });

    it('should handle set show dropdown to false properly', () => {
        const actual = searchReducer(initialState, setIsShowDropdown(false));
        expect(actual.isShowDropdown).toBeFalsy();
    });
});
