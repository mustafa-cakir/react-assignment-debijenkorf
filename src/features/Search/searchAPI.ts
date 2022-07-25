import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from '../../common/constants';
import { ISearchResult } from '../../app/types';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getSearchSuggestions = createAsyncThunk('sample/getTodoValue', async (q: string, { rejectWithValue }) => {
    try {
        const response = await axios.get<ISearchResult>(BASE_API_URL + '/search', {
            params: {
                q,
            },
        });
        // The value we return becomes the `fulfilled` action payload
        return response.data.suggestions;
    } catch (error: any) {
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});
