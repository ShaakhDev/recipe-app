import {configureStore} from '@reduxjs/toolkit';
import {themeSlice} from './slices';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {baseApi} from '@/features';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [themeSlice.name]: themeSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
