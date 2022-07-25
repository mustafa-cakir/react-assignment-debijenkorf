export type IRoute = {
    Component: () => JSX.Element;
    path: string;
};

export type IRoutes = IRoute[];

export type ISuggestion = {
    nrResults: number;
    searchterm: string;
};

export type ISearchResult = {
    search: string;
    suggestions: ISuggestion[];
};

export type ISearchState = {
    suggestions: ISuggestion[];
    isLoading: boolean;
    error: null | string;
    isShowDropdown: boolean;
    keyword: string;
};
