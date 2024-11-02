import Config from '@/config';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {Storage} from '@/utils';
import {RTKTagNames, StorageKeys} from '@/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL + '/api',
  prepareHeaders: headers => {
    const token = Storage.getItem(StorageKeys.TOKEN);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [RTKTagNames.USER],
});
