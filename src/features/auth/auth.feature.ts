import {RTKTagNames} from '@/constants';
import {baseApi} from '../api';
import {LoginRequest, LoginResponse} from './auth.feature.types';

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
    login: build.mutation<LoginResponse, LoginRequest>({
      query: body => ({
        url: '/auth/sign-in',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useSignUpMutation, useLoginMutation} = AuthEndpoints;
