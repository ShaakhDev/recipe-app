import {RTKTagNames} from '@/constants';
import {baseApi} from '../api';

export const AuthEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
      query: body => ({
        url: '/auth/sign-up',
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),
  }),
  overrideExisting: true,
});

export const {useSignUpMutation} = AuthEndpoints;
