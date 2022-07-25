import { ISearchResult } from '../../../app/types';
import { getSearchSuggestions } from '../searchAPI';
import { makeStoreForTesting } from '../../../app/store';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BASE_API_URL } from '../../../common/constants';

const mockData: ISearchResult = {
    search: 'default',
    suggestions: [
        {
            nrResults: 1100,
            searchterm: 'heren truien',
        },
        { nrResults: 1501, searchterm: 'dames truien' },
    ],
};

// mock the api
const server = setupServer(
    rest.get(BASE_API_URL + '/search', (req, res, ctx) =>
        // return mock data
        res(ctx.json(mockData)),
    ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Search Api', () => {
    it('should return the data properly', async () => {
        /* pre-setup for the case */

        // create the mock store
        const mockStore = makeStoreForTesting();

        //  dispatch the method to fetch and await for it
        await mockStore.dispatch(getSearchSuggestions('some+keyword'));
        // get the state of the mock store
        const state = mockStore.getState();

        /* make the assertions */

        // question count should be equal to 2
        expect(state.search.suggestions.length).toBe(2);
        // error should be null
        expect(state.search.error).toBeNull();
        // loading should be false
        expect(state.search.isLoading).toBeFalsy();
        // the 2nd index of suggestion should match with the mockData
        expect(state.search.suggestions[1].searchterm).toEqual(mockData.suggestions[1].searchterm);
    });
    it('should handle the error properly', async () => {
        server.use(
            rest.get(BASE_API_URL + '/search', (req, res, ctx) =>
                res(
                    // Send a valid HTTP status code
                    ctx.status(500),
                    // And a response body, if necessary
                    ctx.json('Error'),
                ),
            ),
        );
        const mockStore = makeStoreForTesting();
        await mockStore.dispatch(getSearchSuggestions('some+keyword'));
        const state = mockStore.getState();

        // question count should be equal to 2
        expect(state.search.suggestions.length).toBe(0);
        // error should be null
        expect(state.search.error).toBe('Request failed with status code 500');
        // loading should be false
        expect(state.search.isLoading).toBeFalsy();
    });
});
