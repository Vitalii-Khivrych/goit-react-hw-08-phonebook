import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const CONTACTS = 'contacts';
const tagTypes = ['contacts'];

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: CONTACTS,
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: tagTypes,

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: CONTACTS, method: 'get' }),
      providesTags: tagTypes,
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: CONTACTS,
        method: 'POST',
        data: newContact,
      }),
      invalidatesTags: tagTypes,
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `${CONTACTS}/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
