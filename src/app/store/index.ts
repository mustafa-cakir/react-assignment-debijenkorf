import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../../features/Search/searchSlice';

const rootReducer = {
    search: searchReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

// makeSure() is defined to make store creation while performing unit/integration tests
export const makeStoreForTesting = (preloadedState?: any) =>
    configureStore({
        reducer: rootReducer,
        ...(preloadedState && { preloadedState }),
    });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
